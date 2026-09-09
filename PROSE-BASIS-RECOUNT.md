# Word counts on the prose basis — all 28 content pages

Read-only recomputation. No existing file was edited, reformatted, or rewritten;
`scripts/` and `CLAUDE.md` are untouched. This file is the only addition to the
branch.

Input: the component measurements from PR #39 (`WORD-COUNT-RECOUNT.md`, branch
`wordcount-recount`). I re-derived them from `content/` rather than parsing the
file, then verified the re-derivation against the committed report before going
further.

**Reproduction check: all 28 pages reproduce PR #39 exactly** — not only the
totals but every one of the eleven component buckets and the `pnpm wordcount`
column, byte-for-byte against the committed table. No page disagreed, so there
is nothing to report under that heading.

---

## 1. The three verification checks

Run before any numbers, as asked. Two came back completely clean; the third
found no variant heading but did surface a near-miss that needed a decision.

### Check 1 — is every warning-type callout an SEC-path callout?

**Yes. All 19 verified individually; zero exceptions.**

I extracted each warning callout and tested whether its text, after stripping
markup, begins with the exact fixed pattern `If you are on the SEC path:`. All
19 matched.

| Page | Warning callouts | Words each |
|---|---|---|
| `domains/advice-and-planning-process` | 1 | 90 |
| `domains/client-education` | 1 | 54 |
| `domains/compliance-and-supervision` | 1 | 82 |
| `domains/firm-economics` | 1 | 85 |
| `domains/marketing-and-growth` | 1 | 65 |
| `domains/records-and-documentation` | 1 | 58 |
| `domains/risk-and-insurance` | 1 | 54 |
| `domains/technology-and-client-experience` | 1 | 76 |
| `process/choose-your-regulator` | 2 | 54, 44 |
| `process/file-and-get-approved` | 2 | 80, 113 |
| `process/qualify-as-an-adviser` | 1 | 61 |
| `process/set-up-custody-and-technology` | 1 | 67 |
| `process/stay-registered-and-compliant` | 2 | 84, 75 |
| `process/write-the-disclosure-documents` | 1 | 77 |
| `process/write-the-policies` | 2 | 54, 51 |

**There is no authored warning callout anywhere in the repo**, so the separate
"authored warning callouts" line item you asked for is empty. One area page
(`service-and-pricing-models`) and five step pages carry no warning callout at
all — that is absence, not a variant.

### Check 2 — the landing-page disclaimer

**Identical everywhere it appears. No landing page is missing it. One
non-landing page carries it, by design.**

Five pages carry it. I compared each against the verbatim text in CLAUDE.md
after whitespace normalisation:

| Page | Type | Match |
|---|---|---|
| `content/introduction/index.mdx` | landing | exact |
| `content/process/index.mdx` | landing | exact |
| `content/domains/index.mdx` | landing | exact |
| `content/tools/index.mdx` | landing | exact |
| `content/tools/this-years-figures/index.mdx` | figures | exact |

- **Variation:** none. All five are character-identical to the CLAUDE.md text.
- **Landing page missing it:** none. All four section landings carry it.
- **Non-landing page carrying it:** one, `/tools/this-years-figures`. This is not
  an anomaly — CLAUDE.md's Disclaimer section specifies exactly these five
  locations. It is a judgment call for this recount and is recorded in §6.
- No step, area, glossary or about page carries it, which matches the rule that
  it is never repeated on those.

### Check 3 — Related or Go deeper under a differently worded heading

**No variant heading exists.** I enumerated every H2 across all 28 pages. There
are exactly 6 `## Related` and exactly 9 `## Go deeper`, and no
`See also` / `Further reading` / `More on this` / `Where to read more` anywhere.
`Go deeper` appears only on the 9 area pages; `Related` only on the 4 landings,
the glossary, and the figures page.

**One near-miss found, and it matters.** Every step page ends with an H2
`## Next step` whose entire content is a cross-link to the following step:

