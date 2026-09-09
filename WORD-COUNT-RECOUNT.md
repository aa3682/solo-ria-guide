# Word-count recount — all 28 content pages

Read-only measurement. No content page was edited, reformatted, or rewritten.
This file is the only addition to the branch.

---

## 1. The counting method as applied

### What a word is

A word is a whitespace-separated token, taken from the text **as it renders on
the page**, that contains at least one Unicode letter or digit. Tokens that are
pure punctuation are discarded.

Specific cases:

- **Hyphenates** — `state-registered`, `other-than-annual` — count as **one**
  word. No splitting on hyphens.
- **Numbers** — `$25,000,000`, `203(c)`, `15` — count as **one** word each.
  Bare punctuation groups (a lone `—`) count as zero.
- **Inline code** — backticks are stripped and the contents counted as ordinary
  words. Only one page uses inline code (`NEEDS-VALUE` on the figures page).
- **Possessives attached to a link** — `[SEC](/glossary#...)'s` renders as
  `SEC's`, one whitespace-separated token, and counts as **one** word. This
  case matters; see §3.
- **Emphasis markers** (`*`, `_`) are stripped before tokenizing.

### Always excluded, never counted

- YAML frontmatter (the leading `---` block)
- `import` statements
- JSX/component tags and their attributes — `<Callout type="warning">`,
  `</Callout>`. The **text inside** a component is counted and attributed to
  bucket 5.
- HTML comments (none exist in `content/`)
- Markdown link URLs. The **visible link text is counted**; the target is not.
  `[Form ADV](/glossary#form-adv)` → 2 words.
- List markers (`-`, `1.`) and the explicit heading-id syntax (`[#slug]`)

### Attribution

Every counted word lands in exactly one bucket, so any exclusion rule can be
applied later by subtraction without re-running the count. Where buckets could
overlap, precedence runs: code block → table → heading → callout → cross-link
bucket → body prose. So a paragraph inside a Callout is attributed to the
callout, not to prose.

| # | Bucket | Definition as applied |
|---|---|---|
| 1 | Body prose | Default. Anything not caught by 2–7. |
| 2 | Headings | H1/H2/H3 text, id syntax stripped. |
| 3a | Related lists | Every list item under an H2 headed exactly `Related`. |
| 3b | Go deeper lists | Everything under an H2 headed exactly `Go deeper`, to end of file. |
| 4 | Cross-link bullets in body | See below. |
| 5 | Callouts | Split three ways: disclaimer, practitioner, SEC-path. |
| 6 | Tables and code blocks | All cell text. No code blocks exist in `content/`. |
| 7 | Worked-example blocks | Zero on every page; see §7. |

**Bucket 4 detection rule.** A list item counts as a cross-link bullet when,
after its list marker and any bold markers, it *begins* with a markdown link and
the remainder is either empty or a gloss introduced by `:` or an em dash. This
catches `- [Risk and Insurance](/domains/risk-and-insurance): some states
condition approval…` and rejects `- That a [claims-made policy](/glossary#…)
covers everything…`, which is ordinary prose that happens to contain a link.

Bucket 4 resolved to exactly three structures, and nothing else in the repo:

| Structure | Heading it sits under | Pages |
|---|---|---|
| Practice-area cross-links | `## Which practice areas apply` | all 12 step pages |
| Area index list | `## The areas` | `/domains` landing |
| Step index list | `## The steps` | `/process` landing |

First three words of the first three bullets, so you can confirm these are the
same lists you mean:

- `## Which practice areas apply` (`file-and-get-approved`) — "Compliance and
  Supervision:", "Records and Documentation:", "Risk and Insurance:"
- `## The areas` (`/domains`) — "Service and Pricing", "Advice and Planning",
  "Technology and Client"
- `## The steps` (`/process`) — "Decide If Independence", "Design the Firm:",
  "Set Your Advice"

Area pages have **zero** bucket-4 words. Their `Where this starts in the
process` section is prose with inline links, not a bullet list, so it stays in
bucket 1.

