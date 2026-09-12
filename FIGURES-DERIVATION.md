# Figures derivation

**Derived at commit `5e6576748c0cff202bd71a26b06d47c119017ffb`.**

This is a commit-pinned derivation. If the repository moves, re-derive it from `content/` at the
new commit rather than adjusting the numbers below. It records what `content/` says at this
commit; it does not recommend changes.

---

## 1. The three headline counts, as FIGURES-INVENTORY.md defines them

The preamble of `FIGURES-INVENTORY.md` states: "**Counts:** 41 distinct figures, 37 deferral
sites, 17 pages that defer at least once. There are more figures than deferral sites because
several sentences defer two or three figures at once." Those are that file's claims; they are
reproduced here as claims and are not used as inputs to anything below.

### Definition 1 — "distinct figures"

Restated: one entry per figure that `/tools/this-years-figures` has to hold, where a figure is
whatever a deferring sentence in `content/` sends the reader to that page for, deduplicated
across every page that sends the reader for it. The `Path` column of the inventory shows that a
single entry may cover an obligation that exists on both the state and the SEC path, so a
state/SEC pair of the same obligation is one entry under this definition.

**Ambiguous.** The file contradicts itself on granularity, and says so in its own note under the
Step 1 table: "Treated as one figure here, but it will need three or four rows on the page." So
an entry is not the same unit as a row, and two readings give different numbers:

- **Reading A — one entry per figure-concept, a state/SEC pair of the same obligation counted
  once.** Derived count: **46**. (49 rows carried by the page at this commit, less 5 rows that
  are the SEC-path half of a concept whose state half also has a row, plus 2 figures a deferral
  names for which the page carries no row at all. See §6.)
- **Reading B — one entry per row the page has to carry.** Derived count: **51**. (The 49 rows
  it carries, plus the 2 figures deferred to with no row.)

Neither is picked. *FIGURES-INVENTORY.md's claim: 41.*

### Definition 2 — "deferral sites"

Restated: a place in `content/` where the prose sends the reader to `/tools/this-years-figures`
for a specific figure — as opposed to a Related-list entry, a landing-page card, or a general
pointer that names no figure, which the guide treats as a reference rather than a deferral.

**Ambiguous.** "Site" is not defined as a sentence or as a link, and the two diverge because
several sentences carry more than one link to the page:

- **Reading A — one site per link occurrence that is a deferral.** Derived count: **82**.
- **Reading B — one site per sentence that defers, however many links it carries.** Derived
  count: **73**.

The gap is 9, from three sentences: `content/tools/building-your-running-calendar/index.mdx:39`
(5 links, 1 sentence), `content/tools/reaching-your-written-decision/index.mdx:23` (5 links,
1 sentence), and `content/tools/building-your-running-calendar/index.mdx:57` (2 links,
1 sentence). Neither reading is picked. *FIGURES-INVENTORY.md's claim: 37.*

### Definition 3 — "pages that defer at least once"

Restated: the count of distinct files under `content/` that carry at least one deferral. A file
whose only links to the figures page are references does not count.

**Not ambiguous** on its own terms; it depends on Definition 2's deferral/reference split, but
both readings of Definition 2 give the same set of files. Derived count: **21**.
*FIGURES-INVENTORY.md's claim: 17.*

The 21 (derived; see §4 for the per-link evidence):

```
content/domains/compliance-and-supervision/index.mdx
content/domains/firm-economics/index.mdx
content/domains/marketing-and-growth/index.mdx
content/domains/records-and-documentation/index.mdx
content/domains/risk-and-insurance/index.mdx
content/domains/technology-and-client-experience/index.mdx
content/glossary/index.mdx
content/introduction/index.mdx
content/process/choose-your-regulator/index.mdx
content/process/decide-if-independence-fits/index.mdx
content/process/file-and-get-approved/index.mdx
content/process/form-the-business/index.mdx
content/process/leave-and-transition-clients/index.mdx
content/process/qualify-as-an-adviser/index.mdx
content/process/set-up-custody-and-technology/index.mdx
content/process/stay-registered-and-compliant/index.mdx
content/process/write-the-disclosure-documents/index.mdx
content/process/write-the-policies/index.mdx
content/tools/building-your-running-calendar/index.mdx
content/tools/calculating-your-regulatory-assets-under-management/index.mdx
content/tools/reaching-your-written-decision/index.mdx
```

Two files link to the figures page but carry only references, so they are outside the 21:
`content/about/index.mdx:30` and `content/tools/index.mdx:21`. A third file,
`content/tools/_meta.js:2`, contains the string `this-years-figures` as a sidebar key and is not
a link.

---

## 2. The figure inventory, derived from content/tools/this-years-figures/index.mdx

**49 rows**, under 14 of the 19 sections that carry an explicit anchor.