> Continue to [Set Up Custody and Technology](/process/set-up-custody-and-technology).

Functionally this is a cross-link section. But your basis excludes "the Related
lists and the area-page Go deeper lists" specifically, and counts "cross-link
bullets that sit in body prose." `Next step` is neither: it is a prose sentence,
not a bullet, and not under either named heading. **I counted it**, as body
prose. It is small and near-constant — 5 to 7 words on eleven of the twelve
steps, and 23 on `stay-registered-and-compliant`, which has no next step and
instead points into the Practice Areas index. Excluding it instead would lower
every step page by 5–7 words (23 on that one) and would change no ceiling
outcome anywhere. Recorded again in §6.

Two other sections deserve a note because they look like cross-link lists and
were **counted**, per your basis:

- `## Which practice areas apply` on all 12 step pages — this is bucket 4, which
  your basis counts explicitly.
- `## Where this starts in the process` on all 9 area pages — prose with inline
  links, not a bullet list, so it stays in body prose. Same treatment as PR #39.

---

## 2. Per-page table, all 28

`Delta` is `pnpm wordcount` minus the prose basis. It is never positive: the
prose basis only removes.

| File | Type | pnpm wordcount | Prose basis | Delta | Delta % |
|---|---|---|---|---|---|
| content/about/index.mdx | about | 5 | 5 | 0 | 0.0% |
| content/domains/advice-and-planning-process/index.mdx | area | 1291 | 1201 | −90 | −7.0% |
| content/domains/client-education/index.mdx | area | 903 | 849 | −54 | −6.0% |
| content/domains/compliance-and-supervision/index.mdx | area | 1150 | 1068 | −82 | −7.1% |
| content/domains/firm-economics/index.mdx | area | 1307 | 1222 | −85 | −6.5% |
| content/domains/index.mdx | landing | 415 | 351 | −64 | −15.4% |
| content/domains/marketing-and-growth/index.mdx | area | 1823 | 1758 | −65 | −3.6% |
| content/domains/records-and-documentation/index.mdx | area | 1134 | 1076 | −58 | −5.1% |
| content/domains/risk-and-insurance/index.mdx | area | 1307 | 1253 | −54 | −4.1% |
| content/domains/service-and-pricing-models/index.mdx | area | 946 | 946 | 0 | 0.0% |
| content/domains/technology-and-client-experience/index.mdx | area | 1223 | 1147 | −76 | −6.2% |
| content/glossary/index.mdx | glossary | 4884 | 4876 | −8 | −0.2% |
| content/introduction/index.mdx | landing | 479 | 413 | −66 | −13.8% |
| content/process/choose-your-regulator/index.mdx | step | 1300 | 1202 | −98 | −7.5% |
| content/process/decide-if-independence-fits/index.mdx | step | 1201 | 1201 | 0 | 0.0% |
| content/process/design-the-firm/index.mdx | step | 1015 | 1015 | 0 | 0.0% |
| content/process/file-and-get-approved/index.mdx | step | 1339 | 1146 | −193 | −14.4% |
| content/process/form-the-business/index.mdx | step | 1292 | 1292 | 0 | 0.0% |
| content/process/index.mdx | landing | 544 | 481 | −63 | −11.6% |
| content/process/leave-and-transition-clients/index.mdx | step | 1304 | 1304 | 0 | 0.0% |
| content/process/qualify-as-an-adviser/index.mdx | step | 1282 | 1221 | −61 | −4.8% |
| content/process/set-up-custody-and-technology/index.mdx | step | 1229 | 1162 | −67 | −5.5% |
| content/process/set-your-advice-approach/index.mdx | step | 1103 | 1103 | 0 | 0.0% |
| content/process/stay-registered-and-compliant/index.mdx | step | 1324 | 1165 | −159 | −12.0% |
| content/process/write-the-disclosure-documents/index.mdx | step | 1337 | 1260 | −77 | −5.8% |
| content/process/write-the-policies/index.mdx | step | 1292 | 1187 | −105 | −8.1% |
| content/tools/index.mdx | landing | 122 | 57 | −65 | −53.3% |
| content/tools/this-years-figures/index.mdx | figures | 501 | 436 | −65 | −13.0% |

