# Consistency pile

Build order step 5, phase 1 of 4: **inventory only**. Nothing in this file has been
repaired. Every entry is a report of what is on `main` as of this branch's base commit
(`4629070`), recorded so that the later repair passes can be scoped from a list that was
not silently edited while it was being written.

Nothing outside this file was created or modified in the pass that produced it.

## Pages inventoried

Enumerated from `find content -name '*.mdx'`, not assumed. 28 pages.

| Section | Pages | Paths |
| --- | --- | --- |
| introduction | 1 | `content/introduction/index.mdx` |
| process (landing) | 1 | `content/process/index.mdx` |
| process (steps) | 12 | all twelve slugs in CLAUDE.md's step list are present, one folder each |
| domains (landing) | 1 | `content/domains/index.mdx` |
| domains (areas) | 9 | all nine slugs in CLAUDE.md's area list are present, one folder each |
| tools (landing) | 1 | `content/tools/index.mdx` |
| tools (figures) | 1 | `content/tools/this-years-figures/index.mdx` |
| glossary | 1 | `content/glossary/index.mdx` — template stub |
| about | 1 | `content/about/index.mdx` — template stub |

Supporting files read but not inventoried as pages: `content/_meta.js`,
`content/process/_meta.js`, `content/domains/_meta.js`, `content/tools/_meta.js`,
`FIGURES-INVENTORY.md`, `FOLLOWUPS.md`, `CLAUDE.md`, `README.md`,
`scripts/wordcount.mjs`.

No page is missing, and no unexpected page exists. All four `_meta.js` files list
exactly the pages that exist beneath them, in the orders CLAUDE.md specifies.

---

# SECTION A — GLOSSARY MATERIAL

## A1. Does `content/glossary` exist, and what is in it

It exists, at `content/glossary/index.mdx`, and it is still the untouched template stub.
It is 81 bytes and 5 words of body prose. Complete contents, verbatim:

```
---
title: Glossary
asIndexPage: true
---

# Glossary

This page is coming soon.
```

It has no terms, no H3 headings, no explicit ids, and no frontmatter `description`. It is
reachable in the sidebar (`content/_meta.js` lists `glossary: 'Glossary'`) and is linked
from three pages, so a reader following any of those links today lands on "This page is
coming soon."

`content/about/index.mdx` is the same stub shape, 75 bytes, and is out of scope for this
pass except as noted at B1.

## A2. Every `/glossary#` link in `content/`

**There are none.** Zero. Searching `content/` for any link target containing `#`
returns seven hits, all of them same-page anchors inside
`content/tools/this-years-figures/index.mdx` (see B2), and none of them glossary anchors.

Links to `/glossary` with no anchor: **3 occurrences, all in a "Related" list.**

| File | Anchor id | Link text |
| --- | --- | --- |
| `content/introduction/index.mdx` | *(none — bare `/glossary`)* | Glossary |
| `content/domains/index.mdx` | *(none — bare `/glossary`)* | Glossary |
| `content/tools/index.mdx` | *(none — bare `/glossary`)* | Glossary |

Deduplicated distinct anchors, with occurrence counts:

| Anchor | Occurrences |
| --- | --- |
| *(no `/glossary#` anchor is used anywhere in `content/`)* | 0 |

Consequences worth stating plainly, because they set the shape of phases 2–4:

- CLAUDE.md's "Glossary running list" section reads "(none yet)". That is **accurate**.
  Nothing has drifted; the glossary simply has not been started.
- CLAUDE.md's writing-style rule — "Define a term the first time it appears and link it
  to the glossary" — is currently unmet on **every one of the 26 written pages**. This is
  a single systematic gap, not 26 separate defects, and it is the main body of work the
  glossary phase inherits.
- Because no anchor is in use, there is no existing id scheme to conform to. The
  proposed ids in A3 are free choices, constrained only by CLAUDE.md's id rule
  (lowercase, spaces and slashes to hyphens, other punctuation dropped).

## A3. Candidate terms

Every term of art the written pages use that a cold reader would need defined. "Files"
lists the pages where the term (or an unambiguous variant of it) appears; paths are given
relative to `content/` with the trailing `/index.mdx` dropped. **No definitions are
written here — the term list is the deliverable for this phase.**

The "linked?" column is uniform and is stated once rather than repeated 68 times:
**none of these terms is currently linked as a glossary anchor anywhere**, because no
`/glossary#` link exists (A2). Every row below is "not yet linked."