### One thing to keep in mind reading the table

`TOTAL` here counts headings, tables and `Go deeper`, which the repo's own
`pnpm wordcount` excludes. **TOTAL is not the number the CLAUDE.md ceilings are
written against.** The last-but-one column, `pnpm wordcount`, is the governing
measure, and the ceiling status column is judged on that.

---

## 2. Per-page table with component breakdown

| File | Type | TOTAL | 1 Prose | 2 Head | 3a Related | 3b Go deeper | 4 Ptr bullets | 5 Disclaimer | 5 Practitioner | 5 SEC-path | 6 Tables | 7 Worked ex. | pnpm wordcount | Ceiling status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| content/about/index.mdx | about | 6 | 5 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | no ceiling |
| content/domains/advice-and-planning-process/index.mdx | area | 1464 | 1097 | 66 | 0 | 107 | 0 | 0 | 104 | 90 | 0 | 0 | 1291 | inside (<=1300 soft) |
| content/domains/client-education/index.mdx | area | 1021 | 763 | 53 | 0 | 65 | 0 | 0 | 86 | 54 | 0 | 0 | 903 | inside (<=1300 soft) |
| content/domains/compliance-and-supervision/index.mdx | area | 1298 | 1003 | 72 | 0 | 76 | 0 | 0 | 65 | 82 | 0 | 0 | 1150 | inside (<=1300 soft) |
| content/domains/firm-economics/index.mdx | area | 1445 | 1137 | 62 | 0 | 76 | 0 | 0 | 85 | 85 | 0 | 0 | 1307 | OVER (<=1300 soft) |
| content/domains/index.mdx | landing | 420 | 220 | 5 | 5 | 0 | 131 | 59 | 0 | 0 | 0 | 0 | 415 | no ceiling |
| content/domains/marketing-and-growth/index.mdx | area | 2062 | 1633 | 80 | 0 | 159 | 0 | 0 | 125 | 65 | 0 | 0 | 1823 | OVER (<=1300 soft) |
| content/domains/records-and-documentation/index.mdx | area | 1261 | 976 | 64 | 0 | 63 | 0 | 0 | 100 | 58 | 0 | 0 | 1134 | inside (<=1300 soft) |
| content/domains/risk-and-insurance/index.mdx | area | 1486 | 1152 | 66 | 0 | 113 | 0 | 0 | 101 | 54 | 0 | 0 | 1307 | OVER (<=1300 soft) |
| content/domains/service-and-pricing-models/index.mdx | area | 1091 | 861 | 53 | 0 | 92 | 0 | 0 | 85 | 0 | 0 | 0 | 946 | inside (<=1300 soft) |
| content/domains/technology-and-client-experience/index.mdx | area | 1332 | 1042 | 59 | 0 | 50 | 0 | 0 | 105 | 76 | 0 | 0 | 1223 | inside (<=1300 soft) |
| content/glossary/index.mdx | glossary | 5039 | 4876 | 155 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4884 | no ceiling |
| content/introduction/index.mdx | landing | 500 | 413 | 21 | 7 | 0 | 0 | 59 | 0 | 0 | 0 | 0 | 479 | no ceiling |
| content/process/choose-your-regulator/index.mdx | step | 1346 | 1064 | 46 | 0 | 0 | 73 | 0 | 65 | 98 | 0 | 0 | 1300 | inside (900-1300) |
| content/process/decide-if-independence-fits/index.mdx | step | 1244 | 1049 | 43 | 0 | 0 | 72 | 0 | 80 | 0 | 0 | 0 | 1201 | inside (900-1300) |
| content/process/design-the-firm/index.mdx | step | 1054 | 813 | 39 | 0 | 0 | 124 | 0 | 78 | 0 | 0 | 0 | 1015 | inside (900-1300) |
| content/process/file-and-get-approved/index.mdx | step | 1391 | 1011 | 52 | 0 | 0 | 80 | 0 | 55 | 193 | 0 | 0 | 1339 | OVER (900-1300) |
| content/process/form-the-business/index.mdx | step | 1348 | 1162 | 56 | 0 | 0 | 70 | 0 | 60 | 0 | 0 | 0 | 1292 | inside (900-1300) |
| content/process/index.mdx | landing | 557 | 296 | 13 | 4 | 0 | 185 | 59 | 0 | 0 | 0 | 0 | 544 | no ceiling |
| content/process/leave-and-transition-clients/index.mdx | step | 1349 | 1087 | 45 | 0 | 0 | 134 | 0 | 83 | 0 | 0 | 0 | 1304 | OVER (900-1300) |
| content/process/qualify-as-an-adviser/index.mdx | step | 1341 | 1099 | 59 | 0 | 0 | 62 | 0 | 60 | 61 | 0 | 0 | 1282 | inside (900-1300) |
| content/process/set-up-custody-and-technology/index.mdx | step | 1270 | 1029 | 41 | 0 | 0 | 81 | 0 | 52 | 67 | 0 | 0 | 1229 | inside (900-1300) |
| content/process/set-your-advice-approach/index.mdx | step | 1149 | 973 | 46 | 0 | 0 | 65 | 0 | 65 | 0 | 0 | 0 | 1103 | inside (900-1300) |
| content/process/stay-registered-and-compliant/index.mdx | step | 1378 | 955 | 54 | 0 | 0 | 131 | 0 | 79 | 159 | 0 | 0 | 1324 | OVER (900-1300) |
| content/process/write-the-disclosure-documents/index.mdx | step | 1405 | 1087 | 68 | 0 | 0 | 105 | 0 | 68 | 77 | 0 | 0 | 1337 | OVER (900-1300) |
| content/process/write-the-policies/index.mdx | step | 1337 | 1005 | 45 | 0 | 0 | 87 | 0 | 95 | 105 | 0 | 0 | 1292 | inside (900-1300) |
| content/tools/index.mdx | landing | 126 | 57 | 4 | 6 | 0 | 0 | 59 | 0 | 0 | 0 | 0 | 122 | no ceiling |
| content/tools/this-years-figures/index.mdx | figures | 4157 | 436 | 95 | 6 | 0 | 0 | 59 | 0 | 0 | 3561 | 0 | 501 | no ceiling |