### What the delta actually consists of

Worth stating plainly, because it is cleaner than expected and it shapes every
result below.

For **all 21 step and area pages** — the only pages under a ceiling — the delta
is *exactly* the SEC-path callout words, and nothing else. Verified for all 21:

```
pnpm wordcount − prose basis == SEC-path callout words
```

That happens because `pnpm wordcount` already excluded headings, tables and
`Go deeper`, and because no step or area page has a `Related` list or carries the
disclaimer. So on the pages that matter, **the prose basis does one single
thing: it removes SEC-path callouts.** Every other exclusion in the new
definition is either already applied by the old measure or absent from these
pages.

For the remaining 7 pages the delta is `Related` + disclaimer, also verified
exactly.

The practical consequence: a page's movement under the new basis is entirely
determined by how much SEC-path callout it carries. The six step and area pages
with no SEC-path callout — five steps (`decide-if-independence-fits`,
`design-the-firm`, `form-the-business`, `leave-and-transition-clients`,
`set-your-advice-approach`) plus one area (`service-and-pricing-models`) — do not
move at all.

---

## 3. Distributions on the prose basis

### Step pages (12)

| | Prose basis |
|---|---|
| min | 1015 |
| median | 1194 |
| mean | 1188.2 |
| max | 1304 |

Ascending:

| Prose basis | Page | (pnpm was) |
|---|---|---|
| 1015 | design-the-firm | 1015 |
| 1103 | set-your-advice-approach | 1103 |
| 1146 | file-and-get-approved | 1339 |
| 1162 | set-up-custody-and-technology | 1229 |
| 1165 | stay-registered-and-compliant | 1324 |
| 1187 | write-the-policies | 1292 |
| 1201 | decide-if-independence-fits | 1201 |
| 1202 | choose-your-regulator | 1300 |
| 1221 | qualify-as-an-adviser | 1282 |
| 1260 | write-the-disclosure-documents | 1337 |
| 1292 | form-the-business | 1292 |
| 1304 | leave-and-transition-clients | 1304 |

100-word bands:

| Band | Count |
|---|---|
| 800–899 | 0 |
| 900–999 | 0 |
| 1000–1099 | 1 |
| 1100–1199 | 5 |
| 1200–1299 | 5 |
| 1300–1399 | 1 |
| 1400+ | 0 |

**Gap: none.** Largest interior gap is 88 words (1015 → 1103), at the bottom,
where `design-the-firm` again sits slightly below the rest. Ten of the twelve
steps fall inside a 158-word window (1146–1304). The step population is tighter
on the prose basis than on the pnpm basis: the spread narrows from 324 words
(1015–1339) to 289 (1015–1304).

The reordering is substantial. Eight of twelve steps change rank, and one moves
nine places:

| Page | pnpm rank | prose rank |
|---|---|---|
| file-and-get-approved | 12 (longest) | 3 |
| stay-registered-and-compliant | 10 | 5 |
| write-the-policies | 7 | 6 |
| decide-if-independence-fits | 3 | 7 |
| qualify-as-an-adviser | 5 | 9 |
| write-the-disclosure-documents | 11 | 10 |
| form-the-business | 6 | 11 |
| leave-and-transition-clients | 9 | 12 (longest) |

`file-and-get-approved` goes from the longest step page to the third shortest.
`leave-and-transition-clients`, which never moved, becomes the longest.

### Area pages (9)

| | Prose basis |
|---|---|
| min | 849 |
| median | 1147 |
| mean | 1168.9 |
| max | 1758 |

Ascending:

