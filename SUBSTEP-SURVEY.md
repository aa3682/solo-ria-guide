# H3 substructure survey — step pages

**READ-ONLY. DO NOT MERGE.** This file is a survey artifact for a ruling
decision. It is not site content, it is not linked from anywhere, and it is
not intended to land on `main`.

No file under `content/` was modified. `CLAUDE.md` was not modified.

## Method

- H3 counts are of H3 headings inside the `## What actually happens` section
  only, bounded by that H2 and the next H2. H3s elsewhere on a page are not
  counted. No step page has any H3 outside that section, and no page in the
  repo uses H4.
- Per-subsection word counts use the same authored-prose basis as
  `pnpm wordcount`. Each H3 subsection (heading plus prose up to the next
  heading) was sliced into its own file and run through
  `scripts/wordcount.mjs` unmodified, so every exclusion in "Word count
  basis" applies inside a subsection exactly as it applies to a page: the
  heading text itself is not counted, table rows are not counted, and an
  SEC-path callout sitting inside a subsection is not counted.
- Page totals are `pnpm wordcount content/process/<slug>/index.mdx`.
- Subsection counts do not sum to the page total: the page total also
  includes the opening paragraph, "Why it matters", "Questions to ask
  yourself", "Common mistakes", "Which practice areas apply", and the
  practitioner callout.

## 1. The twelve step pages

In step order.

| # | Slug | H3 count | Page total |
|---|---|---|---|
| 1 | decide-if-independence-fits | 4 | 1,196 |
| 2 | design-the-firm | 4 | 1,009 |
| 3 | set-your-advice-approach | 4 | 1,098 |
| 4 | form-the-business | 5 | 1,287 |
| 5 | choose-your-regulator | 4 | 1,196 |
| 6 | qualify-as-an-adviser | **6** | 1,215 |
| 7 | write-the-disclosure-documents | **6** | 1,255 |
| 8 | write-the-policies | 5 | 1,294 |
| 9 | file-and-get-approved | 5 | 1,267 |
| 10 | set-up-custody-and-technology | 4 | 1,268 |
| 11 | leave-and-transition-clients | 4 | 1,409 |
| 12 | stay-registered-and-compliant | 4 | 1,311 |

Distribution: **3 H3 — 0 pages. 4 H3 — 7 pages. 5 H3 — 3 pages. 6 H3 — 2
pages.**

The stated range is three to five. No page uses the bottom of that range.
Ten of twelve sit inside it; two sit one above it. The modal count is 4.

## 2. Headings and per-subsection counts, all twelve pages

Verbatim, in page order.

### 1. decide-if-independence-fits — 4 H3, page 1,196

| # | Heading | Words |
|---|---|---|
| 1 | Take stock of what you have | 133 |
| 2 | Weigh what changes | 105 |
| 3 | Estimate what it costs to get there | 124 |
| 4 | Write down where you land | 87 |

### 2. design-the-firm — 4 H3, page 1,009

| # | Heading | Words |
|---|---|---|
| 1 | Pick who you serve | 79 |
| 2 | Decide what you offer | 77 |
| 3 | Decide how the firm is staffed | 76 |
| 4 | Write down the design | 150 |

### 3. set-your-advice-approach — 4 H3, page 1,098

| # | Heading | Words |
|---|---|---|
| 1 | Decide your investment philosophy | 107 |
| 2 | Decide how much discretion you take | 89 |
| 3 | Decide the boundaries of what you do and don't do | 90 |
| 4 | Write down the approach | 204 |

### 4. form-the-business — 5 H3, page 1,287

| # | Heading | Words |
|---|---|---|
| 1 | Choose an entity form | 208 |
| 2 | Choose where to form it and what to call it | 116 |
| 3 | Appoint a registered agent and file | 135 |
| 4 | Get a tax identification number and open business banking | 130 |
| 5 | Write down what you now hold | 184 |

### 5. choose-your-regulator — 4 H3, page 1,196

| # | Heading | Words |
|---|---|---|
| 1 | Establish your regulatory assets under management | 112 |
| 2 | Find where that figure falls | 176 |
| 3 | Check whether an exception applies | 137 |
| 4 | Confirm with your home state and write it down | 231 |

### 6. qualify-as-an-adviser — 6 H3, page 1,215