| Term as used | Proposed id | Files it appears in |
| --- | --- | --- |
| Advisers Act (Investment Advisers Act of 1940) | `advisers-act` | domains/advice-and-planning-process, domains/risk-and-insurance, process/choose-your-regulator, process/file-and-get-approved, process/qualify-as-an-adviser, process/write-the-policies, tools/this-years-figures |
| advertisement (adviser sense) | `advertisement` | domains/marketing-and-growth |
| annual updating amendment | `annual-updating-amendment` | process/stay-registered-and-compliant, process/write-the-disclosure-documents, tools/this-years-figures |
| assets under management | `assets-under-management` | domains/service-and-pricing-models, introduction, process/choose-your-regulator, process/decide-if-independence-fits, tools/this-years-figures |
| balance sheet | `balance-sheet` | domains/firm-economics |
| bonding / surety bond | `surety-bond` | domains/firm-economics, domains/risk-and-insurance, process/file-and-get-approved, process/form-the-business, process/stay-registered-and-compliant, process/write-the-disclosure-documents, tools/this-years-figures |
| broker-dealer | `broker-dealer` | domains/advice-and-planning-process, introduction, process/decide-if-independence-fits, process/leave-and-transition-clients, process/qualify-as-an-adviser, process/set-up-custody-and-technology, tools/this-years-figures |
| brochure (firm brochure, Form ADV Part 2A) | `firm-brochure` | domains/client-education, domains/compliance-and-supervision, domains/marketing-and-growth, domains/records-and-documentation, domains/service-and-pricing-models, process/file-and-get-approved, process/leave-and-transition-clients, process/stay-registered-and-compliant, process/write-the-disclosure-documents, process/write-the-policies, tools/this-years-figures |
| brochure supplement (Form ADV Part 2B) | `brochure-supplement` | domains/client-education, process/leave-and-transition-clients, process/write-the-disclosure-documents, tools/this-years-figures |
| business continuity and succession plan | `business-continuity-and-succession-plan` | domains/compliance-and-supervision, domains/records-and-documentation, domains/risk-and-insurance, domains/technology-and-client-experience, process/write-the-policies |
| chief compliance officer | `chief-compliance-officer` | domains/compliance-and-supervision, process/write-the-policies |
| claims-made policy | `claims-made-policy` | domains/risk-and-insurance |
| code of ethics | `code-of-ethics` | domains/compliance-and-supervision, process/write-the-policies |
| compliance manual | `compliance-manual` | domains/compliance-and-supervision, process/write-the-policies |
| conflict of interest | `conflict-of-interest` | domains/compliance-and-supervision, domains/marketing-and-growth, domains/service-and-pricing-models, process/write-the-disclosure-documents, process/write-the-policies |
| continuing education | `continuing-education` | process/qualify-as-an-adviser, tools/this-years-figures |
| custody | `custody` | domains/risk-and-insurance, domains/technology-and-client-experience, process/file-and-get-approved, process, process/leave-and-transition-clients, process/set-up-custody-and-technology, process/write-the-disclosure-documents, tools/this-years-figures |
| deficiency letter | `deficiency-letter` | process/file-and-get-approved |
| discretionary authority | `discretionary-authority` | domains/advice-and-planning-process, domains/client-education, domains/marketing-and-growth, domains/risk-and-insurance, process/set-your-advice-approach, process/write-the-disclosure-documents, tools/this-years-figures |
| disqualified person | `disqualified-person` | domains/marketing-and-growth, tools/this-years-figures |
| employer identification number (EIN) | `employer-identification-number` | process/form-the-business |
| endorsement | `endorsement` | domains/marketing-and-growth, tools/this-years-figures |
| entitlement (filing-system access) | `entitlement` | process/file-and-get-approved |
| errors and omissions coverage | `errors-and-omissions-coverage` | domains/risk-and-insurance, process/form-the-business |
| examination (regulatory) | `examination` | domains/compliance-and-supervision, domains/marketing-and-growth, domains/records-and-documentation, domains/risk-and-insurance, process/choose-your-regulator, process/file-and-get-approved, process/form-the-business, process/qualify-as-an-adviser, process/set-up-custody-and-technology, process/stay-registered-and-compliant, process/write-the-disclosure-documents, process/write-the-policies, tools/this-years-figures |
| fiduciary duty | `fiduciary-duty` | domains/advice-and-planning-process, domains/service-and-pricing-models, process/write-the-policies |
| FINRA | `finra` | domains/firm-economics, process/file-and-get-approved, process/qualify-as-an-adviser, tools/this-years-figures |
| Form ADV | `form-adv` | domains/client-education, domains/compliance-and-supervision, domains/service-and-pricing-models, process/choose-your-regulator, process/file-and-get-approved, process/write-the-disclosure-documents, tools/this-years-figures |
| Form CRS (client relationship summary) | `form-crs` | domains/client-education, process/stay-registered-and-compliant, process/write-the-disclosure-documents, tools/this-years-figures |
| Form U4 | `form-u4` | process/file-and-get-approved, process/qualify-as-an-adviser |
| Form U5 | `form-u5` | tools/this-years-figures |
| franchise tax | `franchise-tax` | process/form-the-business, tools/this-years-figures |
| hypothetical performance | `hypothetical-performance` | domains/marketing-and-growth, process/decide-if-independence-fits, tools/this-years-figures |
| IARD (the electronic filing system) | `iard` | domains/firm-economics, process/file-and-get-approved, process/stay-registered-and-compliant, tools/this-years-figures |
| in-kind transfer | `in-kind-transfer` | process/leave-and-transition-clients |
| independent verification | `independent-verification` | process/set-up-custody-and-technology, tools/this-years-figures |
| investment adviser representative | `investment-adviser-representative` | domains/advice-and-planning-process, domains/marketing-and-growth, process/decide-if-independence-fits, process, process/qualify-as-an-adviser, tools/this-years-figures |
| IRS | `irs` | domains/firm-economics, domains/records-and-documentation, process/form-the-business |
| limited liability company | `limited-liability-company` | process/form-the-business |
| minimum net worth | `minimum-net-worth` | domains/firm-economics, domains/risk-and-insurance, tools/this-years-figures |
| model rule | `model-rule` | domains/advice-and-planning-process, domains/marketing-and-growth, domains/records-and-documentation, domains/risk-and-insurance, domains/technology-and-client-experience, process/qualify-as-an-adviser, process/write-the-policies, tools/this-years-figures |
| NASAA | `nasaa` | domains/advice-and-planning-process, domains/client-education, domains/compliance-and-supervision, domains/marketing-and-growth, domains/records-and-documentation, domains/risk-and-insurance, domains/technology-and-client-experience, process/choose-your-regulator, process/form-the-business, process/qualify-as-an-adviser, process/set-up-custody-and-technology, process/write-the-disclosure-documents, process/write-the-policies, tools/this-years-figures |
| notice filing | `notice-filing` | domains/firm-economics, domains/risk-and-insurance, process/choose-your-regulator, process/file-and-get-approved, process/stay-registered-and-compliant, tools/this-years-figures |
| other-than-annual amendment | `other-than-annual-amendment` | process/stay-registered-and-compliant |
| outside business activity | `outside-business-activity` | domains/risk-and-insurance, process/write-the-disclosure-documents, process/write-the-policies |
| performance advertising | `performance-advertising` | domains/marketing-and-growth, tools/this-years-figures |
| privacy policy | `privacy-policy` | domains/compliance-and-supervision, domains/technology-and-client-experience, process/write-the-policies |
| promoter | `promoter` | tools/this-years-figures |
| qualified custodian | `qualified-custodian` | domains/technology-and-client-experience, process/leave-and-transition-clients, process/set-up-custody-and-technology, tools/this-years-figures |
| reconciliation | `reconciliation` | domains/technology-and-client-experience, process/qualify-as-an-adviser, process/set-up-custody-and-technology |
| recordkeeping scheme | `recordkeeping` | domains/compliance-and-supervision, domains/marketing-and-growth, domains/records-and-documentation, process/design-the-firm, process/form-the-business, process/set-up-custody-and-technology, process/set-your-advice-approach, process/stay-registered-and-compliant, process/write-the-policies, tools/this-years-figures |
| recruiting protocol | `recruiting-protocol` | process/leave-and-transition-clients |
| registered agent | `registered-agent` | process/form-the-business |
| registered investment adviser | `registered-investment-adviser` | process/decide-if-independence-fits, process/file-and-get-approved |
| regulatory assets under management | `regulatory-assets-under-management` | process/choose-your-regulator, tools/this-years-figures |
| restrictive covenant / non-solicitation | `restrictive-covenant` | process/leave-and-transition-clients |
| retail investor | `retail-investor` | domains/advice-and-planning-process, domains/client-education, process/write-the-disclosure-documents, tools/this-years-figures |
| retention period | `retention-period` | domains/marketing-and-growth, domains/records-and-documentation, process/set-up-custody-and-technology, process/stay-registered-and-compliant, process/write-the-policies, tools/this-years-figures |
| retroactive date | `retroactive-date` | domains/risk-and-insurance |
| runway | `runway` | domains/firm-economics, process/decide-if-independence-fits, process/qualify-as-an-adviser |
| SEC (Securities and Exchange Commission) | `securities-and-exchange-commission` | domains/advice-and-planning-process, domains/client-education, domains/compliance-and-supervision, domains/firm-economics, domains/marketing-and-growth, domains/records-and-documentation, domains/risk-and-insurance, domains/service-and-pricing-models, domains/technology-and-client-experience, introduction, process/choose-your-regulator, process/decide-if-independence-fits, process/file-and-get-approved, process, process/qualify-as-an-adviser, process/set-up-custody-and-technology, process/stay-registered-and-compliant, process/write-the-disclosure-documents, process/write-the-policies, tools/this-years-figures |
| SEC-registered adviser | `sec-registered-adviser` | domains/advice-and-planning-process, domains/client-education, domains/compliance-and-supervision, domains/firm-economics, domains/marketing-and-growth, domains/records-and-documentation, domains/risk-and-insurance, domains/technology-and-client-experience, process/choose-your-regulator, process/file-and-get-approved, process/qualify-as-an-adviser, process/set-up-custody-and-technology, process/stay-registered-and-compliant, process/write-the-disclosure-documents, process/write-the-policies, tools/this-years-figures |
| standardized account transfer | `standardized-account-transfer` | process/leave-and-transition-clients, tools/this-years-figures |
| state-registered adviser | `state-registered-adviser` | domains/advice-and-planning-process, domains/client-education, domains/compliance-and-supervision, domains/marketing-and-growth, domains/records-and-documentation, domains/risk-and-insurance, domains/technology-and-client-experience, process/choose-your-regulator, process/stay-registered-and-compliant, process/write-the-disclosure-documents, process/write-the-policies, tools/this-years-figures |
| state securities regulator | `state-securities-regulator` | domains/client-education, domains/marketing-and-growth, process/choose-your-regulator, process/form-the-business, process/qualify-as-an-adviser, tools/this-years-figures |
| supervision | `supervision` | domains/compliance-and-supervision, domains, domains/marketing-and-growth, domains/records-and-documentation, domains/risk-and-insurance, process/choose-your-regulator, process/design-the-firm, process/file-and-get-approved, process, process/leave-and-transition-clients, process/qualify-as-an-adviser, process/set-up-custody-and-technology, process/set-your-advice-approach, process/stay-registered-and-compliant, process/write-the-disclosure-documents, process/write-the-policies, tools/this-years-figures |
| testimonial | `testimonial` | domains/compliance-and-supervision, domains/marketing-and-growth, tools/this-years-figures |
| uniform securities act | `uniform-securities-act` | domains/marketing-and-growth, tools/this-years-figures |

**Count: 68 candidate terms.**

Terms deliberately **not** proposed, with the reason:

- **"the adviser"** — the recurring unnamed hypothetical, not a term of art. It is a
  writing convention, and its drift is reported at B11 instead.
- **"The Independent Path" / "Practice Areas"** — the site's own structural names. The
  introduction and both landing pages already explain the step-versus-area distinction in
  prose; a glossary entry would duplicate the landing pages rather than define a term.
- **"plain English"** — used both in its ordinary sense and in the regulatory sense the
  Form ADV Part 2 instructions give it. Flagged at A4 as a collision to resolve before
  deciding whether it earns an entry.
- **Ordinary business vocabulary** — "revenue," "cash," "referral," "onboarding." A smart
  adult with no background in the subject does not need these defined.

## A4. Collisions and near-duplicates

### A4.1 — The same concept written different ways across pages

| Concept | Variants in use | Where |
| --- | --- | --- |
| Form U4 | "Form U4" (named outright); "a separate **uniform form for individuals**" (named around, with the link text carrying the euphemism) | `process/file-and-get-approved` names it; `process/qualify-as-an-adviser` avoids naming it, in the very step that is about filing it |
| Form U5 | "Form U5" (figures page Source cell); "a form individually documenting your departure" / "the individual termination form" | `tools/this-years-figures` names it; `process/leave-and-transition-clients` never does |
| IARD | "IARD" (figures page Source cells, `iard.com` link text); "the electronic system that both state-registered and SEC-registered advisers file through"; "the central registration system FINRA operates"; "the same electronic filing system you first used to apply"; "the electronic system advisers file in" | figures page and `domains/firm-economics` name it; `process/file-and-get-approved`, `process/qualify-as-an-adviser`, `process/stay-registered-and-compliant` each describe it differently and none names it |
| CRD | "the central registration system"; "your record in the central registration system"; "your current record" | `process/qualify-as-an-adviser` only; never named |
| The firm brochure | "the firm brochure"; "Part 2A"; "the disclosure brochure"; "the brochure" | `process/write-the-disclosure-documents`, `process/leave-and-transition-clients`, `domains/client-education`, `domains/marketing-and-growth` |
| The brochure supplement | "the supplement"; "Part 2B"; "any related supplement"; "the supplement for the person giving the advice" | `process/write-the-disclosure-documents`, `process/leave-and-transition-clients`, `domains/client-education` |
| Form ADV Part 1B | "the state-only portion"; "a part of the registration form that only state-registered advisers fill in"; "Part 1B of the form" | `process/write-the-disclosure-documents`, `process/stay-registered-and-compliant` |
| Regulatory assets under management | "regulatory assets under management"; "RAUM"; and plain "assets under management" used for the same test | `process/choose-your-regulator` defines and distinguishes both; `introduction` and `process/decide-if-independence-fits` use the plain form for what is actually the regulatory test |
| Errors and omissions coverage | "errors and omissions coverage"; "professional liability insurance"; "professional liability coverage"; "the firm's insurance" | `domains/risk-and-insurance`, `process/form-the-business`, `domains/firm-economics` |
| The compliance program review | "the annual review"; "a separate, substantive review"; "the compliance program review"; "reviewing it at least once a year" | `domains/compliance-and-supervision`, `process/write-the-policies`, figures page |
| Discretionary authority | "discretionary authority"; "discretion"; "discretionary" | `process/set-your-advice-approach`, `domains/advice-and-planning-process`, `domains/risk-and-insurance`, and others |
| Plain English | ordinary sense ("written in plain English") vs. the regulatory standard the Form ADV Part 2 instructions impose | `introduction` and most pages use the ordinary sense; `domains/client-education` uses both in the same page |