| Prose basis | Page | (pnpm was) |
|---|---|---|
| 849 | client-education | 903 |
| 946 | service-and-pricing-models | 946 |
| 1068 | compliance-and-supervision | 1150 |
| 1076 | records-and-documentation | 1134 |
| 1147 | technology-and-client-experience | 1223 |
| 1201 | advice-and-planning-process | 1291 |
| 1222 | firm-economics | 1307 |
| 1253 | risk-and-insurance | 1307 |
| 1758 | marketing-and-growth | 1823 |

100-word bands:

| Band | Count |
|---|---|
| 800–899 | 1 |
| 900–999 | 1 |
| 1000–1099 | 2 |
| 1100–1199 | 1 |
| 1200–1299 | 3 |
| 1300–1699 | 0 |
| 1700–1799 | 1 |

**Gap: yes, and it persists.** Eight area pages cluster at 849–1253;
`marketing-and-growth` sits at 1758. The gap is **505 words**, against 516 on the
pnpm basis. The new basis narrows it by 11 words — it does not touch it.

Only one rank change among areas: `compliance-and-supervision` and
`records-and-documentation` swap 3rd and 4th (they were 16 words apart on pnpm
and are 8 apart now).

---

## 4. Ceiling status on the prose basis, against the current numbers

Judged against the current CLAUDE.md figures: hard 900–1,300 for steps, soft
1,300 for areas. No recommendation on new numbers.

### Over the ceiling — 2 pages (was 7)

| Page | Type | Prose basis | Over by |
|---|---|---|---|
| `process/leave-and-transition-clients` | step | 1304 | 4 |
| `domains/marketing-and-growth` | area | 1758 | 458 |

### Under 900

**No step page is under 900** — the step minimum is 1015.

One page of any type falls below 900: `domains/client-education` at 849. It is an
area page, and the area floor in CLAUDE.md is 700, not 900, so it is inside its
own floor with 149 words to spare. Flagging it only because you asked for
sub-900 pages by number.

### Changed status relative to the pnpm basis — 5 pages, all in the same direction

| Page | Type | pnpm | prose | Was | Now |
|---|---|---|---|---|---|
| `process/file-and-get-approved` | step | 1339 | 1146 | OVER | inside |
| `process/stay-registered-and-compliant` | step | 1324 | 1165 | OVER | inside |
| `process/write-the-disclosure-documents` | step | 1337 | 1260 | OVER | inside |
| `domains/firm-economics` | area | 1307 | 1222 | OVER | inside |
| `domains/risk-and-insurance` | area | 1307 | 1253 | OVER | inside |

No page changed status in the other direction, and none crossed a floor.

**Five of the seven over-ceiling pages drop inside on the prose basis.** All five
did so purely by shedding SEC-path callout words — that is the whole of their
delta. The two that remain over are exactly the two whose overage was never
SEC-path callout: `leave-and-transition-clients` carries no SEC-path callout at
all and did not move a single word, and `marketing-and-growth` carries only 65
words of one against a 458-word overage.

---

## 5. The three area pages currently over the soft ceiling

Reference set: the other six area pages, whose prose-basis median is 1072 and
maximum 1201 (`advice-and-planning-process`).

| | pnpm | prose | vs 1300 (pnpm → prose) | Gap above the six's max | × the six's median |
|---|---|---|---|---|---|
| `marketing-and-growth` | 1823 | 1758 | +523 → **+458** | 532 → **557** | 1.60 → **1.64** |
| `firm-economics` | 1307 | 1222 | +7 → **−78** | 16 → **21** | 1.14 → **1.14** |
| `risk-and-insurance` | 1307 | 1253 | +7 → **−47** | 16 → **52** | 1.14 → **1.17** |

**Yes, it changes their relationship — but it separates them from each other far
more than it moves them toward the other six.**

Three specific effects:

**1. The 1307 tie breaks, and it turns out to have been an accident.**
`firm-economics` and `risk-and-insurance` were identical to the word on the pnpm
basis, both exactly 7 over. On the prose basis they are 31 words apart (1222 and
1253), because `firm-economics` carries 85 words of SEC-path callout against
`risk-and-insurance`'s 54. Their pnpm equality was a coincidence of differing
authored prose and differing mandated content cancelling out — the prose basis
shows they were never equally long as authored writing.