Column `7 Worked ex.` is 0 for all 28 pages by measurement, not by omission.

---

## 3. Reproducibility check against the seven recorded numbers

The recorded numbers are `pnpm wordcount` output. The check below compares the
recorded number against this recount's **bucket sum reconstructed to the repo
script's exclusion set** — that is, prose + Related + cross-link bullets + all
three callout types, dropping headings, tables and `Go deeper`.

| Page | Recorded | This recount (repo-equivalent) | Delta | This recount (TOTAL, all buckets) |
|---|---|---|---|---|
| `process/file-and-get-approved` | 1339 | 1339 | 0 | 1391 |
| `process/write-the-disclosure-documents` | 1337 | 1337 | 0 | 1405 |
| `process/stay-registered-and-compliant` | 1324 | 1324 | 0 | 1378 |
| `process/leave-and-transition-clients` | 1304 | 1304 | 0 | 1349 |
| `domains/marketing-and-growth` | 1823 | 1823 | 0 | 2062 |
| `domains/firm-economics` | 1307 | 1307 | 0 | 1445 |
| `domains/risk-and-insurance` | 1307 | 1307 | 0 | 1486 |

**All seven reproduce exactly — delta 0, not merely within 1%.**

I then ran the same reconstruction against `pnpm wordcount` for **all 28 pages**,
not just the seven, and every page matched to the word. That is the stronger
check: it confirms the bucket decomposition is complete and non-overlapping,
because the buckets the repo script excludes (headings, tables, `Go deeper`) sum
with the buckets it includes to the exact TOTAL on every page.

### One implementation bug found and corrected on the way