| Section heading | Anchor | Rows |
| --- | --- | --- |
| Step 1 — Decide If Independence Fits | `decide-if-independence-fits` | 4 |
| Step 4 — Form the Business | `form-the-business` | 2 |
| Step 5 — Choose Your Regulator | `choose-your-regulator` | 1 |
| Step 6 — Qualify as an Adviser | `qualify-as-an-adviser` | 6 |
| Step 7 — Write the Disclosure Documents | `write-the-disclosure-documents` | 7 |
| Step 8 — Write the Policies | `write-the-policies` | 3 |
| Step 9 — File and Get Approved | `file-and-get-approved` | 6 |
| Step 10 — Set Up Custody and Technology | `set-up-custody-and-technology` | 3 |
| Step 11 — Leave and Transition Clients | `leave-and-transition-clients` | 2 |
| Step 12 — Stay Registered and Compliant | `stay-registered-and-compliant` | 2 |
| Service and Pricing Models | `service-and-pricing-models` | 0 |
| Advice and Planning Process | `advice-and-planning-process` | 0 |
| Technology and Client Experience | `technology-and-client-experience` | 1 |
| Client Education | `client-education` | 0 |
| Marketing and Growth | `marketing-and-growth` | 6 |
| Compliance and Supervision | `compliance-and-supervision` | 2 |
| Records and Documentation | `records-and-documentation` | 0 |
| Firm Economics | `firm-economics` | 0 |
| Risk and Insurance | `risk-and-insurance` | 4 |

The five zero-row sections divide into two kinds: three areas that state they refer to no figure
at all (Service and Pricing Models, Advice and Planning Process, Client Education), and two that
hold cross-references only because their figures are filed under a step (Records and
Documentation → Step 8; Firm Economics → Steps 9 and 12).

### Rows by Value class

| Class | Rows |
| --- | --- |
| A concrete value | 22 |
| "Varies by state" | 25 |
| `NEEDS-VALUE` | 2 |

The two `NEEDS-VALUE` rows: **Filing system fee** (Step 9) and **Yearly registration renewal
window** (Step 12).

The 25 "Varies by state" rows, by section: Step 4 — Entity formation filing fee, Yearly franchise
tax or annual report fee. Step 6 — Validity of a passed examination after a registration gap,
Investment adviser representative registration fee, Fingerprint requirement and fee, Yearly
continuing-education credits for a representative. Step 7 — Brochure delivery ahead of signing,
Termination window where delivery happens at signing, Yearly brochure delivery deadline. Step 8 —
Record retention period by category, Production deadline once a regulator asks for a record.
Step 9 — Firm initial registration fee, Notice filing fee, Level of business that triggers a
notice filing. Step 10 — Custody notification deadline, Frequency of custodian account statements
to clients, Independent verification triggers. Step 12 — Yearly registration renewal fee.
Marketing and Growth — Compensation threshold below which a promoter arrangement needs no written
agreement, Lookback period deciding who counts as a disqualified person. Compliance and
Supervision — Frequency of the compliance program review. Risk and Insurance — Minimum net worth
for a state-registered adviser, Amount of a required surety bond, What triggers a net worth
minimum or a bond at all, Deadline for reporting that the firm has fallen below a required net
worth.

Two rows carry a name rather than a number as their Value and so read as neither a value nor
"Varies by state" in the plain sense; both are counted above under "a concrete value" because
the Value cell prints the names: **Qualifying examination identifiers** and **Professional
designations accepted instead of the examination** (Step 6). Both carry their state variation
inside that same cell.

---

## 3. Every link to /tools/this-years-figures in content/

**89 link occurrences**, on **78 distinct file:line sites**, across **23 `.mdx` files** (plus one
non-link occurrence of the string in `content/tools/_meta.js:2`). Links inside the figures page
itself are excluded throughout.

| Split | Count |
| --- | --- |
| Anchored | 78 |
| Bare | 11 |
| Deferral | 82 |
| Reference | 7 |

All 78 anchored links are deferrals. Of the 11 bare links, 7 are references and 4 are deferrals.

Eleven occurrences sit on a line that already carries another, from five lines:
`content/domains/risk-and-insurance/index.mdx:38` (2),
`content/tools/building-your-running-calendar/index.mdx:39` (5),
`content/tools/building-your-running-calendar/index.mdx:57` (2),
`content/tools/reaching-your-written-decision/index.mdx:23` (5),
`content/tools/reaching-your-written-decision/index.mdx:53` (2).

### The 7 references

Each was classified from its sentence: none names a figure.

| File:line | Form | Why a reference |
| --- | --- | --- |
| `content/about/index.mdx:30` | bare | Describes the guide's own convention — the pages "name the concept in plain language and link to This year's figures, which holds every such number." Names no figure. |
| `content/glossary/index.mdx:9` | bare | Page preamble: "any figure a term turns on … lives on This year's figures instead." A statement about the glossary's scope, not a send for a figure. |
| `content/glossary/index.mdx:289` | bare | Related list entry. |
| `content/tools/index.mdx:21` | bare | Landing-page card describing the page. |
| `content/tools/building-your-running-calendar/index.mdx:89` | bare | Related list entry. |
| `content/tools/calculating-your-regulatory-assets-under-management/index.mdx:99` | bare | Related list entry. |
| `content/tools/reaching-your-written-decision/index.mdx:81` | bare | Related list entry. |

### Occurrences by file