**2. Both drop clearly inside, and stop being marginal.** On the pnpm basis they
were 7 words over — close enough that a single sentence decided the outcome. On
the prose basis they are 78 and 47 under. They also move slightly *further* from
the six, not closer: the gap above `advice-and-planning-process` widens from 16
words to 21 and 52 respectively. So they are more clearly distinguishable from
the pack, while being no longer over the line.

**3. `marketing-and-growth` becomes relatively more of an outlier, not less.**
Its delta is −3.6%, the smallest of any area page that moved at all, against a
six-page mean of −5.2%. Because the other pages shed proportionally more, its
gap above the six's maximum *widens* from 532 to 557, and its multiple of the
six-page median rises from 1.60× to 1.64×. In absolute terms it drops 65 words;
in relative terms it stands further out than before.

Put together: the prose basis resolves the `firm-economics` /
`risk-and-insurance` question and leaves `marketing-and-growth` untouched as the
single area outlier — on the prose basis it is the only area page over the
current soft ceiling, by 458 words.

---

## 6. What I judged rather than measured

Four calls. Each gives the alternative and its effect on the numbers.

**1. The disclaimer on `/tools/this-years-figures`.** Your basis excludes "the
standard educational-content disclaimer on landing pages." The figures page is
not a section landing page, but it carries the identical disclaimer, mandated by
the same CLAUDE.md rule. I read the intent as "the mandated standard
disclaimer, wherever the rule puts it" rather than as a location test, and
excluded it there too. Treating it as a landing-page-only exclusion would leave
59 words in and put the figures page at 495 instead of 436. It carries no
ceiling, so nothing else changes.

**2. `## Next step` on step pages.** Discussed in Check 3. It is a cross-link
section by function but is neither a Related list, a Go deeper list, nor a
bullet, so I counted it as body prose. Excluding it would remove 5–7 words from
eleven step pages and 23 from `stay-registered-and-compliant`. **This changes no
ceiling outcome**: the only step still over is `leave-and-transition-clients` at
1304, which would fall to 1298 and drop inside. So the one marginal step-page
result in this report is sensitive to this call, by 4 words. Flagging it
explicitly rather than burying it.

**3. `## Where this starts in the process` on area pages.** A fixed section whose
job is linking two or three originating steps — functionally a cross-link list,
but written as prose with inline links, not bullets. Counted, same as PR #39.
Excluding it would remove 66–101 words from every area page. `firm-economics`
and `risk-and-insurance` are already inside, so the only effect would be on
`marketing-and-growth`, which would fall from 1758 to about 1657 and stay well
over.

**4. Worked examples.** Your basis counts them. As established in PR #39 there
are no structurally distinguishable worked-example blocks anywhere in
`content/` — the recurring unnamed hypothetical is written inline in ordinary
paragraphs. Since they are counted on this basis and they live in body prose,
this needs no separation and the choice has no numeric effect. Noted only so the
zero is not read as an omission.

One thing I did **not** have to judge: whether any warning callout was authored
rather than mandated, and whether the disclaimer varied. Both were checked
exhaustively and came back clean, so no interpretation was needed.

---

## Method note

The counter is the same instrument used for PR #39, re-run from `content/` and
verified against that report's committed table on every page and every component
before any new basis was applied. It was kept in the session scratchpad and
deliberately not committed, since this branch is limited to the report file.

The prose basis is computable from PR #39's published table without re-running
anything:

```
prose basis = TOTAL − headings − tables − Related − Go deeper
                    − SEC-path callouts − disclaimer

equivalently  = body prose + cross-link bullets (bucket 4)
                    + non-SEC, non-disclaimer callouts
```

Both forms were computed independently and agree on all 28 pages.