The first run of my counter disagreed with the recorded numbers on two pages:
`marketing-and-growth` by +1 and `stay-registered-and-compliant` by +2. I traced
it rather than tuning it away.

Cause: three occurrences repo-wide of a markdown link immediately followed by a
possessive `'s` —

- `[SEC](/glossary#securities-and-exchange-commission)'s marketing rule`
- `[state-registered adviser](/glossary#state-registered-adviser)'s obligation`
- `[SEC-registered adviser](/glossary#sec-registered-adviser)'s obligation`

My first implementation replaced each link with `<space>text<space>`, which split
`SEC's` into `SEC` + `'s` — two tokens where the rendered page has one. Three
occurrences, +1 and +2 across the two pages, exactly accounting for both deltas.

I corrected it, because padding with spaces contradicts my own stated definition
("whitespace-separated tokens as the text renders"): the rendered page has no
whitespace there. This is a fix to an implementation that did not match its
stated method, not a change of method to chase the recorded number — and it is
worth flagging that it is the only adjustment made after seeing the recorded
figures. Every other page was unaffected by the fix.

---

## 4. The two distributions

Computed twice: on the full TOTAL, and net of components 3 and 4 (both
cross-link buckets removed — Related, Go deeper, and cross-link bullets).

### Step pages (12)

| | Gross (TOTAL) | Net of cross-links |
|---|---|---|
| min | 1054 | 930 |
| median | 1343.5 | 1248.5 |
| mean | 1301.0 | 1210.7 |
| max | 1405 | 1311 |

Ascending, gross:

| Words | Page |
|---|---|
| 1054 | design-the-firm |
| 1149 | set-your-advice-approach |
| 1244 | decide-if-independence-fits |
| 1270 | set-up-custody-and-technology |
| 1337 | write-the-policies |
| 1341 | qualify-as-an-adviser |
| 1346 | choose-your-regulator |
| 1348 | form-the-business |
| 1349 | leave-and-transition-clients |
| 1378 | stay-registered-and-compliant |
| 1391 | file-and-get-approved |
| 1405 | write-the-disclosure-documents |

Ascending, net of cross-links:

| Words | Page |
|---|---|
| 930 | design-the-firm |
| 1084 | set-your-advice-approach |
| 1172 | decide-if-independence-fits |
| 1189 | set-up-custody-and-technology |
| 1215 | leave-and-transition-clients |
| 1247 | stay-registered-and-compliant |
| 1250 | write-the-policies |
| 1273 | choose-your-regulator |
| 1278 | form-the-business |
| 1279 | qualify-as-an-adviser |
| 1300 | write-the-disclosure-documents |
| 1311 | file-and-get-approved |

100-word bands:

| Band | Gross | Net |
|---|---|---|
| 800–899 | 0 | 0 |
| 900–999 | 0 | 1 |
| 1000–1099 | 1 | 1 |
| 1100–1199 | 1 | 2 |
| 1200–1299 | 2 | 6 |
| 1300–1399 | 7 | 2 |
| 1400–1499 | 1 | 0 |
| 1500–1899 | 0 | 0 |

**Gap:** none. Step pages are a single continuous population with no outlier.
The largest interior gap is 95 words gross (1054 → 1149) and 154 net (930 →
1084), both at the bottom of the range, where `design-the-firm` sits a little
below the rest. There is no gap at the top: gross, the run 1337→1341→1346→1348→
1349 is five pages inside 12 words of each other.

### Area pages (9)

| | Gross (TOTAL) | Net of cross-links |
|---|---|---|
| min | 1021 | 956 |
| median | 1332 | 1282 |
| mean | 1384.4 | 1295.4 |
| max | 2062 | 1903 |

Ascending, gross:

| Words | Page |
|---|---|
| 1021 | client-education |
| 1091 | service-and-pricing-models |
| 1261 | records-and-documentation |
| 1298 | compliance-and-supervision |
| 1332 | technology-and-client-experience |
| 1445 | firm-economics |
| 1464 | advice-and-planning-process |
| 1486 | risk-and-insurance |
| 2062 | marketing-and-growth |