| File | Occurrences | Deferrals | References |
| --- | --- | --- | --- |
| `content/glossary/index.mdx` | 26 | 24 | 2 |
| `content/tools/building-your-running-calendar/index.mdx` | 10 | 9 | 1 |
| `content/tools/reaching-your-written-decision/index.mdx` | 8 | 7 | 1 |
| `content/process/qualify-as-an-adviser/index.mdx` | 6 | 6 | 0 |
| `content/tools/calculating-your-regulatory-assets-under-management/index.mdx` | 5 | 4 | 1 |
| `content/process/write-the-disclosure-documents/index.mdx` | 5 | 5 | 0 |
| `content/process/stay-registered-and-compliant/index.mdx` | 4 | 4 | 0 |
| `content/process/file-and-get-approved/index.mdx` | 3 | 3 | 0 |
| `content/process/write-the-policies/index.mdx` | 2 | 2 | 0 |
| `content/process/leave-and-transition-clients/index.mdx` | 2 | 2 | 0 |
| `content/process/decide-if-independence-fits/index.mdx` | 2 | 2 | 0 |
| `content/process/choose-your-regulator/index.mdx` | 2 | 2 | 0 |
| `content/domains/risk-and-insurance/index.mdx` | 2 | 2 | 0 |
| `content/domains/marketing-and-growth/index.mdx` | 2 | 2 | 0 |
| `content/domains/firm-economics/index.mdx` | 2 | 2 | 0 |
| `content/process/set-up-custody-and-technology/index.mdx` | 1 | 1 | 0 |
| `content/process/form-the-business/index.mdx` | 1 | 1 | 0 |
| `content/introduction/index.mdx` | 1 | 1 | 0 |
| `content/domains/technology-and-client-experience/index.mdx` | 1 | 1 | 0 |
| `content/domains/records-and-documentation/index.mdx` | 1 | 1 | 0 |
| `content/domains/compliance-and-supervision/index.mdx` | 1 | 1 | 0 |
| `content/about/index.mdx` | 1 | 0 | 1 |
| `content/tools/index.mdx` | 1 | 0 | 1 |
| **Total** | **89** | **82** | **7** |

### Anchor usage

Fourteen of the page's nineteen anchors are linked to; every anchor used by a link exists on the
page.

| Anchor | Links |
| --- | --- |
| `write-the-disclosure-documents` | 12 |
| `qualify-as-an-adviser` | 10 |
| `decide-if-independence-fits` | 9 |
| `file-and-get-approved` | 8 |
| `write-the-policies` | 6 |
| `risk-and-insurance` | 6 |
| `marketing-and-growth` | 6 |
| `stay-registered-and-compliant` | 4 |
| `leave-and-transition-clients` | 4 |
| `compliance-and-supervision` | 4 |
| `set-up-custody-and-technology` | 3 |
| `choose-your-regulator` | 3 |
| `form-the-business` | 2 |
| `technology-and-client-experience` | 1 |

The five anchors no link uses are exactly the five zero-row sections listed in §2.

---

## 4. What each deferral resolves to

Rows are named as they appear in the Concept column of `content/tools/this-years-figures/index.mdx`.

### `content/introduction/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 19 | `decide-if-independence-fits` | The state/SEC registration line — see §6, this does not resolve to a single row |

### `content/process/decide-if-independence-fits/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 12 | `decide-if-independence-fits` | The state/SEC registration line — see §6, this does not resolve to a single row |
| 36 | bare | Broad cost deferral — entity formation filing fee; yearly franchise tax or annual report fee; filing system fee; firm initial registration fee; yearly registration renewal fee; minimum net worth / surety bond. Multi-section; see §6 |

### `content/process/choose-your-regulator/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 28 | `decide-if-independence-fits` | Small adviser ceiling; Large adviser threshold; Mid-sized adviser band; Buffer on either side of the SEC line |
| 40 | `choose-your-regulator` | Multi-state exception count |

### `content/process/form-the-business/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 38 | `form-the-business` | Entity formation filing fee; Yearly franchise tax or annual report fee |

### `content/process/qualify-as-an-adviser/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 22 | `qualify-as-an-adviser` | Qualifying examination identifiers |
| 24 | `qualify-as-an-adviser` | Professional designations accepted instead of the examination |
| 28 | `qualify-as-an-adviser` | Validity of a passed examination after a registration gap |
| 36 | `qualify-as-an-adviser` | Investment adviser representative registration fee |
| 50 | `qualify-as-an-adviser` | Fingerprint requirement and fee |
| 52 | `qualify-as-an-adviser` | Yearly continuing-education credits for a representative |

### `content/process/write-the-disclosure-documents/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 37 | `write-the-disclosure-documents` | Client relationship summary page limit; Client relationship summary delivery deadlines |
| 42 | `write-the-disclosure-documents` | Brochure delivery ahead of signing; Termination window where delivery happens at signing |
| 44 | `write-the-disclosure-documents` | Yearly brochure delivery deadline — and, by inference only, Yearly brochure delivery deadline on the SEC path; see §6 |
| 48 | `write-the-disclosure-documents` | Annual updating amendment deadline |
| 54 | `write-the-policies` | Record retention period by category |

### `content/process/write-the-policies/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 54 | `write-the-policies` | Record retention period by category; Production deadline once a regulator asks for a record |
| 83 | `compliance-and-supervision` | Frequency of the compliance program review |