Whichever spelling the glossary adopts, each of these needs one id and the other variants
need to link to it. The Form U4 / Form U5 / IARD / CRD group is the sharpest: CLAUDE.md
hard rule 2 expressly permits naming uniform regulatory forms, so the pages that name
around them are working under a constraint that does not exist.

### A4.2 — Candidates that are really regulated figures, and belong on the figures page

These read like glossary terms but resolve to a number set by law, regulation, or an
agency. They already have, or need, a row on `/tools/this-years-figures` rather than a
definition — or they need **both**, a definition of the concept and a link to the row.

| Candidate | Why it is a figure, not (only) a definition | Figures-page section |
| --- | --- | --- |
| the small adviser ceiling / large adviser threshold / mid-sized adviser band | the whole meaning of each is its dollar line | `#decide-if-independence-fits` |
| the buffer on either side of the SEC line | two dollar figures | `#decide-if-independence-fits` |
| multi-state exception | a state count | `#choose-your-regulator` |
| the qualifying examination | resolves to exam identifiers, which CLAUDE.md hard rule 2 puts on the figures page | `#qualify-as-an-adviser` |
| accepted professional designations | resolves to designation names, same rule | `#qualify-as-an-adviser` |
| minimum net worth | a dollar amount, varying by state | `#risk-and-insurance` |
| surety bond amount | a dollar amount, varying by state | `#risk-and-insurance` |
| retention period | a term of years by category | `#write-the-policies` |
| the annual updating amendment deadline | a day count | `#write-the-disclosure-documents` |
| the renewal window | a calendar period | `#stay-registered-and-compliant` |
| the standardized account transfer window | two business-day counts | `#leave-and-transition-clients` |
| the notice filing trigger | a level of business, varying by state | `#file-and-get-approved` |

The pattern to settle in a later phase: several of these have a genuine conceptual half
(what a surety bond *is*, what "custody" *means*) that a glossary should carry, and a
numeric half that must not appear in the definition. CLAUDE.md's glossary rule already
anticipates this — "where a term turns on one, link the matching section of
/tools/this-years-figures by anchor" — and the figures page already carries stable
section ids for every anchor those definitions would need.

## A5. Candidates that could not be defined without naming a vendor or printing a figure

**Vendor-name risk — 4 candidates.** None is unwritable; each has a generic formulation
that the existing pages already model, and the note records the trap rather than a
blocker.

| Candidate | The trap | The formulation the pages already use |
| --- | --- | --- |
| qualified custodian | the instinct is to define by example, and the examples are custodian brand names | `process/set-up-custody-and-technology`: "a bank, a registered broker-dealer, or another institution that meets the regulatory definition" |
| IARD | the system has an operator and a commercial-looking domain | "the electronic system advisers file through, operated by FINRA on behalf of the regulators that use it" — FINRA is a regulator, not a commercial party, so it is nameable under hard rule 2 |
| errors and omissions coverage | the instinct is to name carriers | `domains/risk-and-insurance` defines it by what it responds to and how it is written, and names no insurer |
| the technology stack categories (portfolio accounting, billing, document storage, client relationship system) | every one of these is ordinarily named by product | `domains/technology-and-client-experience` defines each as a *job*: "something has to hold client assets," "something has to calculate fees" |

**Regulated-figure risk — the twelve rows in A4.2**, plus one more: **exam identifiers
and designation names**. CLAUDE.md hard rule 2 puts these on `/tools/this-years-figures`
alongside numbers even though they are names rather than figures, and the figures page
already prints them in the Value column under the row convention for name-valued rows.
A glossary entry for "qualifying examination" therefore has to describe the requirement
without listing which exams satisfy it, and link the anchor.

**Nothing in A3 is unwritable.** No candidate term requires a vendor name or a regulated
figure in order to be defined at all.

---

# SECTION B — CONSISTENCY DEFECTS

Reported, not repaired.

## B1. Internal links that do not resolve — **0 dead targets**

Every internal link in `content/` resolves. 27 distinct internal targets, 194 link
occurrences, checked against the actual folders under `content/`.

| Target | Occurrences | Resolves |
| --- | --- | --- |
| `/tools/this-years-figures` | 38 | yes |
| `/domains/records-and-documentation` | 14 | yes |
| `/domains/compliance-and-supervision` | 14 | yes |
| `/process/write-the-policies` | 9 | yes |
| `/process` | 9 | yes |
| `/domains/firm-economics` | 9 | yes |
| `/domains` | 9 | yes |
| `/process/write-the-disclosure-documents` | 8 | yes |
| `/process/stay-registered-and-compliant` | 8 | yes |
| `/process/design-the-firm` | 8 | yes |
| `/domains/risk-and-insurance` | 8 | yes |
| `/process/file-and-get-approved` | 7 | yes |
| `/domains/service-and-pricing-models` | 7 | yes |
| `/process/form-the-business` | 5 | yes |
| `/domains/client-education` | 5 | yes |
| `/process/qualify-as-an-adviser` | 4 | yes |
| `/process/leave-and-transition-clients` | 4 | yes |
| `/process/decide-if-independence-fits` | 4 | yes |
| `/process/choose-your-regulator` | 4 | yes |
| `/tools` | 3 | yes |
| `/process/set-your-advice-approach` | 3 | yes |
| `/process/set-up-custody-and-technology` | 3 | yes |
| `/glossary` | 3 | yes — but resolves to the stub (A1) |
| `/domains/advice-and-planning-process` | 3 | yes |
| `/introduction` | 2 | yes |
| `/domains/technology-and-client-experience` | 2 | yes |
| `/domains/marketing-and-growth` | 1 | yes |

Anchor links, all same-page inside the figures page, all matching a real heading id on
that page:

| Anchor | Occurrences | Heading it targets |
| --- | --- | --- |
| `#write-the-policies` | 2 | `## Step 8 — Write the Policies [#write-the-policies]` |
| `#file-and-get-approved` | 4 | `## Step 9 — File and Get Approved [#file-and-get-approved]` |
| `#stay-registered-and-compliant` | 1 | `## Step 12 — Stay Registered and Compliant [#stay-registered-and-compliant]` |

**Three findings that are not dead links but belong here:**

1. **`/about` is an orphan.** No page in `content/` links to it. It is reachable only
   from the sidebar. Every other section landing is linked from at least two "Related"
   lists.
2. **`/domains/marketing-and-growth` is linked exactly once in the whole site**, from the
   `/domains` index list. No step page links to it (see B3). It is the only area page
   with no inbound link from `content/process/`.
3. **`/glossary` is linked three times into a stub.** Not a broken link today; it becomes
   one in substance the moment a reader follows it.

## B2. Figures page, both directions

### B2.a — Anchors linked into the figures page that do not match a heading id — **0**

All seven `#`-anchored links in `content/` are same-page links on the figures page itself
and all seven match a real heading id (table above). **No page anywhere in `content/`
links to a `/tools/this-years-figures#` anchor.** All 38 cross-page links to the figures
page are bare links to the top of the page.

That is not a rule violation — CLAUDE.md requires an anchor only for glossary definitions
and worksheet pages, and permits the bare form on step and area pages. It is recorded
because the figures page already carries a stable id for all 19 of its numbered sections, so
38 opportunities to land the reader on the right table are currently unused, and a
reader following a link from `domains/risk-and-insurance` about the net-worth reporting
deadline arrives at the top of a 49-row page.

### B2.b — Figures named without a link to the figures page — **1 confirmed defect, 2 flagged for judgment**

A full sweep of every numeral and every spelled-out period, quantity, or frequency in
`content/` outside the figures page.

**Confirmed — 1.**

| File | Line | What it prints | Where the figure lives |
| --- | --- | --- | --- |
| `content/process/write-the-policies/index.mdx` | 80, in the practitioner Callout | "…and calls for reviewing it **at least once a year**." | `#compliance-and-supervision` on the figures page carries this exact figure as "Frequency of the compliance program review," Value "Varies by state," precisely because the model rule's baseline binds nobody until a state adopts it |

This is the same class of defect as FOLLOWUPS item 15's finding 6(e), which repaired the
identical sentence on `domains/compliance-and-supervision` — that page now defers and
links. `process/write-the-policies` was not in 6(e)'s list and still states the model
rule's interval as fact, with no link. It is also the *only* place in `content/` outside
the figures page where a regulated interval is stated as a number.

**Flagged for judgment — 2.** Neither is clearly inside hard rule 5; both are recorded so
a later phase decides rather than discovers.

| File | What it prints | Why it is arguable |
| --- | --- | --- |
| `content/domains/marketing-and-growth/index.mdx` line 28 | "**In May 2026**, NASAA … amended **four** model rules at once" | An amendment date and a count of rules. Hard rule 5 reaches "statistics, thresholds, limits, deadlines, or rates." An amendment date is none of those, and it is historical rather than binding. But CLAUDE.md's figures-page conventions treat model-rule amendment dates as Source-column material, and the same four dates appear in the figures page's Source cells. The page's own "Go deeper" descriptions also carry "amended May 4, 2026" twice. |
| `content/domains/marketing-and-growth/index.mdx` line 33, SEC-path callout | "the SEC's marketing rule at **17 CFR 275.206(4)-1**" | A citation, not a figure. Recorded only because it is the one place in `content/` where a bare CFR cite sits in body prose rather than in a link or a "Go deeper" line. |

**Explicitly not listed, per CLAUDE.md:** the recurring hypothetical's round numbers —
"about 80 clients," "roughly $300,000 in annual revenue," "a six-month gap," "within
about a decade of retirement," "for three years," "for two years." These are round
hypothetical numbers in worked examples and are encouraged.

### B2.c — A figures-page row and a step page state the same rule differently

Not a missing link; a substantive contradiction between a page and the row it points at.