Ascending, net of cross-links:

| Words | Page |
|---|---|
| 956 | client-education |
| 999 | service-and-pricing-models |
| 1198 | records-and-documentation |
| 1222 | compliance-and-supervision |
| 1282 | technology-and-client-experience |
| 1357 | advice-and-planning-process |
| 1369 | firm-economics |
| 1373 | risk-and-insurance |
| 1903 | marketing-and-growth |

100-word bands:

| Band | Gross | Net |
|---|---|---|
| 800–899 | 0 | 0 |
| 900–999 | 0 | 2 |
| 1000–1099 | 2 | 0 |
| 1100–1199 | 0 | 1 |
| 1200–1299 | 2 | 2 |
| 1300–1399 | 1 | 3 |
| 1400–1499 | 3 | 0 |
| 1500–1899 | 0 | 0 |
| 1900+ | 1 | 1 |

**Gap: yes, and it is large.** Eight area pages form one cluster spanning
1021–1486 gross. `marketing-and-growth` sits at 2062, a **576-word gap** above
the next page. Net of cross-links the cluster is 956–1373 and marketing is 1903,
a **530-word gap**. On the governing `pnpm wordcount` measure the cluster tops
out at 1307 and marketing is 1823, a **516-word gap**.

The gap survives every measure. Removing both cross-link buckets does not close
it, and neither does removing headings and `Go deeper`. Marketing is not
marginally long; it is separated from the rest of the area population.

The other two area pages currently over the soft ceiling — `firm-economics` and
`risk-and-insurance`, both 1307 — are 7 words over, and sit inside the main
cluster on every measure.

---

## 5. `marketing-and-growth` section breakdown

Section words below exclude the heading text itself, so the parts sum to
TOTAL (2062) minus headings (80).

| Section | Words |
|---|---|
| Opening paragraph (no heading) | 99 |
| `## Where this starts in the process` | 101 |
| `## Key ideas` | **1341** |
| `## Common misconceptions` | 157 |
| `## For practitioners` (Callout) | 125 |
| `## Go deeper` | 159 |

`Key ideas` is 65% of the page. Inside it, the six H3s:

| H3 | Words |
|---|---|
| What counts as an advertisement is wider than what feels like advertising | 226 |
| Which advertising rule binds you is a live question | 254 |
| The brochure sets the outer edge of what marketing can claim | 172 |
| Testimonials, endorsements, and paid introductions are one subject | 245 |
| Claims about results are the easiest thing to get wrong | 199 |
| Growth costs money or hours, and a solo firm is short of hours | 245 |

Factually, on the question you asked this breakdown to settle: the six H3s are
evenly weighted (172–254, no runaway section), and the length does not come from
one bloated subsection.

Nor does it come from having more subsections. Six H3s is the **modal** count
across area pages — six of the nine have exactly six; only `client-education`
and `service-and-pricing-models` have five. Marketing is entirely ordinary on
subsection count.

The length is located in *per-subsection size*, and there it is not close:

| Area page | H3s | Mean words per H3 |
|---|---|---|
| `marketing-and-growth` | 6 | **224** |
| `risk-and-insurance` | 6 | 151 |
| `firm-economics` | 6 | 150 |
| `advice-and-planning-process` | 6 | 142 |
| `technology-and-client-experience` | 6 | 137 |
| `compliance-and-supervision` | 6 | 133 |
| `service-and-pricing-models` | 5 | 111 |
| `records-and-documentation` | 6 | 109 |
| `client-education` | 5 | 103 |

Marketing's mean H3 is 48% above the next-highest area page and more than
double the lowest. Every other structural slot on the page (opening,
`Where this starts`, `Common misconceptions`, practitioner callout) is ordinary
for an area page.