### `content/process/file-and-get-approved/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 34 | bare | Filing system fee; Firm initial registration fee; Investment adviser representative registration fee. Multi-section |
| 37 | `file-and-get-approved` | Notice filing fee; Level of business that triggers a notice filing |
| 51 | `file-and-get-approved` | Deadline to act on an application for registration; Deadline for concluding denial proceedings |

### `content/process/set-up-custody-and-technology/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 30 | `set-up-custody-and-technology` | Custody notification deadline; Frequency of custodian account statements to clients; Independent verification triggers |

### `content/process/leave-and-transition-clients/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 24 | `leave-and-transition-clients` | Deadline to file the form documenting a departure |
| 40 | `leave-and-transition-clients` | Standardized account transfer window |

### `content/process/stay-registered-and-compliant/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 22 | `write-the-disclosure-documents` | Annual updating amendment deadline |
| 32 | `stay-registered-and-compliant` | Yearly registration renewal window; Yearly registration renewal fee |
| 35 | `file-and-get-approved` | Notice filing fee; Level of business that triggers a notice filing |
| 44 | `write-the-policies` | Record retention period by category |

### `content/domains/compliance-and-supervision/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 43 | `compliance-and-supervision` | Frequency of the compliance program review; Frequency of the compliance program review, on the SEC path |

### `content/domains/firm-economics/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 22 | bare | Filing system fee; Firm initial registration fee; Yearly registration renewal fee. Multi-section |
| 25 | `file-and-get-approved` | Notice filing fee; Level of business that triggers a notice filing |

### `content/domains/marketing-and-growth/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 46 | `marketing-and-growth` | Compensation threshold below which a promoter arrangement needs no written agreement (both the state row and the SEC-path row); Lookback period deciding who counts as a disqualified person (both rows) |
| 54 | `marketing-and-growth` | Periods of performance that must be shown; Treatment required for hypothetical performance |

### `content/domains/records-and-documentation/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 24 | `write-the-policies` | Record retention period by category |

### `content/domains/risk-and-insurance/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 38 (first link) | `risk-and-insurance` | Minimum net worth for a state-registered adviser; Amount of a required surety bond; What triggers a net worth minimum or a bond at all |
| 38 (second link) | `risk-and-insurance` | Deadline for reporting that the firm has fallen below a required net worth |

### `content/domains/technology-and-client-experience/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 41 | `technology-and-client-experience` | Customer notification deadline after unauthorized access |

### `content/glossary/index.mdx`

| Line | Term | Anchor | Resolves to |
| --- | --- | --- | --- |
| 23 | Annual updating amendment | `write-the-disclosure-documents` | Annual updating amendment deadline |
| 29 | Brochure supplement | `write-the-disclosure-documents` | Brochure delivery ahead of signing |
| 37 | Buffer on either side of the SEC line | `decide-if-independence-fits` | Buffer on either side of the SEC line |
| 59 | Compliance program review | `compliance-and-supervision` | Frequency of the compliance program review (both rows) |
| 71 | Custody | `set-up-custody-and-technology` | Custody notification deadline; Frequency of custodian account statements to clients; Independent verification triggers |
| 85 | Disqualified person | `marketing-and-growth` | Lookback period deciding who counts as a disqualified person (both rows) |
| 91 | Endorsement | `marketing-and-growth` | Compensation threshold below which a promoter arrangement needs no written agreement (both rows) |
| 117 | Firm brochure | `write-the-disclosure-documents` | Brochure delivery ahead of signing; Yearly brochure delivery deadline |
| 129 | Form CRS | `write-the-disclosure-documents` | Client relationship summary page limit; Client relationship summary delivery deadlines |
| 137 | Form U5 | `leave-and-transition-clients` | Deadline to file the form documenting a departure |
| 143 | Hypothetical performance | `marketing-and-growth` | Treatment required for hypothetical performance |
| 153 | Independent verification | `set-up-custody-and-technology` | Independent verification triggers |
| 163 | Mid-sized adviser band | `decide-if-independence-fits` | Small adviser ceiling; Large adviser threshold; Mid-sized adviser band |
| 167 | Minimum net worth | `risk-and-insurance` | Minimum net worth for a state-registered adviser; What triggers a net worth minimum or a bond at all; Deadline for reporting that the firm has fallen below a required net worth |
| 175 | Multi-state exception | `choose-your-regulator` | Multi-state exception count |
| 185 | Notice filing | `file-and-get-approved` | Notice filing fee; Level of business that triggers a notice filing |
| 201 | Professional designation | `qualify-as-an-adviser` | Professional designations accepted instead of the examination |
| 211 | Qualifying examination | `qualify-as-an-adviser` | Qualifying examination identifiers; Validity of a passed examination after a registration gap; Professional designations accepted instead of the examination |
| 229 | Regulatory assets under management | `decide-if-independence-fits` | Small adviser ceiling; Large adviser threshold; Mid-sized adviser band; Buffer on either side of the SEC line |
| 233 | Renewal window | `stay-registered-and-compliant` | Yearly registration renewal window; Yearly registration renewal fee |
| 241 | Retention period | `write-the-policies` | Record retention period by category; Record retention period on the SEC path |
| 259 | Standardized account transfer | `leave-and-transition-clients` | Standardized account transfer window |
| 271 | Surety bond | `risk-and-insurance` | Amount of a required surety bond; What triggers a net worth minimum or a bond at all |
| 277 | Testimonial | `marketing-and-growth` | Compensation threshold below which a promoter arrangement needs no written agreement (both rows) |