- `content/process/leave-and-transition-clients/index.mdx`: "The process must complete
  within a set window **once both sides confirm the request**; see This year's figures for
  how long that window runs."
- `content/tools/this-years-figures/index.mdx`, Step 11 row "Standardized account
  transfer window": "The first window runs **from the point the transfer instruction is
  established or received, not from any later agreement between the two firms**."

The figures row was corrected in commit `f070c3d` ("Correct the clock start, terminology,
and date on the account transfer window row"). The step page that sends the reader to it
was not updated in the same pass and still describes the clock starting at mutual
confirmation. A reader following the link is told two different things about when the
clock starts.

## B3. Step-to-area mirroring

### B3.a — For each step page, the practice areas it names

From each step's "Which practice areas apply" section.

| # | Step | Areas named |
| --- | --- | --- |
| 1 | Decide If Independence Fits | Firm Economics; Service and Pricing Models; Risk and Insurance |
| 2 | Design the Firm | Service and Pricing Models; Advice and Planning Process; Firm Economics |
| 3 | Set Your Advice Approach | Advice and Planning Process; Compliance and Supervision; Records and Documentation |
| 4 | Form the Business | Firm Economics; Risk and Insurance; Records and Documentation |
| 5 | Choose Your Regulator | Compliance and Supervision; Records and Documentation; Firm Economics |
| 6 | Qualify as an Adviser | Compliance and Supervision; Records and Documentation; Firm Economics |
| 7 | Write the Disclosure Documents | Service and Pricing Models; Compliance and Supervision; Records and Documentation |
| 8 | Write the Policies | Compliance and Supervision; Records and Documentation; Risk and Insurance |
| 9 | File and Get Approved | Compliance and Supervision; Records and Documentation; Risk and Insurance |
| 10 | Set Up Custody and Technology | Technology and Client Experience; Compliance and Supervision; Records and Documentation |
| 11 | Leave and Transition Clients | Compliance and Supervision; Risk and Insurance; Records and Documentation; Client Education |
| 12 | Stay Registered and Compliant | Compliance and Supervision; Records and Documentation; Firm Economics; Risk and Insurance; Client Education |

### B3.b — For each area page, the steps its "Where this starts in the process" names

| Area | Steps named |
| --- | --- |
| Service and Pricing Models | 1 Decide If Independence Fits; 2 Design the Firm |
| Advice and Planning Process | 3 Set Your Advice Approach; 2 Design the Firm |
| Technology and Client Experience | 2 Design the Firm; 8 Write the Policies; 10 Set Up Custody and Technology |
| Client Education | 2 Design the Firm; 7 Write the Disclosure Documents |
| Marketing and Growth | 2 Design the Firm; 7 Write the Disclosure Documents; 11 Leave and Transition Clients |
| Compliance and Supervision | 8 Write the Policies; 12 Stay Registered and Compliant |
| Records and Documentation | 4 Form the Business; 8 Write the Policies |
| Firm Economics | 1 Decide If Independence Fits; 2 Design the Firm; 4 Form the Business |
| Risk and Insurance | 1 Decide If Independence Fits; 4 Form the Business; 8 Write the Policies |

### B3.c — The mirror, with every mismatch flagged

Read down for what a step names; read across for whether the area names it back.
`S→A` = the step links the area. `A→S` = the area's "Where this starts" names the step.

| Area | Steps that link to it (S→A) | Steps it names back (A→S) | Mismatch |
| --- | --- | --- | --- |
| Service and Pricing Models | 1, 2, 7 | 1, 2 | step 7 links in, is not named back — **expected** (step 7 formalizes the pricing decision rather than originating it) |
| Advice and Planning Process | 2, 3 | 2, 3 | **clean, both directions** |
| Technology and Client Experience | 10 | 2, 8, 10 | **FLAG — asymmetric.** The area names steps 2 and 8 as originating, and neither step lists Technology and Client Experience among its practice areas. Step 2 lists Service and Pricing, Advice and Planning, Firm Economics; step 8 lists Compliance, Records, Risk. |
| Client Education | 11, 12 | 2, 7 | **FLAG — disjoint.** No step that links this area is named by it, and no step it names links back. Four pages, zero overlap. |
| Marketing and Growth | *(none)* | 2, 7, 11 | **FLAG — orphaned.** No step page anywhere links to Marketing and Growth. It is the only area with no inbound step link, and the only area page whose three named originating steps all fail to link back. |
| Compliance and Supervision | 3, 5, 6, 7, 8, 9, 10, 11, 12 | 8, 12 | both named steps link back — **expected**; the other seven are downstream consumers |
| Records and Documentation | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 | 4, 8 | both named steps link back — **expected** |
| Firm Economics | 1, 2, 4, 5, 6, 12 | 1, 2, 4 | all three named steps link back — **expected** |
| Risk and Insurance | 1, 4, 8, 9, 11, 12 | 1, 4, 8 | all three named steps link back — **expected** |

**Three flagged mismatches, and what separates them from the "expected" rows.**

CLAUDE.md's area page convention 3 says the "Where this starts" section names the
*originating* steps, "not every step that links to this area," so a step linking in
without being named back is by design. The reverse is not covered: an area naming a step
as originating, while that step does not consider the area relevant enough to list. Six
areas have zero instances of that. Three have five between them:

- **Marketing and Growth ← steps 2, 7, 11** (three instances, and no inbound link at all)
- **Client Education ← steps 2, 7** (two instances)
- **Technology and Client Experience ← steps 2, 8** (two instances)

All five point at the same two or three steps. Step 2 (Design the Firm) is named as
originating by five of the nine areas and lists only three of them. Step 7 is named by two
areas and lists neither.

Counts for B3: **9 areas and 12 steps mirrored; 5 asymmetries flagged across 3 areas;
1 area (Marketing and Growth) with no inbound step link at all.**

## B4. Skeleton conformance

### B4.a — Step pages against the step-page template

All twelve step pages carry the eight H2 sections in exactly the template order, with
identical wording: **Why it matters → What actually happens → Questions to ask yourself →
Common mistakes → Which practice areas apply → Next step**, with the practitioner
`<Callout type="info">` between the practice-areas list and "Next step", and an H1
matching frontmatter `title` on all twelve. No page has a missing section, an extra
section, or a section out of order.

Two constraint breaches inside otherwise-conformant skeletons:

| Page | Constraint | Actual | Template |
| --- | --- | --- | --- |
| `process/qualify-as-an-adviser` | H3 substeps under "What actually happens" | **6** | three to five |
| `process/write-the-disclosure-documents` | H3 substeps under "What actually happens" | **6** | three to five |

Everything else measured is inside its range:

| Page | H3 substeps (3–5) | Questions (4–6) | Practice areas listed |
| --- | --- | --- | --- |
| decide-if-independence-fits | 4 | 5 | 3 |
| design-the-firm | 4 | 6 | 3 |
| set-your-advice-approach | 4 | 6 | 3 |
| form-the-business | 5 | 5 | 3 |
| choose-your-regulator | 4 | 5 | 3 |
| qualify-as-an-adviser | **6** | 5 | 3 |
| write-the-disclosure-documents | **6** | 4 | 3 |
| write-the-policies | 5 | 5 | 3 |
| file-and-get-approved | 5 | 5 | 3 |
| set-up-custody-and-technology | 4 | 6 | 3 |
| leave-and-transition-clients | 4 | 6 | 4 |
| stay-registered-and-compliant | 4 | 5 | 5 |

Template item 5's requirement that "the final H3 states what the reader leaves the step
holding" is met on all twelve, though in two different formulations — see B11.

Template item 10 — the last step's "Next step" links `/domains` instead of a step — is met:
`stay-registered-and-compliant` ends "There is no next step. From here, continue into the
Practice Areas, which govern the firm's work for as long as it operates."

**Paragraph length (step pages, no paragraph longer than four sentences) — 1 breach:**

| Page | Paragraph | Sentences |
| --- | --- | --- |
| `process/file-and-get-approved` | the opening paragraph, "Every step before this one produced something to file…" | **5** |

**SEC-path callout rule — conformant.** Every `<Callout type="warning">` in `content/`
opens with the exact words "If you are on the SEC path:" — 19 of 19. Every page carries
exactly one practitioner `<Callout type="info">`. No page exceeds one non-SEC-path
callout. Distribution: two SEC-path callouts each on `choose-your-regulator`,
`file-and-get-approved`, `stay-registered-and-compliant`, `write-the-policies`; one each
on `qualify-as-an-adviser`, `set-up-custody-and-technology`,
`write-the-disclosure-documents`, and one each on eight of the nine area pages; none on
`decide-if-independence-fits`, `design-the-firm`, `set-your-advice-approach`,
`form-the-business`, `leave-and-transition-clients`, `domains/service-and-pricing-models`.

### B4.b — Area pages against the area-page template

All nine area pages carry the five H2 sections in exactly the template order, with
identical wording: **Where this starts in the process → Key ideas → Common misconceptions
→ For practitioners → Go deeper**, opening paragraph with no heading above it, H1 matching
frontmatter `title`, `For practitioners` as a Callout, and no bottom-of-page related-steps
list (correctly, per area convention 3). No page has a missing, extra, or misordered
section.

| Area | Key-idea H3s (4–7) | "Where this starts" links (≤3) | Misconceptions | Go deeper (2–6) |
| --- | --- | --- | --- | --- |
| service-and-pricing-models | 5 | 2 | 4 | 3 |
| advice-and-planning-process | 6 | 2 | 5 | 3 |
| technology-and-client-experience | 6 | 3 | 4 | 2 |
| client-education | 5 | 2 | 3 | 3 |
| marketing-and-growth | 6 | 3 | 5 | 5 |
| compliance-and-supervision | 6 | 2 | 4 | 3 |
| records-and-documentation | 6 | 2 | 4 | 3 |
| firm-economics | 6 | 3 | 5 | 3 |
| risk-and-insurance | 6 | 3 | 4 | 4 |

All nine inside every stated range. **No skeleton breaches on the area pages.**

One open question rather than a defect: CLAUDE.md documents the SEC-path callout as a
subsection of "## Step page template," but eight of the nine area pages use one, and the
writing-style cap exempts SEC-path callouts generally. See item 5 of the PR report.

### B4.c — Landing and other pages against the general template

CLAUDE.md: "one H1, a **two-sentence summary** under it, then H2 sections. End with a
'Related' list linking to 2–4 other pages."

| Page | H1 | Opening summary | Related count | Conformant |
| --- | --- | --- | --- | --- |
| `introduction` | 1 | 2 sentences | 4 | yes |
| `process/index` | 1 | **3 sentences** | 3 | summary over length |
| `domains/index` | 1 | **5 sentences, and a second paragraph follows before the first H2** | 3 | summary over length |
| `tools/index` | 1 | **1 sentence** | 3 | summary under length |
| `tools/this-years-figures` | 1 | 2 sentences | 3 | yes |
| `glossary` | 1 | stub, no summary | **0** | stub |
| `about` | 1 | stub, no summary | **0** | stub |

Three of the five written landing pages miss the two-sentence summary rule, in both
directions. Recorded rather than repaired; whether a two-sentence floor-and-ceiling is
what the rule intends is itself a question for phase 2.

### B4.d — The figures page against its own row conventions

CLAUDE.md: "Sections follow the grouping and canonical order of FIGURES-INVENTORY.md:
the step sections first, in step order, then the practice-area sections in the site's
order."

Order is correct: steps 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, then the nine areas in the
canonical order from CLAUDE.md's area list. 19 id-bearing sections, 49 data rows.

**One inconsistency in how empty sections are handled.** `FIGURES-INVENTORY.md` names five
sections with no figures: Step 2 (Design the Firm), Step 3 (Set Your Advice Approach), and
the areas Service and Pricing Models, Advice and Planning Process, and Client Education.
The figures page gives the three **areas** a standing section with the sentence "This area
refers to no figure set by law, regulation, or an agency, so it holds no rows and no
cross-references. The section stands so the absence reads as a finding rather than an
omission." The two **steps** get no section at all — they are silently skipped between
Step 1 and Step 4. The same absence is treated as a finding in one half of the page and as
an omission in the other.

Related, not a defect: the page carries 49 rows against
`FIGURES-INVENTORY.md`'s stated "41 distinct figures." The difference is
SEC-path companion rows added during the figures build (for example "…on the SEC path"
variants). `FIGURES-INVENTORY.md`'s own counts line has not been updated to match.

Two rows carry `NEEDS-VALUE`, both correctly flagged by the page's own preamble:
"Filing system fee" (`#file-and-get-approved`) and "Yearly registration renewal window"
(`#stay-registered-and-compliant`).

## B5. Printed regulated figures — **1**

Full sweep already reported at B2.b. Restated here as the count this check asks for:

| # | File | Text | Class |
| --- | --- | --- | --- |
| 1 | `content/process/write-the-policies/index.mdx` line 80 | "calls for reviewing it at least once a year" | a review frequency set by a NASAA model rule, with an existing figures-page row, printed with no deferral and no link |

**Flagged, classification not settled — 2:** the "In May 2026 … four model rules"
sentence and the bare `17 CFR 275.206(4)-1` citation, both on
`domains/marketing-and-growth` (details at B2.b).

**Deliberately not listed:** every round hypothetical in a worked example. The recurring
adviser's "about 80 clients," "roughly $300,000 in annual revenue," and "a six-month gap";
"within about a decade of retirement"; "for three years"; "for two years"; "a fifth of its
revenue." CLAUDE.md encourages these.

## B6. Vendor rule — **0 violations**

No custodian, compliance-software, E&O insurer, or consultant name appears anywhere in
`content/` — not in body text, headings, frontmatter `title` or `description`, slugs,
folder names, or link text. Checked by targeted scan across the categories the rule names
and by reading all 26 written pages.

Every commercial category is described generically, and the pages are consistent about it:

- custodian → "a qualified custodian: a bank, a registered broker-dealer, or another
  institution that meets the regulatory definition"
- software → described as jobs, not products, throughout
  `domains/technology-and-client-experience` ("something has to calculate fees and get
  them collected")
- insurer → "errors and omissions coverage," "a surety," "an insurer licensed in your
  state"; the only named body is NAIC, a regulators' association
- consultant → "an outside compliance professional," "your own attorney or tax
  professional," "counsel"

Named parties across all 26 pages are regulators, statutes, agencies, and uniform forms
only: SEC, FINRA, NASAA, IRS, NAIC, IARD, Form ADV, Form U4, Form U5, Form CRS — all
permitted by CLAUDE.md hard rule 2. `/tools/this-years-figures`, the one page where vendors
could be named, names none either.

No personal name, employer, or credential appears in `content/` (hard rule 7).

## B7. Disclaimer placement — **0 deviations**

The disclaimer text appears verbatim, in a `<Callout type="info">`, on exactly five pages:

| Page | Carries it | Rule |
| --- | --- | --- |
| `content/introduction/index.mdx` | yes | required — section landing |
| `content/process/index.mdx` | yes | required — section landing |
| `content/domains/index.mdx` | yes | required — section landing |
| `content/tools/index.mdx` | yes | required — section landing |
| `content/tools/this-years-figures/index.mdx` | yes | required — the figures page |
| all 12 step pages | no | correct — never repeated on step pages |
| all 9 area pages | no | correct — never repeated on area pages |
| `content/glossary/index.mdx` | no | correct |
| `content/about/index.mdx` | no | correct |

The text matches CLAUDE.md's verbatim block on all five, with no variants, no truncation,
and no paraphrase. The `glossary` and `about` sections are top-level sidebar sections but
are not among the four CLAUDE.md names, and correctly carry no disclaimer.

## B8. Word count per page, as measured

Measured with `pnpm wordcount`, which is the tool CLAUDE.md specifies. Nothing trimmed.

**Step pages — hard range 900–1,300. Two pages over.**

| Step page | Words | Range | Status |
| --- | --- | --- | --- |
| design-the-firm | 954 | 900–1,300 | in range |
| set-your-advice-approach | 1,103 | 900–1,300 | in range |
| decide-if-independence-fits | 1,201 | 900–1,300 | in range |
| set-up-custody-and-technology | 1,229 | 900–1,300 | in range |
| write-the-policies | 1,261 | 900–1,300 | in range |
| leave-and-transition-clients | 1,274 | 900–1,300 | in range |
| qualify-as-an-adviser | 1,287 | 900–1,300 | in range |
| form-the-business | 1,292 | 900–1,300 | in range |
| write-the-disclosure-documents | 1,297 | 900–1,300 | in range |
| choose-your-regulator | 1,300 | 900–1,300 | exactly at the ceiling |
| **stay-registered-and-compliant** | **1,325** | 900–1,300 | **over by 25** |
| **file-and-get-approved** | **1,340** | 900–1,300 | **over by 40** |

Both overruns are the ones FOLLOWUPS item 15 left open. One number has moved since that
entry was written: item 15 records `file-and-get-approved` at **1,316** after the
deferral repairs; it now measures **1,340**. The 24-word increase came in commit
`0a1dcb6`, "Name the two section 203(c) deadlines in step 9's SEC-path callout," which
landed after item 15 was recorded. FOLLOWUPS has not been updated. Every other figure in
item 15's table still matches exactly.

**Area pages — soft ceiling 1,300, floor 700. Three pages over the ceiling.**

| Area page | Words | Over the 1,300 ceiling by |
| --- | --- | --- |
| client-education | 903 | — |
| service-and-pricing-models | 946 | — |
| records-and-documentation | 1,134 | — |
| compliance-and-supervision | 1,150 | — |
| technology-and-client-experience | 1,223 | — |
| advice-and-planning-process | 1,291 | — |
| **risk-and-insurance** | **1,307** | 7 |
| **firm-economics** | **1,312** | 12 |
| **marketing-and-growth** | **1,823** | **523** |

The soft ceiling requires the build report to name a cause for any area page over it, and
CLAUDE.md admits only two causes: density (valid) or scope leakage (not valid). None of
the three has a cause stated in this file, because stating one is a judgment this phase is
not making. FOLLOWUPS item 13 already holds the open judgment for `marketing-and-growth`
at 1,823, and FOLLOWUPS item 15 already records that `risk-and-insurance` and
`firm-economics` went over for a **third** cause the rule has no slot for — a required
figure deferral added to a page that was already at the line.

**Other pages — no range applies.**

| Page | Words |
| --- | --- |
| `about` (stub) | 5 |
| `glossary` (stub) | 5 |
| `tools/index` | 122 |
| `domains/index` | 415 |
| `introduction` | 479 |
| `tools/this-years-figures` | 501 |
| `process/index` | 544 |

`tools/this-years-figures` is a tools page but not a worksheet page, so the 700–1,000
worksheet range does not apply to it. No worksheet or checklist page exists yet.

## B9. Every external link in `content/`

97 external link occurrences, 49 distinct URLs, across 17 pages. No fetching was done and
no `[VERIFY]` marks are assigned — verification belongs to the source-currency sweep
(FOLLOWUPS items 3, 5, 8, 11, 14), not to this inventory.

Domains in use: `nasaa.org` (46 occurrences), `ecfr.gov` (19), `sec.gov` (9),
`uscode.house.gov` (9), `irs.gov` (4), `iard.com` (3), `finra.org` (3),
`investor.gov` (2), `federalregister.gov` (1), `content.naic.org` (1). All ten are on
CLAUDE.md's Sourcing list or are the publisher of a source on it. **Nothing commercial is
linked anywhere.**

Listed by page, as link text — URL:

**`content/domains/advice-and-planning-process/index.mdx`**  
- NASAA: Unethical Business Practices of Investment Advisers, Investment Adviser Representatives, and Federal Covered Advisers, Model Rule 102(a)(4)-1 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Unethical-Business-Practices-of-Investment-Advisers-Model-Rule_102a_4-1_5-4-2026.pdf
- SEC: Commission Interpretation Regarding Standard of Conduct for Investment Advisers — https://www.sec.gov/files/rules/interp/2019/ia-5248.pdf
- SEC: Staff Bulletin — Standards of Conduct for Broker-Dealers and Investment Advisers, Care Obligations — https://www.sec.gov/about/divisions-offices/division-trading-markets/broker-dealers/staff-bulletin-standards-conduct-broker-dealers-investment-advisers-care-obligations

**`content/domains/client-education/index.mdx`**  
- SEC: Form ADV Part 2 General Instructions — https://www.sec.gov/about/forms/formadv-part2.pdf
- Investor.gov: Investor Bulletin — Form ADV, Investment Adviser Brochure and Brochure Supplement — https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-71
- NASAA: Investor Education — https://www.nasaa.org/investor-education/

**`content/domains/compliance-and-supervision/index.mdx`**  
- eCFR: 17 CFR 275.206(4)-7 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-7
- SEC: Compliance Programs of Investment Companies and Investment Advisers (Release No. IA-2204, Dec. 2003) — https://www.federalregister.gov/documents/2003/12/24/03-31544/compliance-programs-of-investment-companies-and-investment-advisers
- NASAA: Investment Adviser Coordinated Examinations and Best Practices — https://www.nasaa.org/industry-resources/investment-advisers/compliance-findings/

**`content/domains/firm-economics/index.mdx`**  
- IARD: Fees and Accounting — https://iard.com/fees-accounting
- IRS: Self-Employed Individuals Tax Center — https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center
- IRS: Estimated Taxes — https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes

**`content/domains/marketing-and-growth/index.mdx`**  
- NASAA: Unethical Business Practices of Investment Advisers, Investment Adviser Representatives, and Federal Covered Advisers, Model Rule 102(a)(4)-1 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Unethical-Business-Practices-of-Investment-Advisers-Model-Rule_102a_4-1_5-4-2026.pdf
- NASAA: Prohibited Conduct of Investment Advisers, Investment Adviser Representatives and Federal Covered Investment Advisers, Model Rule USA 2002 502(b) — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Prohibited-Conduct-of-Investment-Advisers-Model-Rule_502b_5-4-2026.pdf
- NASAA: Recordkeeping Requirements for Investment Advisers, Model Rule 203(a)-2 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Recordkeeping-Requirements-for-Investment-Advisers-Model-Rule_203a-2_5-4-2026.pdf
- NASAA: Recordkeeping Requirements for Investment Advisers, Model Rule 411(c)-1 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Recordkeeping-Requirements-for-Investment-Advisers-Model-Rule_411c-1_5-4-2026.pdf
- eCFR: 17 CFR 275.206(4)-1 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1

**`content/domains/records-and-documentation/index.mdx`**  
- eCFR: 17 CFR 275.204-2 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204-2
- NASAA: Recordkeeping Requirements for Investment Advisers, Model Rule 203(a)-2 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Recordkeeping-Requirements-for-Investment-Advisers-Model-Rule_203a-2_5-4-2026.pdf
- IRS: Recordkeeping — https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping

**`content/domains/risk-and-insurance/index.mdx`**  
- NASAA: Minimum Financial Requirements for Investment Advisers, Model Rule 202(d)-1 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Minimum-Financial-Requirements.pdf
- NASAA: Bonding Requirements for Investment Advisers, Model Rule 202(e)-1 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Bonding.pdf
- U.S. Code: Investment Advisers Act section 222 — https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title15-section80b-18a&num=0&edition=prelim
- NAIC: Insurance Departments — https://content.naic.org/state-insurance-departments

**`content/domains/service-and-pricing-models/index.mdx`**  
- Investor.gov: Understanding Fees — https://www.investor.gov/introduction-investing/getting-started/understanding-fees
- SEC: Form ADV Part 2 Instructions — https://www.sec.gov/about/forms/formadv-part2.pdf
- SEC: Commission Interpretation Regarding Standard of Conduct for Investment Advisers — https://www.sec.gov/files/rules/interp/2019/ia-5248.pdf

**`content/domains/technology-and-client-experience/index.mdx`**  
- NASAA: Model Rule for Investment Adviser Written Policies and Procedures — https://www.nasaa.org/wp-content/uploads/2020/07/NASAA-IA-PandP-Model-Rule-and-Sample-Compliance-Grid.pdf
- eCFR: 17 CFR Part 248 — https://www.ecfr.gov/current/title-17/chapter-II/part-248

**`content/process/choose-your-regulator/index.mdx`**  
- Form ADV General Instructions — https://www.sec.gov/about/forms/formadv-instructions.pdf
- section 203A of the Investment Advisers Act — https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title15-section80b-3a&num=0&edition=prelim
- SEC Rule 203A-2 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.203A-2
- NASAA — https://www.nasaa.org/industry-resources/investment-advisers/

**`content/process/file-and-get-approved/index.mdx`**  
- section 203(c) of the Investment Advisers Act — https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title15-section80b-3&num=0&edition=prelim

**`content/process/form-the-business/index.mdx`**  
- IRS — https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number
- NASAA — https://www.nasaa.org/industry-resources/investment-advisers/

**`content/process/qualify-as-an-adviser/index.mdx`**  
- NASAA — https://www.nasaa.org/exams/
- uniform form for individuals — https://www.finra.org/registration-exams-ce/broker-dealers/registration-forms/form-u4
- section 203A of the Investment Advisers Act — https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title15-section80b-3a&num=0&edition=prelim
- model rule NASAA adopted — https://www.nasaa.org/industry-resources/investment-advisers/investment-adviser-representative-continuing-education/
- NASAA — https://www.nasaa.org/industry-resources/investment-advisers/

**`content/process/set-up-custody-and-technology/index.mdx`**  
- NASAA's model custody rule — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Custody.pdf
- the federal custody rule — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-2

**`content/process/write-the-disclosure-documents/index.mdx`**  
- Form ADV — https://www.sec.gov/about/forms/formadv-part2.pdf
- NASAA — https://www.nasaa.org/industry-resources/investment-advisers/

**`content/process/write-the-policies/index.mdx`**  
- Advisers Act Rule 204A-1 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204A-1
- NASAA's model rule for written policies and procedures — https://www.nasaa.org/wp-content/uploads/2020/07/NASAA-IA-PandP-Model-Rule-and-Sample-Compliance-Grid.pdf

**`content/tools/this-years-figures/index.mdx`**  
- Advisers Act section 203A — https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title15-section80b-3a&num=0&edition=prelim
- Advisers Act section 203A — https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title15-section80b-3a&num=0&edition=prelim
- Advisers Act section 203A — https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title15-section80b-3a&num=0&edition=prelim
- SEC Rule 203A-1 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.203A-1
- SEC Rule 203A-2 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.203A-2
- NASAA Model Rule: Examination Requirements for Investment Adviser Representatives, amended December 18, 2024 — https://www.nasaa.org/wp-content/uploads/2024/12/NASAA-Model-Rule-Examination-Requirements-for-Investment-Adviser-Representatives-12-18-2024.pdf
- NASAA Model Rule: Examination Requirements for Investment Adviser Representatives, amended December 18, 2024 — https://www.nasaa.org/wp-content/uploads/2024/12/NASAA-Model-Rule-Examination-Requirements-for-Investment-Adviser-Representatives-12-18-2024.pdf
- NASAA Model Rule: Examination Requirements for Investment Adviser Representatives, amended December 18, 2024 — https://www.nasaa.org/wp-content/uploads/2024/12/NASAA-Model-Rule-Examination-Requirements-for-Investment-Adviser-Representatives-12-18-2024.pdf
- NASAA Model Rule on Investment Adviser Representative Continuing Education, adopted November 24, 2020 — https://www.nasaa.org/wp-content/uploads/2020/10/NASAA-IAR-CE-Model-Rule.pdf
- SEC General Instructions to Form ADV Part 3 — https://www.sec.gov/about/forms/formadv-part3.pdf
- eCFR: 17 CFR 275.204-5 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204-5
- NASAA Brochure Rule Requirements for Investment Advisers, Model Rule 203(b)-1, adopted September 3, 1987, amended September 11, 2011 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Brochure-Rule.pdf
- NASAA Brochure Rule Requirements for Investment Advisers, Model Rule 203(b)-1, adopted September 3, 1987, amended September 11, 2011 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Brochure-Rule.pdf
- NASAA Brochure Rule Requirements for Investment Advisers, Model Rule 203(b)-1, adopted September 3, 1987, amended September 11, 2011 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Brochure-Rule.pdf
- eCFR: 17 CFR 275.204-3 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204-3
- SEC Form ADV General Instructions — https://www.sec.gov/about/forms/formadv-instructions.pdf
- Model Rule 203(a)-2 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Recordkeeping-Requirements-for-Investment-Advisers-Model-Rule_203a-2_5-4-2026.pdf
- Model Rule 411(c)-1 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Recordkeeping-Requirements-for-Investment-Advisers-Model-Rule_411c-1_5-4-2026.pdf
- eCFR: 17 CFR 275.204-2 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204-2
- NASAA Model Rule: Recordkeeping Requirements for Investment Advisers, Model Rule 203(a)-2, amended May 4, 2026 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Recordkeeping-Requirements-for-Investment-Advisers-Model-Rule_203a-2_5-4-2026.pdf
- eCFR: 17 CFR 275.204-2 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.204-2
- IARD: Firm System Processing Fees — https://iard.com/fee_schedule
- Advisers Act section 203(c) — https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title15-section80b-3&num=0&edition=prelim
- Advisers Act section 203(c) — https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title15-section80b-3&num=0&edition=prelim
- NASAA Model Rule: Custody Requirements for Investment Advisers — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Custody.pdf
- NASAA Model Rule: Custody Requirements for Investment Advisers — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Custody.pdf
- NASAA Model Rule: Custody Requirements for Investment Advisers — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Custody.pdf
- FINRA: Form U5 — https://www.finra.org/registration-exams-ce/broker-dealers/registration-forms/form-u5
- FINRA Rule 11870: Customer Account Transfer Contracts — https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870
- IARD: Renewal Program — https://iard.com/renewal-program
- eCFR: 17 CFR 248.30 — https://www.ecfr.gov/current/title-17/chapter-II/part-248/subpart-A/subject-group-ECFR83262a0bce5ffaa/section-248.30
- Unethical Business Practices of Investment Advisers, Model Rule 102(a)(4)-1 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Unethical-Business-Practices-of-Investment-Advisers-Model-Rule_102a_4-1_5-4-2026.pdf
- Prohibited Conduct of Investment Advisers, Model Rule USA 2002 502(b) — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Prohibited-Conduct-of-Investment-Advisers-Model-Rule_502b_5-4-2026.pdf
- eCFR: 17 CFR 275.206(4)-1 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1
- Model Rule 102(a)(4)-1 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Unethical-Business-Practices-of-Investment-Advisers-Model-Rule_102a_4-1_5-4-2026.pdf
- Model Rule USA 2002 502(b) — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Prohibited-Conduct-of-Investment-Advisers-Model-Rule_502b_5-4-2026.pdf
- eCFR: 17 CFR 275.206(4)-1 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1
- eCFR: 17 CFR 275.206(4)-1 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1
- Model Rule 102(a)(4)-1 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Unethical-Business-Practices-of-Investment-Advisers-Model-Rule_102a_4-1_5-4-2026.pdf
- Model Rule USA 2002 502(b) — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Prohibited-Conduct-of-Investment-Advisers-Model-Rule_502b_5-4-2026.pdf
- eCFR: 17 CFR 275.206(4)-1 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1
- Model Rule 102(a)(4)-1 — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Unethical-Business-Practices-of-Investment-Advisers-Model-Rule_102a_4-1_5-4-2026.pdf
- Model Rule USA 2002 502(b) — https://www.nasaa.org/wp-content/uploads/2026/05/NASAA-Prohibited-Conduct-of-Investment-Advisers-Model-Rule_502b_5-4-2026.pdf
- NASAA Model Rule for Investment Adviser Written Policies and Procedures — https://www.nasaa.org/wp-content/uploads/2020/07/NASAA-IA-PandP-Model-Rule-and-Sample-Compliance-Grid.pdf
- eCFR: 17 CFR 275.206(4)-7 — https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-7
- NASAA Minimum Financial Requirements for Investment Advisers, Model Rule 202(d)-1 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Minimum-Financial-Requirements.pdf
- NASAA Bonding Requirements for Investment Advisers, Model Rule 202(e)-1 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Bonding.pdf
- NASAA Model Rule 202(d)-1 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Minimum-Financial-Requirements.pdf
- NASAA Model Rule 202(e)-1 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Bonding.pdf
- NASAA Minimum Financial Requirements for Investment Advisers, Model Rule 202(d)-1 — https://www.nasaa.org/wp-content/uploads/2011/07/IA-Model-Rule-Minimum-Financial-Requirements.pdf


## B10. FOLLOWUPS.md — 17 items, each triaged

`FOLLOWUPS.md` holds 17 numbered items. Status below is against `main` at `4629070`, as
verified in this pass — not as the entry itself claims.

| # | Item | Status against `main` |
| --- | --- | --- |
| 1 | Convert "Which practice areas apply" bullets from bold to links | **Satisfied.** All twelve step pages list linked `/domains/` routes. Entry already marked DONE. |
| 2 | Performance-based fees / Rule 205-3 qualified client thresholds | **Still open.** No qualified-client row exists on the figures page, and no page covers performance-based fees. The entry's own blocking question — row first, or page first — is still unanswered. Its "belongs to: build order item 4 (the figures page)" is now stale: item 4 shipped without deciding it. |
| 3 | Repo-wide source-currency sweep | **Still open**, and is the largest item this pass inherits. No citation anywhere in `content/` has been re-checked for supersession. B9 lists all 97 links; none carries a currency mark. |
| 4 | NASAA hub-page citations audited in PR #19 | **No longer actionable — reference only**, as the entry itself states. The four hub-page citations it cleared are all still in place and all still paired with locator-style language: `choose-your-regulator`, `form-the-business`, `qualify-as-an-adviser` (×2 — the exams hub and the IAR-CE hub), `write-the-disclosure-documents`. Do not re-open. |
| 5 | Form ADV Part 2 General Instructions PDF past its OMB expiration | **Still open.** The same URL, `sec.gov/about/forms/formadv-part2.pdf`, is still cited on all three pages the entry names — `domains/client-education`, `domains/service-and-pricing-models`, `process/write-the-disclosure-documents` — with no note next to any of them. |
| 6 | Client Education's fifth Key idea was added to clear a word floor that no longer exists | **Still open, and now decidable.** "Format shapes whether an explanation actually lands" is still the fifth H3 on `domains/client-education`. The page measures 903 words; cutting the section would take it to roughly 750, still above the 700 floor, so the floor no longer forces the call either way. |
| 7 | NASAA amended four model rules on May 4, 2026 — pre-amendment PDFs still hosted | **Half satisfied, as the entry says.** Re-verified this pass: every NASAA citation to those four rules in `content/` uses a `/uploads/2026/05/` path — five on `marketing-and-growth`, one on `advice-and-planning-process`, one on `records-and-documentation`, and ten on the figures page. No pre-2026 path to any of the four appears anywhere. The sweep half rides on item 3. |
| 8 | "Go deeper" links on Technology and CX and Risk and Insurance never fetched | **Still open.** Six links, still unfetched. |
| 9 | Superseded NASAA model rules still hosted and still resolving | **Satisfied as to the specific trap, still open as a sweep instruction.** Verified this pass: no citation in `content/` points at any of the three superseded PDFs the entry names. Both places needing the consolidated 2020 policies-and-procedures rule cite it — `process/write-the-policies` and `domains/technology-and-client-experience`. The general lesson ("the date in a NASAA upload path is the upload date, not the amendment date") stays live for item 3. |
| 10 | `content/domains/_meta.js` ordered by build order, not canonical order | **Satisfied.** Re-verified: the file now lists the nine areas in CLAUDE.md's canonical order, matching the `/domains` index page. Entry already marked DONE. |
| 11 | "Go deeper" links on Advice and Planning and Firm Economics never fetched | **Still open.** Four of six remain unconfirmed: SEC IA-5248, IARD Fees and Accounting, and the two IRS pages. All four are still cited, unchanged. |
| 12 | Step 1's practitioner Callout ends mid-clause | **Satisfied.** Re-verified: the Callout on `decide-if-independence-fits` now ends "…since later steps will ask you to revisit each of them." Entry already marked DONE. |
| 13 | The word-ceiling test, and Marketing and Growth at 1,823 | **Still open, and squarely this pass's to decide.** The entry defers three questions to the consistency pass: (a) whether to cut `marketing-and-growth`, (b) whether the 1,300 area ceiling survives, (c) ratchet versus depth with nine finished pages. B8 supplies the nine measurements; none of the three questions is answered here, because phase 1 is inventory. The entry's separate ask — re-read the closing sections of `advice-and-planning-process` and `firm-economics` for a clipped ending — is also still open. |
| 14 | "Go deeper" links on Marketing and Growth never fetched | **Still open.** Three of five remain unconfirmed: NASAA 502(b) 5-4-2026, NASAA 411(c)-1 5-4-2026, and the eCFR codification of 17 CFR 275.206(4)-1. All three are still cited, unchanged. Combined with items 8 and 11, **thirteen links across six pages** are unfetched. |
| 15 | PR #25 findings 6(a)–6(e): regulated figures described without deferring | **Repairs satisfied; the loose end is still open and one number in it is now stale.** All five repairs verified present. The "left open" half — two step pages over the hard range — is still open, and its table records `file-and-get-approved` at 1,316 where the page now measures **1,340** (see B8). Note also that its finding 6(e) repaired the compliance-review frequency on `domains/compliance-and-supervision` but not the identical sentence on `process/write-the-policies`, which is B5's one confirmed defect. |
| 16 | Whether the clearing corporation republished the account transfer windows | **Still open, and correctly assigned to the yearly figures update rather than here.** Recorded in this pass only because the same row is involved in B2.c, which is a different and separately actionable defect. |
| 17 | The figures page preamble names three Source forms; CLAUDE.md permits four | **Still open.** Re-verified: the preamble on `tools/this-years-figures` still names three forms, and CLAUDE.md's row conventions still permit four. All varies-by-state rows still take one of the three named forms, so nothing on the page is misdescribed today. The decision the entry asks for — which of the two documents moves — has not been made. |

**Counts: 17 items.**

- **Fully satisfied on `main` — 3:** items 1, 10, 12.
- **Reference only, no action ever needed — 1:** item 4.
- **Partly satisfied, open on a remaining half — 3:** items 7, 9, 15.
- **Still fully open — 10:** items 2, 3, 5, 6, 8, 11, 13, 14, 16, 17.
- **No longer applicable — 0.** Nothing in the file has been overtaken by events.

Four of the twelve open items (3, 8, 11, 14) are the same source-currency backlog and
should clear in one pass. Three (6, 13, 15) are judgment calls this consistency pass was
explicitly asked to make, and phase 1 has deliberately not made them.

## B11. Terminology drift

### B11.1 — Capitalization of "Practice Areas"

Consistent, and the pattern is principled rather than accidental: **capitalized** when it
names the site's section, **lowercase** when it is ordinary prose about subject matter.

| Form | Occurrences | Where |
| --- | --- | --- |
| "Practice Areas" (section name, usually a link) | 11 | `domains/index` ×2, `introduction` ×3, `process/index` ×2, `tools/index`, `tools/this-years-figures`, `process/stay-registered-and-compliant` ×2 |
| "Practice Area" (singular, section sense) | 2 | `domains/index` only |
| "practice areas" (lowercase) | 13 | the H2 "Which practice areas apply" on all twelve step pages, plus one prose use on `process/stay-registered-and-compliant` |

**One inconsistency, on a single page.** `process/stay-registered-and-compliant` uses both
forms in prose about the same thing: line 10 "the standing subject areas in **[Practice
Areas](/domains)**", line 46 "carried forward through the standing work of the **practice
areas**", line 78 "continue into the **[Practice Areas](/domains)**". The line-46 use is the
only lowercase prose use of the section name anywhere in `content/` — every other lowercase
occurrence is the template-mandated H2 heading.

### B11.2 — "The Independent Path"

Fully consistent: **13 occurrences, all title case, all spelled identically.** No
lowercase, no truncation, no "the independent path." Used as link text on `introduction`
(×3), `tools/index` (×2), `process/index`, `tools/this-years-figures`, `domains/index`,
and as an H1 and frontmatter title on `process/index`. `content/_meta.js` labels the
section identically. No drift.

### B11.3 — "adviser" versus "advisor"

Fully consistent: **the "advisor" spelling appears zero times in `content/`.** 264
occurrences of the "adviser" spelling and its inflections (149 "adviser", 58 "Advisers",
35 "advisers", 22 "Adviser"). No drift.

### B11.4 — The recurring hypothetical adviser — **the largest drift found**

`process/decide-if-independence-fits` establishes the convention in its opening paragraph:
"To make this concrete, **the rest of this guide follows one recurring example: the
adviser.** … Later steps follow the adviser through each stage of building an independent
firm."

The guide does not do that. The recurring example is carried through steps 1–7 and then
**disappears entirely from steps 8 through 12.**

| Step | "the adviser" mentions |
| --- | --- |
| 1 Decide If Independence Fits | 6 |
| 2 Design the Firm | 1 |
| 3 Set Your Advice Approach | 3 |
| 4 Form the Business | 3 |
| 5 Choose Your Regulator | 4 |
| 6 Qualify as an Adviser | 6 |
| 7 Write the Disclosure Documents | 3 |
| **8 Write the Policies** | **0** |
| **9 File and Get Approved** | **0** |
| **10 Set Up Custody and Technology** | **0** |
| **11 Leave and Transition Clients** | **0** |
| **12 Stay Registered and Compliant** | **0** |

Steps 1 through 7 also share a house formulation for reintroducing the example — "For
illustration, the adviser — introduced in earlier steps, solo, no employees, serving
working professionals within about a decade of retirement — …" — which steps 8 to 12 have
no counterpart for, because they do not reintroduce it at all.

On the area pages the convention is present but thinner, and takes a different shape.
CLAUDE.md area convention 4 asks for present-tense standing situations ("the adviser
reprices annually and finds…"). Eight of nine area pages use it; one does not.

| Area | "the adviser" mentions |
| --- | --- |
| marketing-and-growth | 5 |
| advice-and-planning-process | 3 |
| client-education | 3 |
| risk-and-insurance | 3 |
| compliance-and-supervision | 1 |
| firm-economics | 1 |
| service-and-pricing-models | 1 |
| technology-and-client-experience | 1 |
| **records-and-documentation** | **0** |

A second, subtler drift inside the area pages: some uses are the recurring hypothetical
("**The adviser** reprices annually, comparing the revenue and hours each service tier
actually consumed…"), and others are a generic construction that reads as a different
person each time ("**The adviser who** assumes a client's risk tolerance is a permanent
trait…", "**The adviser who** has published weekly for two years…", "**The adviser who**
treats education as an onboarding task…"). The definite article is doing two different
jobs on the same page.

### B11.5 — Section heading wording that should be identical

**All identical, both templates.** No drift.

- Twelve step pages, six H2s each: "Why it matters," "What actually happens," "Questions
  to ask yourself," "Common mistakes," "Which practice areas apply," "Next step" — byte
  for byte the same on all twelve.
- Nine area pages, five H2s each: "Where this starts in the process," "Key ideas,"
  "Common misconceptions," "For practitioners," "Go deeper" — byte for byte the same on
  all nine.
- All five disclaimer-bearing pages use the identical Callout text.
- The `Callout` import line is identical on all 26 pages that use one:
  `import { Callout } from 'nextra/components'`.

### B11.6 — Sentence-level formulas that vary where they read as fixed

Three formulas are near-identical across many pages, which makes the variants read as
drift rather than as choice.

**The "Where this starts in the process" opening sentence.** All nine begin "If you are
working through the guide in order, this area picks up…" and then diverge on the noun:

| Ending | Areas |
| --- | --- |
| "…two earlier **decisions**." | service-and-pricing-models, advice-and-planning-process, client-education |
| "…three earlier **pieces of work**." | technology-and-client-experience, marketing-and-growth, firm-economics, risk-and-insurance |
| "…two earlier **artifacts**." | records-and-documentation |
| "…where two **steps leave off**." | compliance-and-supervision |

Four formulations for one sentence. Note also that the noun tracks the count ("two
decisions" / "three pieces of work"), so the phrasing is not freely interchangeable.

**The closing sentence of the final H3, stating what the reader leaves holding.**

| Formulation | Steps |
| --- | --- |
| "**You leave this step holding** …" | 5, 6, 7 |
| "**By the end of this step you hold** …" | 8, 9, 10 |
| "**By the end of this step, you hold** …" (comma) | 11 |
| "Write down where you land" / "Write down what you now hold" — no closing formula sentence | 1, 2, 3, 4 |
| "**By this point there is no further numbered work** …" | 12 (deliberate — the last step has nothing to hand on) |

**The NASAA sign-off in the practitioner Callout.** Four step pages close the Callout with
the identical sentence "[NASAA](https://www.nasaa.org/industry-resources/investment-advisers/)
collects the state regulators' adviser resources in one place." — `form-the-business`,
`choose-your-regulator`, `qualify-as-an-adviser`, `write-the-disclosure-documents`. The
other eight step pages do not, including `write-the-policies` and
`set-up-custody-and-technology`, which cite NASAA model rules in the same Callout or in
the body. Whether the sign-off is a house convention that four pages follow or a habit
four consecutive builds picked up is not resolvable from the pages themselves.

### B11.7 — Cross-references to pages, sometimes linked and sometimes not

The same page name is a link in one sentence and bare text in another, on the same page.

| Page | Bare mention | Linked elsewhere on the same page |
| --- | --- | --- |
| `process/stay-registered-and-compliant` | "The annual brochure delivery obligation described in **Write the Disclosure Documents** runs every year" | yes, linked earlier in "What actually happens" |
| `process/stay-registered-and-compliant` | "most heavily **Compliance and Supervision and Records and Documentation**" (opening paragraph) | yes, both linked in "Which practice areas apply" |
| `domains/compliance-and-supervision` | "the yearly Form ADV amendment covered in **Stay Registered and Compliant**"; "the chief compliance officer named under **Write the Policies**"; "the annual Form ADV amendment described in **Stay Registered and Compliant**" (Common misconceptions) | yes, both linked in "Where this starts in the process" |
| `domains/service-and-pricing-models` | "belongs together with the service design from **Design the Firm**" | yes, linked in "Where this starts in the process" |
| `domains/risk-and-insurance` | — | consistent: links `Write the Policies` at both mentions |

CLAUDE.md's style rule covers glossary terms ("define a term the first time it appears and
link it") but says nothing about whether a second mention of a page should be a link. Six
instances across three pages; a rule either way would settle them.

---

## How this was measured

- Pages enumerated with `find content -name '*.mdx'`, not from CLAUDE.md's lists.
- Word counts from `pnpm wordcount`, the tool CLAUDE.md specifies, on every page.
- Links extracted by a balanced-bracket parser rather than a regular expression, so
  targets containing parentheses — `…/section-275.206(4)-1` and its siblings — are
  captured whole. Eight such link occurrences exist across three distinct URLs, and all
  eight are well-formed (the parentheses are balanced, so CommonMark accepts them
  unescaped, and the build confirms it).
- Internal targets resolved against the actual folders under `content/`; anchors resolved
  against the explicit `[#id]` headings on the target page.
- Skeleton conformance checked by extracting every H2 and H3 in document order and
  comparing against the two templates in CLAUDE.md.
- Regulated-figure sweep run twice: once over every numeral in `content/`, once over
  spelled-out periods, counts, and frequencies, both excluding
  `/tools/this-years-figures`.
- Every one of the 26 written pages was also read in full; several findings here —
  B2.c, B11.4, B11.6, B11.7 — are not detectable mechanically.

## Build

`pnpm install` then `pnpm build` on a cleared `.next`: **exit 0, no warnings, no errors.**
30 static pages generated; pagefind postbuild indexed 28. Confirmed clean.

## What was not done, deliberately

Nothing in this file was repaired. No existing file was modified. No `[VERIFY]` mark was
assigned and no external link was fetched — link verification belongs to the
source-currency sweep, which is FOLLOWUPS items 3, 5, 8, 11 and 14, and not to an
inventory. The three judgment calls FOLLOWUPS defers to the consistency pass — item 6
(the Client Education section), item 13 (the area-page ceiling and Marketing and Growth at
1,823), item 15 (the two step pages over the hard range) — are recorded with their
measurements and left unmade, because deciding them here would put a repair inside the
inventory the repairs are scoped from.
