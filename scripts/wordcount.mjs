#!/usr/bin/env node
// Authored-prose word counter for the page templates in CLAUDE.md.
// Usage: node scripts/wordcount.mjs <file.mdx> [more.mdx ...]
//
// Counts only what the writer chose to write at length. Content mandated by
// another rule in CLAUDE.md does not count. See "Word count basis" in
// CLAUDE.md for the governing statement of the rule.
//
// Excluded: frontmatter, import lines, JSX/component tags and attributes,
// HTML comments, markdown link targets (visible link text is counted), all
// heading text, all table content, the "Related" and "Go deeper" sections
// including their headings, SEC-path callouts, the standard disclaimer, and
// a single-sentence line under a closing "## Next step" heading.
//
// Counted: body prose, cross-link bullets that sit in body prose, worked
// examples, and every callout that is not an SEC-path callout or the
// standard disclaimer.

import { readFileSync } from 'node:fs';

// Sections dropped whole, heading included.
const DROPPED_SECTIONS = ['Related', 'Go deeper'];

// The fixed opening of an SEC-path callout.
const SEC_PATH_OPENING = 'If you are on the SEC path:';

// The standard educational-content disclaimer, as given in CLAUDE.md.
const DISCLAIMER =
  'This guide is educational material about how independent advisory firms ' +
  'are established and run. It is not legal, compliance, tax, or investment ' +
  'advice, and it does not create an advisory or professional relationship. ' +
  'Registration requirements vary by state and change over time. Verify ' +
  'anything here against the current rules of your regulator, and get your ' +
  'own counsel before acting.';

// Strip markup from a line so what is left is countable words.
function strip(line) {
  return line
    .replace(/<\/?[A-Za-z][^>]*>/g, ' ') // JSX/HTML tags and their attributes
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1') // images: keep alt text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links: keep text, drop target
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/, ' ') // list marker
    .replace(/\s\[#[^\]]*\]/g, ' ') // explicit heading id
    .replace(/^#{1,6}\s+/, ' ') // heading hashes
    .replace(/[*_`]+/g, ''); // emphasis and inline-code marks
}

function countWords(text) {
  return text.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

const normalize = (text) => strip(text).replace(/\s+/g, ' ').trim();

// A single sentence: ends in terminal punctuation with no internal sentence
// break. Used only for the closing "Next step" line, which is one short
// sentence by template; anything longer there is authored prose and counts.
function isSingleSentence(text) {
  const t = normalize(text);
  if (!/[.!?]$/.test(t)) return false;
  return !/[.!?]\s+\S/.test(t);
}

function authoredProse(source) {
  const text = source.replace(/\r\n/g, '\n').replace(/^---\n[\s\S]*?\n---\n/, '');
  const lines = text.split('\n');

  let words = 0;
  let dropUntilNextH2 = false; // inside a Related / Go deeper section
  let callout = null; // open callout type
  let calloutBuffer = [];
  let nextStep = null; // buffered body of a closing "Next step" section

  const flushCallout = () => {
    const body = calloutBuffer.join(' ');
    const isSecPath = normalize(body).startsWith(SEC_PATH_OPENING);
    const isDisclaimer = normalize(body) === DISCLAIMER;
    if (!isSecPath && !isDisclaimer) {
      words += calloutBuffer.reduce((sum, l) => sum + countWords(strip(l)), 0);
    }
    callout = null;
    calloutBuffer = [];
  };

  // A "Next step" body counts only when it is more than a single sentence.
  const flushNextStep = () => {
    if (nextStep === null) return;
    const body = nextStep.join('\n');
    if (!isSingleSentence(body)) {
      words += nextStep.reduce((sum, l) => sum + countWords(strip(l)), 0);
    }
    nextStep = null;
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (callout !== null) {
      if (/^<\/Callout>/.test(line)) flushCallout();
      else calloutBuffer.push(line);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2].replace(/\s*\[#[^\]]*\]\s*$/, '').trim();
      if (level <= 2) {
        flushNextStep();
        dropUntilNextH2 = DROPPED_SECTIONS.includes(title);
      }
      // Heading text itself is never counted.
      if (level === 2 && title === 'Next step') nextStep = [];
      continue;
    }

    if (dropUntilNextH2) continue;
    if (line === '') continue;
    if (/^import\s/.test(line)) continue;
    if (/^<!--/.test(line)) continue; // HTML comment
    if (/^\|/.test(line)) continue; // table row or separator

    const open = line.match(/^<Callout\s+[^>]*\btype="([a-z]+)"[^>]*>$/);
    if (open) {
      callout = open[1];
      calloutBuffer = [];
      continue;
    }
    if (/^<\/?[A-Za-z][^>]*>$/.test(line)) continue; // a line that is only a tag

    if (nextStep !== null) {
      nextStep.push(line);
      continue;
    }

    words += countWords(strip(line));
  }

  flushNextStep();
  return words;
}

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node scripts/wordcount.mjs <file.mdx> [more.mdx ...]');
  process.exit(1);
}

for (const file of files) {
  console.log(`${String(authoredProse(readFileSync(file, 'utf8'))).padStart(6)}  ${file}`);
}