### `content/tools/building-your-running-calendar/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 39 (link 1) | bare | Umbrella pointer covering the four sets named after it in the same sentence. Multi-section |
| 39 (link 2) | `write-the-disclosure-documents` | Annual updating amendment deadline; Yearly brochure delivery deadline |
| 39 (link 3) | `stay-registered-and-compliant` | Yearly registration renewal window; Yearly registration renewal fee |
| 39 (link 4) | `qualify-as-an-adviser` | Yearly continuing-education credits for a representative |
| 39 (link 5) | `compliance-and-supervision` | Frequency of the compliance program review |
| 42 | `file-and-get-approved` | Notice filing fee; Level of business that triggers a notice filing |
| 57 (link 1) | `risk-and-insurance` | Deadline for reporting that the firm has fallen below a required net worth |
| 57 (link 2) | `write-the-policies` | Production deadline once a regulator asks for a record; Record retention period by category |
| 60 | `write-the-disclosure-documents` | Client relationship summary delivery deadlines |

### `content/tools/calculating-your-regulatory-assets-under-management/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 71 | `decide-if-independence-fits` | Small adviser ceiling; Large adviser threshold; Mid-sized adviser band; Buffer on either side of the SEC line |
| 74 | `decide-if-independence-fits` | Buffer on either side of the SEC line |
| 81 | `choose-your-regulator` | Multi-state exception count |
| 87 | `write-the-disclosure-documents` | Annual updating amendment deadline |

### `content/tools/reaching-your-written-decision/index.mdx`

| Line | Anchor | Resolves to |
| --- | --- | --- |
| 23 (link 1) | `form-the-business` | Entity formation filing fee; Yearly franchise tax or annual report fee |
| 23 (link 2) | `file-and-get-approved` | Filing system fee; Firm initial registration fee |
| 23 (link 3) | `qualify-as-an-adviser` | Fingerprint requirement and fee; Investment adviser representative registration fee — and an examination fee, for which the page carries no row; see §6 |
| 23 (link 4) | `risk-and-insurance` | Amount of a required surety bond; Minimum net worth for a state-registered adviser |
| 23 (link 5) | `stay-registered-and-compliant` | Yearly registration renewal fee |
| 53 (link 1) | `decide-if-independence-fits` | The state/SEC registration line — see §6 |
| 53 (link 2) | `file-and-get-approved` | Notice filing fee — and what an SEC-registered firm pays the SEC, for which the page carries no row; see §6 |

### Deferrals resolving to more than one section — permanently bare

Four, and all four are in fact bare, so the hard-rule-5 link form holds without exception at this
commit:

| File:line | Sections spanned |
| --- | --- |
| `content/process/decide-if-independence-fits/index.mdx:36` | Step 4, Step 9, Step 12, Risk and Insurance |
| `content/process/file-and-get-approved/index.mdx:34` | Step 6, Step 9 |
| `content/domains/firm-economics/index.mdx:22` | Step 9, Step 12 |
| `content/tools/building-your-running-calendar/index.mdx:39` (first link) | Step 6, Step 7, Step 12, Compliance and Supervision |

### Deferrals resolving to a figure filed under a section named for a different step or area

Twelve, from pages that are themselves a step or an area:

| File:line | Page's own section | Anchor it uses |
| --- | --- | --- |
| `content/introduction/index.mdx:19` | (the Introduction is neither a step nor an area) | `decide-if-independence-fits` |
| `content/process/choose-your-regulator/index.mdx:28` | Step 5 | `decide-if-independence-fits` |
| `content/process/write-the-disclosure-documents/index.mdx:54` | Step 7 | `write-the-policies` |
| `content/process/write-the-policies/index.mdx:83` | Step 8 | `compliance-and-supervision` |
| `content/process/stay-registered-and-compliant/index.mdx:22` | Step 12 | `write-the-disclosure-documents` |
| `content/process/stay-registered-and-compliant/index.mdx:35` | Step 12 | `file-and-get-approved` |
| `content/process/stay-registered-and-compliant/index.mdx:44` | Step 12 | `write-the-policies` |
| `content/domains/firm-economics/index.mdx:25` | Firm Economics | `file-and-get-approved` |
| `content/domains/records-and-documentation/index.mdx:24` | Records and Documentation | `write-the-policies` |
| `content/process/file-and-get-approved/index.mdx:34` | Step 9 | (bare; also reaches Step 6) |
| `content/process/decide-if-independence-fits/index.mdx:36` | Step 1 | (bare; reaches Steps 4, 9, 12 and Risk and Insurance) |
| `content/domains/firm-economics/index.mdx:22` | Firm Economics | (bare; reaches Steps 9 and 12) |

A separate kind, listed apart because the origin page has no section of its own on the figures
page at all: every deferral on the glossary page (24) and on the three worksheet pages (20) lands
under a section named for a step or an area, because neither the glossary nor any worksheet has a
section there. These are not counted in the twelve above.