Two of the six H3s are about the advertising rule and what may be claimed; two
are about testimonials/endorsements and results claims; one is about the
brochure's outer edge; one is about the economics of growth. The first five are
all advertising-rule surface; the sixth ("Growth costs money or hours") is the
only one about growth as distinct from marketing compliance. That is the one
observable seam in the file — but it is a 245-word seam, not half the page, so
the file does not read as two equal pages sharing a slug.

---

## 6. Observations

Factual only; no recommendation about what to do.

### Pages whose length is driven by one identifiable structural feature

| Page | Feature | Evidence |
|---|---|---|
| `tools/this-years-figures` | Table rows | 3561 of 4157 words (85.7%) are table cells. Body prose is 436. TOTAL 4157 vs `pnpm wordcount` 501 — the page is almost entirely a data table. |
| `glossary` | Entry count | 4876 prose words across **60** H3 definitions, ~81 words each. Length is a function of how many terms exist, not of density within any entry. |
| `process/file-and-get-approved` | SEC-path callouts | 193 words in 2 warning callouts — the highest SEC-path load on any page, 13.9% of TOTAL. Its prose (1011) is mid-pack; the callouts push it to the top of the step distribution. |
| `process/stay-registered-and-compliant` | SEC-path callouts + cross-links | 159 SEC-path + 131 cross-link bullets = 290 words, 21% of TOTAL, the highest combined non-prose share of any step. Its prose (955) is the **second-lowest** of the 12 steps, yet it is over the ceiling. |
| `process/design-the-firm` | Cross-link bullets | 124 words across 6 bullets — the largest `Which practice areas apply` list. 11.8% of TOTAL, highest cross-link share of any step, on the shortest step page. |
| `domains/marketing-and-growth` | Per-subsection size | See §5. Also carries the largest `Go deeper` (5 links, 159 words) against a repo norm of 3. |

Two steps are worth naming together: `stay-registered-and-compliant` and
`file-and-get-approved` are both over the hard ceiling while carrying the
lowest and second-lowest prose counts among the four over-ceiling steps. Their overage is
located in the SEC-path callouts, which CLAUDE.md exempts from the one-callout
cap but which `pnpm wordcount` counts toward the ceiling.

### Are the cross-link components constant or variable?

They vary by roughly 2.5× in absolute words, but stay in a narrow band as a
share of the page.

| Component | Range | Notes |
|---|---|---|
| `Related` lists (3a) | 4–8 words | 6 pages only (4 landings, glossary, figures). Effectively constant. |
| `Go deeper` (3b), area pages | 50–159 words | Tracks link count: 2 links (technology, 50w) to 5 links (marketing, 159w). Six of nine pages carry 3 links and sit in 63–107. |
| Cross-link bullets (4), step pages | 62–134 words | Tracks bullet count: 3 bullets (62–81w) to 6 bullets (124w). |
| Cross-link bullets (4), landings | 131 (`/domains`, 9 bullets), 185 (`/process`, 12 bullets) | One bullet per step/area; scales with section size. |
| **Combined 3+4 as share of TOTAL, steps** | **4.6%–11.8%** | Low: qualify-as-an-adviser. High: design-the-firm. |
| **Combined 3+4 as share of TOTAL, areas** | **3.8%–8.4%** | Low: technology-and-client-experience. High: service-and-pricing-models. |

So: not constant in words, but bounded as a share. Removing both cross-link
buckets moves a step page down by 62–134 words and an area page by 50–159. That
is enough to change ceiling status for several pages but not enough to close the
marketing gap.

For reference, the other repeating components are tighter than the cross-link
ones:

| Component | Steps | Areas |
|---|---|---|
| Headings (2) | 39–68 | 53–80 |
| Practitioner callout (5) | 52–95 | 65–125 |
| SEC-path callouts (5) | 0–193 | 0–90 |
| Disclaimer (5) | 59, exactly, on all 5 pages that carry it | — |

The SEC-path callout is by a wide margin the most variable repeating component
in the repo: 0 on 6 of 21 step-and-area pages, 193 at its maximum.

---

## 7. What I had to judge rather than measure