| # | Heading | Words |
|---|---|---|
| 1 | Establish that you meet the exam requirement | 89 |
| 2 | Check whether a prior exam still counts | 95 |
| 3 | Prepare the individual filing | 210 |
| 4 | Complete fingerprints and other state requirements | 54 |
| 5 | Plan for continuing education | 113 |
| 6 | Confirm with your home state and write it down | 190 |

### 7. write-the-disclosure-documents — 6 H3, page 1,255

| # | Heading | Words |
|---|---|---|
| 1 | Write the firm brochure | 119 |
| 2 | Write the supplement for the person giving the advice | 115 |
| 3 | Complete the state-only portion of the filing | 60 |
| 4 | Decide who receives which document, and when | 116 |
| 5 | Update on the annual cycle and in between | 113 |
| 6 | Keep a record of what you delivered, to whom, and when | 247 |

### 8. write-the-policies — 5 H3, page 1,294

| # | Heading | Words |
|---|---|---|
| 1 | Write the compliance manual | 133 |
| 2 | Adopt a code of ethics | 124 |
| 3 | Write the privacy policy | 105 |
| 4 | Write the business continuity and succession plan | 125 |
| 5 | Build the recordkeeping scheme | 262 |

### 9. file-and-get-approved — 5 H3, page 1,267

| # | Heading | Words |
|---|---|---|
| 1 | Get entitled to the filing system | 102 |
| 2 | Submit the firm's and the individual's filings together | 121 |
| 3 | Pay what is owed | 96 |
| 4 | Respond to comments and deficiency letters | 124 |
| 5 | Know when the registration is effective | 241 |

### 10. set-up-custody-and-technology — 4 H3, page 1,268

| # | Heading | Words |
|---|---|---|
| 1 | Establish the qualified-custodian relationship | 141 |
| 2 | Meet the custody rule's requirements | 211 |
| 3 | Connect the operational pipes | 120 |
| 4 | Stand up the baseline systems | 230 |

### 11. leave-and-transition-clients — 4 H3, page 1,409

| # | Heading | Words |
|---|---|---|
| 1 | Resign from the prior firm | 169 |
| 2 | Determine what you can take — and what you can't | 128 |
| 3 | Notify clients and secure their consent | 130 |
| 4 | Move the accounts | 322 |

### 12. stay-registered-and-compliant — 4 H3, page 1,311

| # | Heading | Words |
|---|---|---|
| 1 | Keep the registration form current, on the annual cycle and off it | 141 |
| 2 | Renew the registration itself | 84 |
| 3 | Keep meeting delivery obligations to existing clients | 85 |
| 4 | Treat retention as a continuous discipline, not a project | 263 |

### Population shape

- Subsection counts across all 55 subsections run 54 to 322 words.
- The final H3 is the longest on eleven of twelve pages, because it carries
  the mandated recurring-adviser passage and the holding statement on top of
  its own subject. The exception is decide-if-independence-fits, whose final
  H3 is its shortest at 87: step 1 introduces the adviser in the opening
  paragraph and instantiates it in H3 #3, so the final H3 there carries the
  holding statement alone.