---

## 5. The "Pages that defer to it" column, rebuilt and diffed

`FIGURES-INVENTORY.md` carries 41 figure rows and 55 page entries across its last column, naming
17 distinct pages.

### Direction A — deferrals in content/ missing from the column

36 of the 41 inventory rows are missing at least one page; 5 match as they stand. The additions
run to 70 entry-instances.

| Inventory figure (abbreviated) | Missing page:line |
| --- | --- |
| Step 1 — the AUM lines | `content/glossary/index.mdx:37`, `content/glossary/index.mdx:163`, `content/glossary/index.mdx:229`, `content/tools/calculating-your-regulatory-assets-under-management/index.mdx:71`, `content/tools/calculating-your-regulatory-assets-under-management/index.mdx:74`, `content/tools/reaching-your-written-decision/index.mdx:53` |
| Step 4 — entity formation filing fee | `content/tools/reaching-your-written-decision/index.mdx:23`, `content/process/decide-if-independence-fits/index.mdx:36` |
| Step 4 — yearly franchise tax / annual report fee | `content/tools/reaching-your-written-decision/index.mdx:23`, `content/process/decide-if-independence-fits/index.mdx:36` |
| Step 5 — exception counts | `content/glossary/index.mdx:175`, `content/tools/calculating-your-regulatory-assets-under-management/index.mdx:81` |
| Step 6 — exam identifiers | `content/glossary/index.mdx:211` |
| Step 6 — designations accepted | `content/glossary/index.mdx:201`, `content/glossary/index.mdx:211` |
| Step 6 — validity after a gap | `content/glossary/index.mdx:211` |
| Step 6 — representative fee | `content/tools/reaching-your-written-decision/index.mdx:23` |
| Step 6 — fingerprints | `content/tools/reaching-your-written-decision/index.mdx:23` |
| Step 6 — continuing-education credits | `content/tools/building-your-running-calendar/index.mdx:39` |
| Step 7 — CRS page limit | `content/glossary/index.mdx:129` |
| Step 7 — CRS delivery deadlines | `content/glossary/index.mdx:129`, `content/tools/building-your-running-calendar/index.mdx:60` |
| Step 7 — brochure delivery ahead of signing | `content/glossary/index.mdx:29`, `content/glossary/index.mdx:117` |
| Step 7 — termination window | *(no additions — matches)* |
| Step 7 — yearly brochure delivery deadline | `content/glossary/index.mdx:117`, `content/tools/building-your-running-calendar/index.mdx:39` |
| Step 7 — annual updating amendment deadline | `content/glossary/index.mdx:23`, `content/tools/calculating-your-regulatory-assets-under-management/index.mdx:87`, `content/tools/building-your-running-calendar/index.mdx:39` |
| Step 8 — record retention | `content/glossary/index.mdx:241`, `content/tools/building-your-running-calendar/index.mdx:57` |
| Step 8 — production deadline | `content/tools/building-your-running-calendar/index.mdx:57` |
| Step 9 — filing system fee | `content/tools/reaching-your-written-decision/index.mdx:23`, `content/process/decide-if-independence-fits/index.mdx:36` |
| Step 9 — firm initial registration fee | `content/tools/reaching-your-written-decision/index.mdx:23`, `content/process/decide-if-independence-fits/index.mdx:36` |
| Step 9 — deadline to act on an application | *(no additions — matches)* |
| Step 9 — deadline for concluding proceedings | *(no additions — matches)* |
| Step 9 — notice filing fee | `content/glossary/index.mdx:185`, `content/tools/building-your-running-calendar/index.mdx:42`, `content/tools/reaching-your-written-decision/index.mdx:53` |
| Step 9 — level of business triggering a notice filing | `content/glossary/index.mdx:185`, `content/tools/building-your-running-calendar/index.mdx:42` |
| Step 10 — custody notification deadline | `content/glossary/index.mdx:71` |
| Step 10 — statement frequency | `content/glossary/index.mdx:71` |
| Step 10 — independent verification triggers | `content/glossary/index.mdx:71`, `content/glossary/index.mdx:153` |
| Step 11 — departure form filing deadline | `content/glossary/index.mdx:137` |
| Step 11 — account transfer window | `content/glossary/index.mdx:259` |
| Step 12 — renewal window | `content/glossary/index.mdx:233`, `content/tools/building-your-running-calendar/index.mdx:39` |
| Step 12 — renewal fee | `content/glossary/index.mdx:233`, `content/tools/building-your-running-calendar/index.mdx:39`, `content/tools/reaching-your-written-decision/index.mdx:23`, `content/process/decide-if-independence-fits/index.mdx:36` |
| Technology and CX — notification deadline | *(no additions — matches)* |
| Marketing — written-agreement threshold | `content/glossary/index.mdx:91`, `content/glossary/index.mdx:277` |
| Marketing — disqualification lookback | `content/glossary/index.mdx:85` |
| Marketing — periods of performance | *(no additions — matches)* |
| Marketing — hypothetical performance treatment | `content/glossary/index.mdx:143` |
| Compliance — review frequency | `content/process/write-the-policies/index.mdx:83`, `content/glossary/index.mdx:59`, `content/tools/building-your-running-calendar/index.mdx:39` |
| Risk — minimum net worth | `content/glossary/index.mdx:167`, `content/tools/reaching-your-written-decision/index.mdx:23`, `content/process/decide-if-independence-fits/index.mdx:36` |
| Risk — surety bond amount | `content/glossary/index.mdx:271`, `content/tools/reaching-your-written-decision/index.mdx:23`, `content/process/decide-if-independence-fits/index.mdx:36` |
| Risk — triggers | `content/glossary/index.mdx:167`, `content/glossary/index.mdx:271` |
| Risk — net worth shortfall reporting deadline | `content/glossary/index.mdx:167`, `content/tools/building-your-running-calendar/index.mdx:57` |