Five judgment calls. Each states what I chose and what the alternative would
have done to the numbers.

**1. Which measure the ceiling status column is judged on.** TOTAL includes
headings, tables and `Go deeper`, which `pnpm wordcount` excludes, so the two
disagree by 39–68 words on step pages and 109–239 on area pages. CLAUDE.md says "Measure with
`pnpm wordcount <path>`", so I judged ceiling status on the reconstructed
`pnpm wordcount` value, not on TOTAL. Judging on TOTAL instead would put 8 of
12 step pages and 5 of 9 area pages over. The seven pages your prompt describes
as over are exactly the seven flagged by the governing measure, which
corroborates the choice.

**2. What counts as a bucket-4 "pointer bullet".** Your definition was "bullets
whose entire content is a pointer to another page". Taken literally, a bullet
like `- [Risk and Insurance](/domains/risk-and-insurance): some states condition
approval on proof of the bonding…` is not *entirely* a pointer — it has a
sentence of original gloss. I read the intent as structural (a bullet that
exists only to point) rather than literal, and counted link text plus gloss
together. Measured both ways: counting only the link text would put bucket 4 at
8–19 words per step page instead of the 62–134 reported, a further reduction of
54–120 words per page. The three structures this resolved to are
tabulated in §1 so you can check them against what you meant.

**3. Whether area pages' `Where this starts in the process` is a cross-link
section.** It is a fixed section whose entire job is linking two or three
originating steps — functionally a cross-link list. But it is written as prose
with inline links, not as bullets, so under my stated rule it stays in bucket 1.
I did not reclassify it. It runs 66–101 words on the nine area pages, so
treating it as a cross-link bucket would lower every area page by about that
much and would narrow, but not close, the marketing gap.

**4. Splitting bucket 5 by callout type.** You asked for callouts "reported
separately per callout type". The repo has only two component types
(`type="info"`, `type="warning"`), but info serves two distinct purposes. I split
info by content into `disclaimer` (matching the CLAUDE.md verbatim text, 59 words
every time) and `practitioner` (everything else), giving three reported types
rather than two. No page carries both kinds of info callout, so nothing is
ambiguous.

**5. Component 7, worked examples.** You wrote "if they are structurally
distinguishable". They are not. There is no worked-example block, no fenced
region, no distinguishing component or heading anywhere in `content/`. The
recurring unnamed hypothetical ("the adviser reprices annually and finds…") is
written inline inside ordinary paragraphs and cannot be separated without
sentence-level hand-tagging, which would not be reproducible. I reported
component 7 as 0 on every page and left those words in bucket 1, rather than
hand-classify them.

Two smaller notes:

- **Headings with explicit ids.** `## Step 1 — Decide If Independence Fits
  [#decide-if-independence-fits]` — I strip the `[#…]` and count the visible
  text only. The em dash counts as zero.
- **The figures page's `NEEDS-VALUE`.** Counted as one word, inside bucket 6
  (table). It appears in table cells only.

---

## Method reproducibility

The counter used for this report is a standalone script that was kept in the
session scratchpad and deliberately **not** committed, since the prompt limited
this branch to the report file. Its behaviour is fully specified by §1 above and
is verifiable without it: for every one of the 28 pages,

```
bucket1 + bucket3a + bucket4 + all bucket5 == pnpm wordcount <path>
```

which you can check against the `pnpm wordcount` column in §2 using the existing
`scripts/wordcount.mjs`.

## Suggested follow-ups

Listed, not acted on.

- `scripts/wordcount.mjs` silently drops everything from `## Go deeper` to end of
  file via `[\s\S]*$`. On area pages `Go deeper` is last, so this is correct
  today. If any section is ever added after `Go deeper`, it would vanish from the
  count with no warning.
- The `pnpm wordcount` measure counts SEC-path callouts toward the ceilings while
  CLAUDE.md exempts them from the one-callout-per-page cap. Two of the four
  over-ceiling step pages are over primarily because of that callout load. Worth
  a decision either way; no change made here.