- Median non-final subsection is around 120 words. The two six-H3 pages
  contain the two thinnest subsections in the whole population: 54
  (qualify-as-an-adviser #4) and 60 (write-the-disclosure-documents #3).

## 3. The step page template, quoted in full

From `CLAUDE.md`, the section headed `## Step page template`, verbatim and
complete through the end of `### The recurring adviser`:

> ## Step page template
> Every page under `content/process/<slug>/index.mdx` follows this exact skeleton, derived from step 1 ([Decide If Independence Fits](/process/decide-if-independence-fits)), so later steps don't have to re-derive it from scratch:
>
> 1. Frontmatter with `title` (the full step name) and `description` (one sentence, plain language).
> 2. H1 matching the frontmatter title.
> 3. Opening paragraph, no heading: what this step is, in plain words.
> 4. H2 "Why it matters"
> 5. H2 "What actually happens" — three to five H3 substeps. The final H3 states what the reader leaves the step holding.
> 6. H2 "Questions to ask yourself" — four to six questions.
> 7. H2 "Common mistakes" — a bulleted list, one mistake per bullet, each one or two sentences.
> 8. H2 "Which practice areas apply" — a list linking the relevant `/domains/` routes, one sentence each on why it applies at this step.
> 9. A `<Callout type="info">` for practitioners, placed after the practice areas list, with no heading of its own.
> 10. H2 "Next step" — a single sentence linking the next `/process/` route. The last step's Next step links to the Practice Areas index at `/domains` instead, since the practice areas are standing material that never finishes.
>
> Step-page rules:
> - 900–1,300 words, a hard range. What counts toward the number is set by "Word count basis" above; measure with `pnpm wordcount <path>`. A step page outside the range runs the routing check and follows "When a page is outside its bounds" — unlike an area page, it does not merge on the record alone.
> - No paragraph longer than four sentences.
> - Second person, plain English, educational rather than advisory.
> - Steps link to the practice areas that apply rather than restating them.
> - Steps link forward to later steps rather than explaining their subject matter in place.
> - Mirroring runs both ways. Where an area page's "Where this starts in the process" names a step as originating, that step's "Which practice areas apply" lists that area. Area convention 3 governs the reverse direction, where a step may link an area that does not name the step back.
>
> ### The recurring adviser
> Step pages follow one recurring hypothetical, introduced on step 1 ([Decide If Independence Fits](/process/decide-if-independence-fits)) and referred to only as "the adviser" — never named, and never given a pronoun.
>
> Fixed on step 1, and never contradicted afterwards:
> - A hypothetical investment adviser representative currently working at a broker-dealer.
> - A book of about 80 clients and roughly $300,000 in annual revenue — illustrative round numbers, not a target or a benchmark.
> - Assets under management below the threshold that would require SEC registration, so the adviser is state-registered, the guide's default scenario.
>
> Everything else the adviser accumulates is established on the step page that produces it and lives only there. Do not copy that accumulated set into this file: a second record drifts from the pages the first time one is revised. A later passage stays consistent with what earlier pages established and adds only facts its own step produces.
>
> Each passage instantiates the single item on its page that the adviser's established facts make hardest — not the most important item and not a proportional tour of the page — and compresses the rest of the step to context. Where a page offers more than one candidate, pick the item that the most of the adviser's established facts bear on at once. Not all of them have to bear on it: on some pages one fact is simply dominant and the others do no work, and an item picked because three facts could be made to apply is weaker than one picked because two genuinely do.
>
> Placement is fixed. The passage is the last thing in the final H3 of "What actually happens" — the H3 that states what the reader leaves the step holding — and opens with the words "For illustration, the adviser". It runs to roughly the headroom the page has under the 900–1,300 range rather than to a set length. SEC divergences are never carried by the adviser; they use the SEC-path callout below.

## 4. The three-to-five sentence, on its own

`CLAUDE.md` line 245, item 5 of the step page skeleton:

> 5. H2 "What actually happens" — three to five H3 substeps. The final H3 states what the reader leaves the step holding.

The range appears nowhere else in `CLAUDE.md`. The only other mentions of
H3 substructure are line 189 (the area skeleton), line 200 (headings are
H2/H3), line 272 (the adviser passage sits in the final H3), line 293 (the
glossary), and line 178 (the Marketing and Growth exception, which observes
in passing that "Six H3 subsections is the modal count for an area page").

### How it is phrased

- **It is stated as part of a skeleton, not as a rule with its own entry.**
  It is an em-dash gloss on one numbered item in the list, not one of the
  bulleted "Step-page rules" that follow. The word-count rule, the
  four-sentence paragraph rule, and the mirroring rule all get their own
  bullet; the substep count does not.
- **The preamble to the list is strongly binding.** "Every page under
  `content/process/<slug>/index.mdx` follows this exact skeleton." The word
  "exact" governs the whole list, so the range inherits that force even
  though it is phrased as a gloss. Nothing marks it as a default, a
  preference, or guidance; there is no hedging word ("about", "roughly",
  "typically", "aim for") anywhere near it.
- **No remedy path is attached, and no exception path exists.** The word
  count rule has one: a named procedure ("When a page is outside its
  bounds"), a required record with five listed contents, a stated
  difference between area and step pages, and a "Recorded exceptions"
  register carrying three named pages. The substep range has none of that.
  There is no measurement command for it, no routing check, no record
  requirement, no ruling procedure, and no register entry for either
  six-H3 page. A page outside the substep range has no defined disposition
  at all — the file does not contemplate that it can happen.
- **Nothing in the second half of the sentence bears on the count.** "The
  final H3 states what the reader leaves the step holding" is a separate
  requirement about the last subsection, and every one of the twelve pages
  satisfies it.

## 5. Area pages, for comparison

H3 count only. Every H3 on every area page sits under `## Key ideas`; no
area page has an H3 anywhere else.

| Slug | H3 count |
|---|---|
| service-and-pricing-models | 5 |
| advice-and-planning-process | 6 |
| technology-and-client-experience | 6 |
| client-education | 5 |
| marketing-and-growth | 6 |
| compliance-and-supervision | 6 |
| records-and-documentation | 6 |
| firm-economics | 6 |
| risk-and-insurance | 6 |

Distribution: **5 H3 — 2 pages. 6 H3 — 7 pages.** Stated range is 4–7; all
nine sit inside it, none at either edge.

### The area template's equivalent sentence

There is one. `CLAUDE.md` line 189, item 5 of the area page skeleton:

> 5. "Key ideas" — 4–7 H3 subsections, one concept each.

It is structurally identical to the step version: a gloss on one numbered
item of a skeleton, no remedy path, no exception path. Two differences in
wording:

- The area range is written in numerals with an en dash (`4–7`); the step
  range is written in words (`three to five`).
- The area version adds a content constraint the step version has no
  counterpart to: "one concept each."

The area skeleton's preamble is worded differently as well — "Write the
sections in the order given; do not add, remove, or reorder them" — which
binds the *set and order of H2 sections*, and says nothing about how many
H3s sit inside one of them.

## 6. What a count alone misses on the two six-H3 pages

Observation only. No recommendation is offered.

### qualify-as-an-adviser

**The sixth H3 carries no subject matter of its own.** "Confirm with your
home state and write it down" opens directly on the words "For
illustration, the adviser" — no lead-in sentence, no independent prose
before the mandated passage. Its 190 words are the adviser passage plus the
closing "You leave this step holding" paragraph, and nothing else. It is
the only one of the twelve final H3s built this way; every other page's
final H3 states something substantive first and appends the passage. On
this page the sixth heading is a slot for two template-mandated elements,
not a sixth substep.

**Two adjacent subsections cover one question, and the page itself says
so.** #4 "Complete fingerprints and other state requirements" (54 words —
the thinnest subsection in the entire population, one paragraph of three
sentences) and #5 "Plan for continuing education" (113) are both *what
your state requires of you beyond the exam*. The page's own adviser passage
reunites them explicitly: "The third is what the home state requires beyond
the exam: the adviser reads the state's requirements page, finds that it
requires fingerprints and a representative fee and has adopted the
continuing-education rule, and confirms all three with the state's
registration staff in a single call." The page's summary treats as one
question what its headings split into two. #4's heading even says so on its
face — "and other state requirements" is a category label, not a substep.

**The first two are a pair as well.** #1 "Establish that you meet the exam
requirement" (89) and #2 "Check whether a prior exam still counts" (95) are
both about the exam requirement, one forward-looking and one
backward-looking.

**The one genuinely large subsection has two subjects under one heading.**
#3 "Prepare the individual filing" is 210 words plus an SEC-path callout
that the count basis excludes, so its weight on the page is larger than 210
suggests. Under half of it is about preparing the filing; the rest is the
disclosure-answer discussion, which the page flags as the part that
"deserves the most care."

**The heading is duplicated across pages.** "Confirm with your home state
and write it down" is the final H3 of *both* qualify-as-an-adviser and
choose-your-regulator. No other heading text repeats across the twelve.

### write-the-disclosure-documents

**Built the opposite way.** Its sixth H3, "Keep a record of what you
delivered, to whom, and when" (247), has roughly 100 words of its own
recordkeeping content before the adviser passage starts. It is a real
substep that also hosts the template-mandated elements. On this page the
six headings are six distinct deliverables or obligations; nothing collapses
to a slot.

**One thin subsection is thin only by the count basis.** #3 "Complete the
state-only portion of the filing" measures 60 words, but an SEC-path
callout sits inside it and is excluded from the basis. The callout is
substantial — it covers both the skipped state-only portion and the
client relationship summary. As rendered on the page this subsection is not
short; as measured it is the second-thinnest in the population. The count
is the artifact here, not the writing.

**Two adjacent subsections are close in subject without overlapping.** #4
"Decide who receives which document, and when" (116) and #5 "Update on the
annual cycle and in between" (113) are both deadline material, both route
their figures to `/tools/this-years-figures`, and are nearly identical in
length. They are distinguishable — delivery to clients versus amendment of
the filing — but they read as a matched pair, and a reader skimming
headings could plausibly expect one heading rather than two.

**The two pages reach six by different routes.** Disclosure documents has
six things a reader has to produce or do. Qualify has six headings over
what its own summary treats as three or four questions, one of which is a
structural slot. A count of 6 describes both equally and distinguishes
neither.