The 5 rows that match as they stand: Step 7 termination window; Step 9 deadline to act; Step 9
deadline for concluding proceedings; Technology and CX notification deadline; Marketing periods
of performance.

Of the 70 additions, 69 are a page in one of the four files that were never in scope when the
column was built — the glossary and the three worksheet pages — or
`content/process/decide-if-independence-fits/index.mdx:36`, the broad cost deferral of §6 item 5.
One addition is neither: the Compliance review frequency row is missing
`content/process/write-the-policies/index.mdx:83`, a step page that was in scope when the column
was built and defers to that figure in plain terms — "The required frequency is on This year's
figures."

### Direction B — column entries naming a page that no longer defers to that figure

**None.** All 55 entry-instances across the 41 rows were checked against the derived deferrals
and every one is still supported by a sentence in `content/` at this commit.

---

## 6. What resisted classification or definition

Listed, not resolved.

1. **"The threshold that would require SEC registration" does not resolve to one row.**
   `content/introduction/index.mdx:19`, `content/process/decide-if-independence-fits/index.mdx:12`
   and `content/tools/reaching-your-written-decision/index.mdx:53` each send the reader for "the
   threshold" in the singular. The Step 1 section carries four rows and no single one is "the
   threshold": *Small adviser ceiling* is the line below which an adviser registers with its home
   state, *Large adviser threshold* is the line at or above which the SEC is the regulator, and
   the *Mid-sized adviser band* and *Buffer* sit between and around them. Which row a reader lands
   on depends on which direction they are approaching from. `FIGURES-INVENTORY.md` records the
   same difficulty from the other side, bundling all four into one entry and noting it "will need
   three or four rows on the page."

2. **An examination fee is deferred to but has no row.**
   `content/tools/reaching-your-written-decision/index.mdx:23` reads "your own exam, fingerprint
   and representative fees under Qualify as an Adviser." The Step 6 section carries a fingerprint
   fee row and a representative registration fee row, but nothing for what the examination itself
   costs.

3. **What an SEC-registered firm pays the SEC is deferred to but has no row.**
   `content/tools/reaching-your-written-decision/index.mdx:53` reads "It pays the SEC, plus a
   notice filing fee … Both are under File and Get Approved." The Step 9 section carries a
   *Filing system fee* row, whose description says the operator sets that schedule for state- and
   SEC-registered advisers alike, and a *Firm initial registration fee* row whose Value reads
   "Varies by state." Neither is the SEC's own charge. It is also arguable that "Both" refers
   instead to the notice filing fee and the level of business that triggers it, in which case the
   sentence resolves cleanly and there is no gap; the sentence supports both readings.

4. **`Yearly brochure delivery deadline on the SEC path` is reached only by inference.**
   `content/process/write-the-disclosure-documents/index.mdx:44` says the deadline "is set by
   rule" without distinguishing the paths, and the page's SEC-path callout at line 37 covers
   Form CRS rather than brochure delivery. Every other of the 49 rows is reached by a sentence
   that names what it is sending the reader for.

5. **`content/process/decide-if-independence-fits/index.mdx:36` is a broad deferral whose figure
   set is a judgment call.** It says "None of the specific fee amounts belong on this page,"
   having just listed "the one-time cost of forming the entity and setting up initial compliance
   and technology, ongoing costs like insurance and regulatory fees." Reading "forming the
   entity" onto the Step 4 rows and "regulatory fees" onto the Step 9 and Step 12 fee rows is
   defensible but not forced; a narrower reading would resolve it to no row at all. It is
   included in §5 Direction A on the broader reading, and every row it adds there is also added
   by at least one other page, so excluding it changes no row's disposition.

6. **State/SEC row pairs make "one figure" ambiguous in five places.** Five concepts occupy two
   rows each because the state and SEC answers differ: yearly brochure delivery deadline, record
   retention period, promoter written-agreement threshold, disqualification lookback, and
   compliance review frequency. Several deferring sentences send the reader for the concept
   without distinguishing ("on either path," "set by rule and by state"), so whether they are one
   figure or two depends on the granularity chosen in §1 Definition 1.

7. **Whether the glossary page "defers" at all is a definitional question this pass did not
   settle by fiat.** Its 24 anchored links each sit in a definition that names a specific figure
   and sends the reader for it, which is the deferral test used throughout, so they are counted.
   But the glossary is a reference surface rather than a narrative page, and
   `FIGURES-INVENTORY.md` excluded it. Nothing in the inventory's preamble says why. If the
   glossary is held to be out of scope by definition, the derived page count falls from 21 to 20
   and the deferral count from 82 to 58.

---

## 7. Assertions run

Each check states what it was asserted against, the number expected before running it, and the
number observed.

| # | Check | Asserted against | Expected | Observed |
| --- | --- | --- | --- | --- |
| A1 | Files under `content/` containing `this-years-figures`, excluding the figures page | A `grep -rl` over `content/`; a result of 1 or of every file would mean the filter did nothing | ≥ 20, and must include the 3 worksheet pages FOLLOWUPS item 33 names | 24 paths — 23 `.mdx` plus `content/tools/_meta.js`; all 3 worksheets present |
| A2 | Link occurrences reconcile with distinct file:line sites | 89 occurrences vs 78 sites; the surplus must be explained line by line, not assumed | 78 + 11 = 89, with 11 accounted for by named lines | 5 lines carry extras (2,5,2,5,2) = +11; 78 + 11 = 89 ✓ |
| A3 | Anchored + bare = all occurrences | Partition of the 89 by presence of `#` | 89 | 78 + 11 = 89 ✓ |
| A4 | Deferral + reference = all occurrences | Partition of the 89 by sentence classification | 89 | 82 + 7 = 89 ✓ |
| A5 | Bare deferrals are exactly the bare links that are not references | bare(11) − references(7) | 4 | 4, and all 4 are the multi-section deferrals named in §4 ✓ |
| A6 | Figure rows on the page sum across sections | Per-section counts vs a single whole-file count; a regex matching every `\|` line or none would show here | 49 both ways | 4+2+1+6+7+3+6+3+2+2+1+6+2+4 = 49; whole-file count 49 ✓ |
| A7 | Every anchor a link uses exists on the figures page | 14 distinct anchors used vs 19 defined; a broken anchor would appear as a set difference | 0 used-but-undefined | 0 ✓ |
| A8 | Anchors defined but never linked | The 19 defined, less the 14 used | 5, and they should be exactly the zero-row sections | 5: `service-and-pricing-models`, `advice-and-planning-process`, `client-education`, `records-and-documentation`, `firm-economics` — exactly the 5 zero-row sections ✓ |
| A9 | Anchor link frequencies sum to the anchored total | Per-anchor counts vs the 78 | 78 | 12+10+9+8+6+6+6+4+4+4+3+3+2+1 = 78 ✓ |
| A10 | `FIGURES-INVENTORY.md`'s table row count vs its own headline claim of 41 | Counting its table rows; this tests the file's internal consistency, not the repo | 41 if self-consistent | 41 ✓ (the file's claim is consistent with its own table) |
| A11 | Distinct pages in the inventory's last column vs its own headline claim of 17 | Counting distinct `content/...` paths in that column | 17 if self-consistent | 17 ✓ |
| A12 | Derived deferring pages are a strict superset of the inventory's 17 | Set difference in both directions; an empty difference in the added direction would mean the worksheet gap FOLLOWUPS item 33 reports does not exist | 21 derived, 17 ⊂ 21, 4 added, 0 dropped | 21 derived; added = glossary + the 3 worksheets; dropped = 0 ✓ |
| A13 | Every one of the 49 rows is reached by at least one deferral | Row-by-row walk of §4; a row reached by nothing would be an orphan row | 49 | 49, one of them (`Yearly brochure delivery deadline on the SEC path`) only by inference — §6 item 4 |
| A14 | Figures named in a deferral for which no row exists | Row-by-row walk of §4 in the other direction | unknown before running | 2 — §6 items 2 and 3 |
| A15 | Column entries still supported by a sentence in `content/` | All 55 entry-instances across the 41 rows, checked individually; checking "the column" as a whole would report clean without comparing anything | unknown before running | 55 checked, 55 supported, 0 stale ✓ |
| A16 | Rows in the diff needing no addition | §5 Direction A, counted mechanically from the rendered table rather than by hand | unknown before running | 5 of 41; 36 affected |
| A17 | Entry-instances added by §5 Direction A | Counted from the table rows only, excluding the prose beneath it; a hand tally of 70 was checked against it | 70 by hand tally | 71 raw, of which 1 sits in prose after the table — 70 in the table ✓ |
| A18 | Composition of the 70 additions | Every addition filtered against the four files out of scope when the column was built, plus the broad deferral of §6 item 5; if the remainder were 0 the gap would be purely a scope artefact | unknown before running | 69 accounted for, 1 not: `content/process/write-the-policies/index.mdx:83` |
| A19 | Multi-section deferrals are bare | The 4 identified in §4 against hard rule 5's permanently-bare requirement | 4 bare, 0 anchored | 4 bare, 0 anchored ✓ |

Three checks were deliberately made against a number fixed before the check ran, because a silent
match-everything or match-nothing would otherwise have read as success: A6 (the 49 row count,
derived twice by different means), A15 (55 entry-instances enumerated before being tested, rather
than testing the column as a single string), and A17 (a hand tally of 70 additions set down before
the table was counted mechanically). A17 is also the one check that caught an error: the first
draft of §5 claimed 34 affected rows and 73 additions, and the mechanical count corrected both.
