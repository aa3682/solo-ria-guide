# Tools inventory

A read-only survey of everything in the repo that bears on what `content/tools/`
holds today and what a worksheet set would have to fit into. Nothing under
`content/` and nothing in `CLAUDE.md` was changed to produce it.

Measured on the repo at the head of this branch.

---

## 1. Current state of `content/tools/`

Three files, two pages:

```
content/tools/_meta.js
content/tools/index.mdx
content/tools/this-years-figures/index.mdx
```

Word counts on the `pnpm wordcount` basis: `index.mdx` 57, `this-years-figures/index.mdx` 436.

### `content/tools/index.mdx`, verbatim

```mdx
---
title: Tools
description: Calculators, checklists, and worksheets that support the steps in The Independent Path.
asIndexPage: true
---

import { Callout } from 'nextra/components'

# Tools

This section holds the calculators, checklists, and worksheets that turn [The Independent Path](/process) into something you can act on, not just read about.

## What's here

**[This year's figures](/tools/this-years-figures)** holds every limit, rate, threshold, and deadline set by law, regulation, or an agency, each with its year and source. It is updated once a year. Worksheets and checklists are coming.

<Callout type="info">
This guide is educational material about how independent advisory firms are established and run. It is not legal, compliance, tax, or investment advice, and it does not create an advisory or professional relationship. Registration requirements vary by state and change over time. Verify anything here against the current rules of your regulator, and get your own counsel before acting.
</Callout>

## Related

- [The Independent Path](/process)
- [Practice Areas](/domains)
- [Glossary](/glossary)
```

### `content/tools/_meta.js`, verbatim

```js
export default {
  'this-years-figures': "This year's figures"
}
```

One key. The label is the full page title, unshortened — unlike `content/process/_meta.js`
and `content/domains/_meta.js`, which carry deliberately shortened phone labels.
`CLAUDE.md`'s "Sidebar labels" section names only those two files; it states no
convention for `content/tools/_meta.js`.

`content/_meta.js` places tools fourth:

```js
export default {
  introduction: 'Introduction',
  process: 'The Independent Path',
  domains: 'Practice Areas',
  tools: 'Tools',
  glossary: 'Glossary',
  about: 'About'
}
```

---

## 2. Every link in `content/` pointing at `/tools` or a page beneath it

69 links across 22 files (68 lines — one line carries two). The full source-by-source table, with the surrounding
sentence for each, is posted as a comment on the PR rather than in the description,
per `CLAUDE.md`'s rule about URL lists in PR descriptions.

### Shape of the 69

| Target | Count |
| --- | --- |
| `/tools/this-years-figures` (no anchor) | 42 |
| `/tools/this-years-figures#<anchor>` | 24 |
| `/tools` (the section landing page) | 3 |

### Anchored links, by anchor

| Anchor | Count | Linked from |
| --- | --- | --- |
| `#write-the-disclosure-documents` | 4 | glossary ×4 |
| `#marketing-and-growth` | 4 | glossary ×4 |
| `#decide-if-independence-fits` | 3 | glossary ×3 |
| `#set-up-custody-and-technology` | 2 | glossary ×2 |
| `#risk-and-insurance` | 2 | glossary ×2 |
| `#qualify-as-an-adviser` | 2 | glossary ×2 |
| `#leave-and-transition-clients` | 2 | glossary ×2 |
| `#write-the-policies` | 1 | glossary |
| `#stay-registered-and-compliant` | 1 | glossary |
| `#file-and-get-approved` | 1 | glossary |
| `#compliance-and-supervision` | 1 | glossary |
| `#choose-your-regulator` | 1 | glossary |

Every anchored link in the repo comes from `content/glossary/index.mdx`. No step page
and no area page links a figures-page anchor; they all link the page bare.

### Links per file

| File | Links |
| --- | --- |
| `content/glossary/index.mdx` | 26 |
| `content/process/qualify-as-an-adviser/index.mdx` | 6 |
| `content/process/write-the-disclosure-documents/index.mdx` | 5 |
| `content/process/stay-registered-and-compliant/index.mdx` | 4 |
| `content/process/file-and-get-approved/index.mdx` | 3 |
| `content/process/choose-your-regulator/index.mdx` | 2 |
| `content/process/decide-if-independence-fits/index.mdx` | 2 |
| `content/process/leave-and-transition-clients/index.mdx` | 2 |
| `content/process/write-the-policies/index.mdx` | 2 |
| `content/domains/firm-economics/index.mdx` | 2 |
| `content/domains/marketing-and-growth/index.mdx` | 2 |
| `content/process/form-the-business/index.mdx` | 1 |
| `content/process/set-up-custody-and-technology/index.mdx` | 1 |
| `content/process/index.mdx` | 1 |
| `content/domains/compliance-and-supervision/index.mdx` | 1 |
| `content/domains/records-and-documentation/index.mdx` | 1 |
| `content/domains/risk-and-insurance/index.mdx` | 2 |
| `content/domains/technology-and-client-experience/index.mdx` | 1 |
| `content/introduction/index.mdx` | 2 |
| `content/about/index.mdx` | 1 |
| `content/tools/index.mdx` | 1 |
| `content/tools/this-years-figures/index.mdx` | 1 |

Pages with **no** link to `/tools` or below: `content/domains/index.mdx`,
`content/process/design-the-firm/index.mdx`, `content/process/set-your-advice-approach/index.mdx`.

`/tools` itself is linked from exactly three places — the Related lists on
`content/introduction/index.mdx`, `content/process/index.mdx`, and
`content/tools/this-years-figures/index.mdx`. **`content/domains/index.mdx`'s Related
list does not link `/tools`**, though `/introduction` and `/process` both do.

---

## 3. Every promise, implication, or reference to a worksheet, checklist, template, planner, calculator, or tracker

Searched for: `worksheet`, `checklist`, `template`, `tracker`, `calculator`, `planner`,
`coming`, `will be`, `you can download`, `fill in`, `fill out`.

### 3a. Direct promises of tools that do not exist

**`content/tools/index.mdx`** — frontmatter `description`:

> Calculators, checklists, and worksheets that support the steps in The Independent Path.

**`content/tools/index.mdx`** — opening paragraph, under `# Tools`:

> This section holds the calculators, checklists, and worksheets that turn [The Independent Path](/process) into something you can act on, not just read about.

**`content/tools/index.mdx`** — under `## What's here`:

> It is updated once a year. Worksheets and checklists are coming.

These three are the only forward promises in `content/`. The first two are written in
the present tense about a section that holds one reference table; the third is the only
one that admits the gap.

### 3b. A worksheet the guide presumes the reader already has

**`content/process/choose-your-regulator/index.mdx:76`** — practitioner Callout:

> Keep the worksheet you used to calculate regulatory assets under management, not just the result, and date it, since the calculation recurs at every annual update and an examiner may ask how you got the figure.

This is the single strongest existing pull toward a specific worksheet. The page tells
the reader to keep a worksheet, names what it calculates, says it recurs annually, and
does not supply one.

### 3c. A tool specified in prose, in enough detail to build, with no artifact

**`content/process/write-the-disclosure-documents/index.mdx:52`** — under
`### Keep a record of what you delivered, to whom, and when`:

> For a solo firm a spreadsheet is enough: client, document, version date, delivery date.

Four named columns. A delivery log is specified here and nowhere provided.

**`content/process/stay-registered-and-compliant/index.mdx`** — `## Questions to ask yourself`:

> Do you have a single calendar, not a mental note, that tracks the annual amendment, the renewal notice, and the annual delivery obligation together?

and the practitioner Callout:

> Put the annual amendment, the renewal notice, and the annual delivery on the same calendar you use for everything else in the business, and review it on a fixed schedule rather than when something reminds you.

A compliance calendar named three times as a thing the reader must have, never supplied.

**`content/process/qualify-as-an-adviser/index.mdx:41`** — under
`### Handle the state requirements beyond the exam`:

> The obligation begins once you are registered. What you decide here is how you will track it, because a representative who misses a year is generally blocked from renewing until it is made up, and in a solo firm no one else is watching the calendar.

and `## Questions to ask yourself`:

> Who will track your continuing-education deadline once the firm is running?

### 3d. "Template" used pejoratively — a warning, not a promise

Five hits, all warning the reader *away* from a template. None of these creates an
obligation on `/tools`; they are listed because the word appears.

**`content/process/write-the-disclosure-documents/index.mdx:56`** — the adviser illustration:

> writes the brochure from the firm's own decisions rather than from a template

**`content/process/write-the-disclosure-documents/index.mdx:69`** — `## Common mistakes`:

> Starting from a template found elsewhere and leaving in services the firm does not offer, or conflicts it does not have.

**`content/process/write-the-policies/index.mdx:10`** — opening paragraph:

> all of them have to describe a real firm rather than a downloaded template

**`content/process/write-the-policies/index.mdx`** — `## Common mistakes`:

> Adopting a manual or code of ethics found online without rewriting it to match the firm's actual services, systems, and size.

**`content/glossary/index.mdx:171`** — `### Model rule`, a different sense of the word:

> A rule NASAA publishes as a template for the states

This matters for scoping: the guide has an explicit, repeated editorial position that
filling in someone else's document is the wrong move for disclosure documents and
policies. Any worksheet covering those two steps has to work as a set of questions,
not as a fill-in-the-blank draft, or it contradicts four passages of standing copy.

### 3e. "Checklist" used pejoratively

**`content/process/write-the-policies/index.mdx:72`** — `## Common mistakes`:

> Treating the business continuity plan as a data-backup checklist and leaving out who is authorized to act for clients if the owner cannot.

### 3f. Incidental hits (no bearing on tools)

`coming` in the ordinary sense on `content/domains/marketing-and-growth/index.mdx:67`,
`content/process/qualify-as-an-adviser/index.mdx:16` and `:58`; `fill in` in the
regulatory sense ("a part of the registration form that only state-registered advisers
fill in") on `content/process/write-the-disclosure-documents/index.mdx:34`.

No hits anywhere in `content/` for `tracker`, `planner`, `calculator` (outside the two
`/tools` landing-page promises), or `you can download`.

---

## 4. What each of the twelve step pages says the reader must decide, produce, or write down

Complete rather than selective, in each page's own words.

### Step 1 — Decide If Independence Fits

- "How many clients do you actually serve, what does each one generate in revenue, and how much of that revenue recurs automatically versus depends on you doing something new each year?"
- "you are only estimating, honestly, how portable your current book is likely to be"
- "it helps to write out, specifically, which pieces of control you actually want and which pieces of support you would miss"
- "Build a rough runway estimate: the one-time cost of forming the entity and setting up initial compliance and technology, ongoing costs like insurance and regulatory fees, and a stretch of time where revenue from the new firm is still ramping up while some expenses stay fixed."
- "the runway estimate would need to cover six months of both personal and business expenses, not just one or the other"
- "This step produces a written decision, not just a feeling. Put it in writing: a go or no-go call, your rough runway estimate in months, and the open questions you are carrying into later steps — which regulator you will register with, what kind of entity you will form, how you plan to approach current clients."
- Practitioner Callout: "Document the numbers you used for your runway estimate, the assumptions behind them, and your written go or no-go decision, since later steps will ask you to revisit each of them."
- Common mistake: "Treating the runway estimate as a single number instead of a range"

### Step 2 — Design the Firm

- "Describe, in one or two ordinary sentences, the kind of person or household the firm is built around: their stage of life, the kind of financial questions they tend to have, and roughly how many of them you expect to serve."
- "decide what you actually do for them. Is the firm built around one clearly described service, or a small set of them? Does the work happen once and then largely stop, or does it continue for as long as the relationship lasts?"
- "Decide whether you are building this alone or with others from day one: partners, an early hire, or outside help for the parts of the business you do not want to run yourself."
- "Put the design in writing, in a paragraph you could hand to someone else and have them understand the firm in under a minute."
- Practitioner Callout: "Document the client description, the service or services you settled on, and the staffing decision in the same place you kept your notes from the previous step, and date it."

### Step 3 — Set Your Advice Approach

- "Start with how you actually think about markets and risk, stated plainly enough that it would guide a real recommendation rather than sit as a slogan."
- "once you have a recommendation, who acts on it?" — the discretionary / non-discretionary decision
- "Decide, in plain terms, what falls inside your advice and what you will consistently send elsewhere."
- "Put the approach in writing, specific enough that someone else could read it and understand how you would actually treat a real client's situation."
- Practitioner Callout: "Write down the reasoning behind your approach, not just the conclusion — why this philosophy, why this level of discretion, why this boundary"
- "Keep these notes with the design decisions from the previous step so the two stay consistent"

### Step 4 — Form the Business

- "Choose an entity form" — sole proprietorship, LLC, corporation, partnership
- "The entity form and its tax treatment are separate decisions... choosing among those ways is an election you make with the IRS"
- "Read your state's requirements before you file, so the entity you create is one the regulator will accept."
- "Where you form the entity is separate from where you will work."
- "The entity's name has to be available in the state of formation... check it against your state's business name records and your regulator's naming rules together."
- "A registered agent is a person or business with a physical address in the state of formation who accepts legal and official mail for the entity."
- "you file the formation document with the state's business filing office and pay its filing fee"
- "An employer identification number, or EIN, is the federal tax identification number the IRS assigns to a business."
- "open a bank account in the entity's name. The bank will want both, along with whatever governing document the entity form calls for, such as an operating agreement or bylaws."
- "Keep the filed formation document, the governing document, the EIN confirmation, the registered agent details, and the bank records together, apart from your personal papers."
- Final H3: "the adviser holds a filed formation document, a governing document, an EIN, a registered agent on record, a business bank account, and a folder that keeps all of it apart from personal affairs"
- Practitioner Callout: "Date every document this step produces and keep the originals together... If an attorney or tax professional weighed in, keep a note of what they advised and when."

### Step 5 — Choose Your Regulator

- "This is a defined term, not a marketing number: it counts the securities portfolios your firm continuously and regularly supervises or manages, calculated the way the Form ADV General Instructions describe."
- "For a firm that does not exist yet, the figure is a projection of the assets you reasonably expect to manage once clients have moved, using the same definition."
- "Once you have the figure, compare it to the lines the rules draw."
- "before concluding that the default applies, read the list and confirm none of it describes your firm" — the exceptions check
- "confirm your conclusion with your home state's securities regulator, and with counsel if your figure sits anywhere near a line, before you file anything"
- Final H3: "You leave this step holding a written determination: the projected figure and how you calculated it, the regulator it points to, the exceptions you ruled out, and what the state regulator or counsel confirmed. It goes into the folder from the previous step"
- Practitioner Callout: "Keep the worksheet you used to calculate regulatory assets under management, not just the result, and date it... If your state published guidance on where advisers in the middle band register, keep a copy with the determination."

### Step 6 — Qualify as an Adviser

- "Before registering, a representative has to demonstrate competence, usually by passing a qualifying exam."
- "Certain professional designations can substitute for the exam in states that permit it."
- "What matters is the gap in your registration history, not how long ago you sat for the exam. Your record in CRD shows the dates, and your home state's regulator can tell you how it reads them."
- "You register on a separate uniform form for individuals, filed through CRD"
- "Answer against the record, not from memory: pull your current record, read every prior answer, and reconcile anything that has changed."
- "Many states require fingerprints from a representative of a state-registered firm so they can run a criminal background check."
- "The obligation begins once you are registered. What you decide here is how you will track it" — continuing education
- Final H3: "You leave this step holding evidence that you meet the exam requirement; a draft individual filing with every disclosure answer checked against the record; fingerprints taken or scheduled as your state requires; and a written note of the state's fee, its continuing-education rule, and what its staff confirmed."
- Practitioner Callout: "Keep the state's confirmation, the exam evidence, and a copy of the filing as submitted in the folder from earlier steps."

### Step 7 — Write the Disclosure Documents

- "The firm brochure tells a prospective client what your firm does, what it charges, and what conflicts of interest it has... the brochure is its Part 2A."
- "a second and much shorter document describes the individual who will actually advise the client... This is Part 2B of the same form"
- "the honest answer describes how you review your own work rather than naming someone above you. Say what that arrangement is"
- "A state-registered adviser also completes a part of the registration form that only state-registered advisers fill in... it is Part 1B of the form. Draft it now, because its answers have to agree with the brochure."
- SEC path only: "You also prepare a short client relationship summary, filed as Form CRS"
- "Every prospective client receives the firm brochure and the supplement for whoever will advise them, around the point the advisory agreement is signed."
- "delivery becomes a yearly obligation to existing clients: either the current brochure, or a summary of what changed materially since the last one with an offer to provide the full document"
- "the firm files an annual updating amendment after its fiscal year ends, confirming or correcting every answer on the form"
- "The form's instructions identify the ones that must be amended promptly when they stop being accurate"
- "That means keeping a dated copy of every version as delivered, not just the current one, and a log of the deliveries... For a solo firm a spreadsheet is enough: client, document, version date, delivery date."
- Final H3: "You leave this step holding a drafted firm brochure, a drafted supplement for yourself, the state-only portion answered consistently with both, a written note of the delivery and update deadlines your state sets, and a place to record deliveries."
- Practitioner Callout: "Write the brochure and the client agreement side by side... Keep every version dated and never overwrite the previous one"

### Step 8 — Write the Policies

- "The compliance manual is the written description of how your firm supervises itself: who reviews client accounts and how often, how conflicts get identified and handled, how marketing materials are checked before they go out, and how the firm protects client data."
- "A code of ethics sets the standard of conduct you hold yourself to as a fiduciary... It should say what you must do before trading in a security you also recommend to clients, how you report your own holdings and trades, and how you handle gifts and outside business activity"
- "in a solo firm the workable version is a personal log you keep and review against client trading yourself, on a schedule you write down and keep to"
- "Your privacy policy describes what personal information you collect from clients, how you use and share it, and how you protect it, and it has to be delivered to clients rather than just kept on file."
- "This plan answers a question a larger firm can absorb without much thought and a solo firm cannot: what happens to client accounts if you are unreachable, incapacitated, or unable to work for an extended stretch."
- "Name a specific person, describe what authority they would have and how they would get it, and put the arrangement in writing"
- "The last piece is the plan for keeping every record the firm is required to keep... Decide the format each record lives in, where it is stored, who can access it, and how it is backed up."
- Final H3: "By the end of this step you hold a finished, adviser-specific policy set: a compliance manual, a code of ethics, a privacy policy, a business continuity and succession plan, and a recordkeeping scheme that says where everything lives."
- Practitioner Callout: "Date and version every document in this set the way you will the brochure, and keep superseded versions rather than overwriting them"

### Step 9 — File and Get Approved

- "someone at the firm needs entitled access to IARD... Getting entitled means requesting an account, naming who at the firm may log in and submit filings, and verifying that person's identity."
- "treat the two applications as one submission and keep them moving on the same timeline"
- "Before you submit, read the two filings against each other the way a reviewer will: the services described in the brochure should match what the form says the firm does, and your disclosure answers on the individual filing should not contradict anything the firm discloses about itself."
- "fund the account before you submit, because an application with an unpaid fee does not move forward"
- SEC path only: "Confirm the list of states before you fund the account" — notice filings
- "Read each request carefully and answer exactly what was asked... Keep a copy of every comment and every response"
- "Confirm that date directly in the filing system rather than assuming silence means approval, and keep a copy of the confirmation with the rest of the firm's formation records."
- Final H3: "you hold a firm that is actually registered: an effective date, a confirmed status for both the firm and your individual filing, and a paper trail of every fee paid and every comment answered along the way"
- Practitioner Callout: "Log every filing event as it happens: the entitlement request, each submission, each fee paid, each comment received and answered, and the confirmed effective date."

### Step 10 — Set Up Custody and Technology

- "Selecting one means confirming it can actually hold and trade the account types and instruments your practice plans to offer, then working through its onboarding process to set up the account structure, your trading authority on client accounts, and, if you bill fees by deducting them directly, the mechanics for doing that."
- "Whether a given arrangement counts, and what it triggers, depends on the exact rule your state administers."
- "a state's custody rule generally requires notifying the regulator that you have custody, keeping the assets with a qualified custodian, and making sure the custodian sends account statements directly to clients rather than through you"
- "three connections have to work before you can manage an account: a data feed... a reconciliation process that checks your books against the custodian's on a regular schedule, and a way to route trades"
- "Test all three before they carry a real client's money."
- "a handful of systems have to exist before day one: something to track and report on client holdings, something to hold the records the firm is required to keep, and a way to document the compliance work"
- Adviser illustration: "writes the answer into the compliance manual instead of leaving it as something remembered"
- Final H3: "you hold a firm that can take on a client in practice, not just on paper: a signed custodial relationship, a custody arrangement that satisfies the applicable rule, data and reconciliation pipes that have been tested, and the baseline systems running underneath all of it"
- Practitioner Callout: "Keep a dated record of every step in the custodian relationship: the account-opening agreements, your trading authority, the fee-deduction authorization if you use one, and the results of your first reconciliation test."

### Step 11 — Leave and Transition Clients

- "Timing your resignation is a judgment call shaped by your employment agreement, any restrictive covenants in it, and whether your current firm participates in a recruiting protocol"
- "Whether your firm belongs to one, and what it actually permits, is a fact to confirm directly"
- "your current firm files Form U5 documenting your departure... read it once it posts and know how to dispute it if it misstates what happened"
- "Client contact information, account numbers, and performance history are three things departing advisers most want to bring along, and three things most likely to be restricted"
- "Get counsel on your actual situation before copying a single file"
- "In practice that means a signed advisory agreement, delivery of the new firm's disclosure brochure and any related supplement, and enough plain explanation of what is changing (the firm, the fees, the custodian) that the client's yes is informed."
- "Keep that consent separate from the paperwork that follows it... that authorization is its own document, and the next step depends on it existing in writing"
- "you submit a transfer request identifying the account and the receiving custodian"
- "Some account types, proprietary investments, or unusual holdings can require extra paperwork or cannot transfer in kind, so flag those cases to the client before the request goes in"
- Adviser illustration: "the adviser sequences the outreach rather than announcing to everyone at once and starts with the households whose accounts look simplest to move"
- Final H3: "you hold a firm with clients who chose it freely, signed a real advisory agreement, and whose accounts have actually landed at the new custodian"

### Step 12 — Stay Registered and Compliant

- "Confirm the actual deadline each year on This year's figures rather than trusting your memory of when it fell last time."
- "Ask, every time something about the firm changes, whether it touches one of those items." — the promptly reportable list
- "the firm pays a renewal fee to keep its registration in effect. Miss the renewal window and the registration can lapse"
- "Each year, deliver the current brochure, or a summary of what changed materially since the last one with an offer to send the full document, and log that delivery the way you logged the first one."
- "Every amendment, delivery, and client communication adds to what the scheme has to capture"
- Adviser illustration: "the adviser rereads the list of promptly reportable items at each quarter's end rather than trusting recall"
- Final H3: "What you leave holding instead is a running calendar of amendments, renewals, deliveries, and retained records that repeats every year the firm operates"
- Questions: "Do you have a single calendar, not a mental note, that tracks the annual amendment, the renewal notice, and the annual delivery obligation together?"
- Practitioner Callout: "Put the annual amendment, the renewal notice, and the annual delivery on the same calendar you use for everything else in the business"

---

## 5. Everything in `CLAUDE.md` that would govern a new page under `content/tools/`

**A tools page template exists, and it is a worksheet template.** `CLAUDE.md` §"Page
templates" carries a subsection headed "Worksheet page (tools):" with a fixed H2 order,
a word range, and its own conventions. It also states that checklists use the same
skeleton with two sections renamed. So the question "are tool pages governed at all"
is already answered *for worksheets and checklists*; it is unanswered for a calculator,
and `this-years-figures` does not follow the skeleton.

### 5a. The worksheet skeleton, quoted in full

> Worksheet page (tools):
> - Path: `content/tools/<slug>/index.mdx`, one folder per page.
> - 700–1,000 words. What counts toward the number is set by "Word count basis" above; measure with `pnpm wordcount <path>`.
> - Second person, plain English.
> - H2 sections in this order, headings only: "What this measures", "Before you start", first input section, second input section, "The result", "What the number does and does not tell you", "What to do with it", "For practitioners" (Callout), then Related.
> - Input section names are worksheet-specific: name each for the two things the worksheet gathers.
> - Checklists use the same skeleton with the input sections named "Goals to consider" / "Your goals" and "The result" renamed "Your short list".
> - Tables have three columns at most so they render on a phone without horizontal scrolling.
> - No regulated figures. Name the concept and link the matching section of /tools/this-years-figures.
> - "For practitioners" is a Callout and comes last, followed only by the Related list.
> - No disclaimer.
> - Example values in tables and worked examples are round hypothetical numbers.

### 5b. Word count

From §"Word count basis" → "### The ceilings":

> - Step pages: hard range 900–1,300 words.
> - Area pages: soft range 700–1,300 words, soft at both ends.
> - Worksheet pages: 700–1,000 words.

The ceilings section does not say whether 700–1,000 is hard or soft — "hard" and "soft"
are both stated explicitly for the other two and neither word appears on the worksheet
line. §"When a page is outside its bounds" names only area pages and step pages in its
two dispositions; worksheet pages are not addressed there.

The "What the count counts" basis applies to all pages: headings, tables, link URLs,
frontmatter, imports, JSX, Related/Go deeper lists, SEC-path callouts and the standard
disclaimer are all excluded; body prose, worked examples and non-SEC-path callouts count.
Note the effect on a worksheet: **all table content is excluded**, so a worksheet whose
substance is tables can be hard to get to 700 counted words without prose padding —
and padding is explicitly barred ("Padding to clear a floor is not a remedy").

### 5c. Disclaimer

> It appears in a Callout on the four section landing pages — introduction, process, domains, tools — and on /tools/this-years-figures. It is never repeated on step, area, glossary, or about pages.

The worksheet template independently says "No disclaimer." `this-years-figures` is named
as a specific exception, not a pattern for tools pages generally.

### 5d. Related list

§"Writing style":

> Landing pages and any page outside content/process/ and content/domains/: one H1, a two-sentence summary under it, then H2 sections. End with a "Related" list linking to 2–4 other pages. Pages under those two folders follow the Page templates section instead

A tools page is outside those two folders, so it takes the H1 + two-sentence summary +
H2s + Related-list shape. The worksheet skeleton is consistent with this: it ends
"'For practitioners' (Callout), then Related."

**Tension to note:** the general rule says "one H1, a two-sentence summary under it,
then H2 sections," while the worksheet skeleton's first H2 is "What this measures" and
says nothing about a summary paragraph. `this-years-figures` as built has a
one-paragraph opener, not two sentences.

### 5e. "## Next step"

There is no "## Next step" anywhere in the worksheet skeleton. It belongs to the step
page template only (item 10: "H2 'Next step' — a single sentence linking the next
/process/ route"). The word-count exclusion for it is scoped to "a single sentence under
that exact heading at the end of a step page." A tools page has none.

### 5f. Frontmatter

From the area skeleton, item 1: "Frontmatter with `title` and `description`." The step
template, item 1: "Frontmatter with `title` (the full step name) and `description` (one
sentence, plain language)." The worksheet skeleton does not restate this. `content/tools/index.mdx`
additionally carries `asIndexPage: true`; `this-years-figures/index.mdx` carries only
`title` and `description`.

### 5g. Slugs and folders

Hard rule 8:

> One folder per page: `content/<section>/<slug>/index.mdx`. Slugs are lowercase-kebab-case and match the folder name, no number prefixes.

Worksheet template, restated: "Path: `content/tools/<slug>/index.mdx`, one folder per page."

### 5h. Sidebar labels

§"Sidebar labels" governs `content/process/_meta.js` and `content/domains/_meta.js` only:

> Because Nextra 4 rejects `_meta.js` keys with no matching page, add a label to `content/process/_meta.js` or `content/domains/_meta.js` only in the same PR that adds its page — not before.

The Nextra-4 constraint it describes (a `_meta.js` key with no matching page fails the
build) is a property of Nextra, not of those two files, so it applies to
`content/tools/_meta.js` identically — but `CLAUDE.md` states no label convention for
tools, and no shortening rule. The existing single entry is the untruncated page title.

### 5i. Figures rule

Hard rule 5:

> Do not invent statistics, thresholds, limits, deadlines, or rates. Any number set by law, regulation, or an agency belongs on /tools/this-years-figures with its year and source, never on the page that refers to it — name the concept in plain language there and link instead. Round hypothetical numbers in worked examples are fine and encouraged.

Worksheet template: "No regulated figures. Name the concept and link the matching section
of /tools/this-years-figures." and "Example values in tables and worked examples are round
hypothetical numbers."

Note the worksheet rule says link **the matching section**, i.e. by anchor — stricter than
what step and area pages currently do, which is link the page bare (see §2).

### 5j. Glossary linking

§"Writing style": "Define a term the first time it appears and link it to the glossary."
§"Glossary": "Links to glossary terms from any page use the anchor form /glossary#term-id;
a plural link text maps to the singular term's id." §"Glossary running list": "Every term
that any page links to /glossary. Add a term here when a new page links it."

Both are written as applying to any page, so a worksheet inherits them, and a worksheet
that links a new term must add it to the running list in the same PR.

### 5k. Rules written as step-only or area-only, that a tools page does *not* inherit

- The recurring adviser hypothetical — §"### The recurring adviser" opens "Step pages follow one recurring hypothetical." A worksheet has no adviser passage, and no fixed placement rule for one.
- "Where this starts in the process" — area pages only.
- "Key ideas" / "Common misconceptions" / "Go deeper" — area pages only.
- "Why it matters" / "What actually happens" / "Questions to ask yourself" / "Common mistakes" / "Which practice areas apply" / "Next step" — step pages only.
- "No paragraph longer than four sentences" — stated under "Step-page rules," not repeated for worksheets.
- Mirroring between "Where this starts in the process" and "Which practice areas apply" — step/area only; a worksheet is outside that graph entirely, and nothing requires any step or area page to link a worksheet.

### 5l. Rules written as applying to all pages

- Hard rules 1–9 in full ("The hard rules and writing style above apply in full to page bodies, headings, and frontmatter, including titles, descriptions, and slugs.")
- No vendor names (hard rule 1). This bites harder on a technology or custody worksheet than anywhere else in the guide.
- Original writing, primary-source citation (hard rule 3), educational not advisory (hard rule 4).
- Second person, plain English, active voice, short paragraphs.
- "Use Nextra callouts sparingly: one 'Note' or 'Warning' per page at most, except SEC-path callouts" — the worksheet's "For practitioners" is `type="info"`, matching how step and area pages use it.
- The SEC-path callout: "It applies to step pages and area pages alike; it is not part of either skeleton, because it goes wherever the divergence falls." Tools pages are not named. `this-years-figures` handles divergence in table cells instead.
- "Tables for comparisons; bullet lists for steps; prose for explanation." Plus the worksheet-specific three-column cap.
- "Internal links use the site's existing slugs. Check the actual paths under content/ before writing a link."
- The Callout import line, exactly: `import { Callout } from 'nextra/components'`
- "Keep the build warning-free." pnpm only.

---

## 6. How `content/tools/this-years-figures/index.mdx` is structured

180 lines. Frontmatter (`title`, `description` — no `asIndexPage`), the Callout import,
H1, then:

**`## How to read this page`** — a four-paragraph preamble followed by the standard
disclaimer in a `<Callout type="info">`. The preamble explains the Year column's
"Set by statute" / "Set by rule" values, the "Varies by state" convention, and the
`NEEDS-VALUE` placeholder.

**19 H2 sections, each with an explicit id**, in the form `## Section Name [#slug]`.
Ten step sections first, in step order, then nine practice-area sections in site order:

| # | Heading | id |
| --- | --- | --- |
| 1 | `## Step 1 — Decide If Independence Fits` | `#decide-if-independence-fits` |
| 2 | `## Step 4 — Form the Business` | `#form-the-business` |
| 3 | `## Step 5 — Choose Your Regulator` | `#choose-your-regulator` |
| 4 | `## Step 6 — Qualify as an Adviser` | `#qualify-as-an-adviser` |
| 5 | `## Step 7 — Write the Disclosure Documents` | `#write-the-disclosure-documents` |
| 6 | `## Step 8 — Write the Policies` | `#write-the-policies` |
| 7 | `## Step 9 — File and Get Approved` | `#file-and-get-approved` |
| 8 | `## Step 10 — Set Up Custody and Technology` | `#set-up-custody-and-technology` |
| 9 | `## Step 11 — Leave and Transition Clients` | `#leave-and-transition-clients` |
| 10 | `## Step 12 — Stay Registered and Compliant` | `#stay-registered-and-compliant` |
| 11 | `## Service and Pricing Models` | `#service-and-pricing-models` |
| 12 | `## Advice and Planning Process` | `#advice-and-planning-process` |
| 13 | `## Technology and Client Experience` | `#technology-and-client-experience` |
| 14 | `## Client Education` | `#client-education` |
| 15 | `## Marketing and Growth` | `#marketing-and-growth` |
| 16 | `## Compliance and Supervision` | `#compliance-and-supervision` |
| 17 | `## Records and Documentation` | `#records-and-documentation` |
| 18 | `## Firm Economics` | `#firm-economics` |
| 19 | `## Risk and Insurance` | `#risk-and-insurance` |

Steps 2 and 3 have no section, because neither step produces a regulated figure. The id
is the step or area slug, without the "Step N — " prefix that appears in the visible
heading. Area-section ids match the `/domains/<slug>` route exactly.

**Row schema**, identical in every section: a five-column table,
`| Concept | What it governs | Value | Year | Source |`. One figure per row. The
"What it governs" cell often runs several sentences and carries the model rule's own
baseline numbers when the Value reads "Varies by state" — the numbers are kept out of
the Value column deliberately, because "a reader reads that column as the answer that
binds them."

Two sections — `#records-and-documentation` and `#firm-economics` — carry a bulleted
cross-reference list alongside their table, pointing at rows that live in another
section, in the form
`- Filing system fee — [Step 9 — File and Get Approved](#file-and-get-approved)`.
That is the page's own internal same-page anchor convention.

**`## Related`** at the end: `[Tools](/tools)`, `[The Independent Path](/process)`,
`[Practice Areas](/domains)`.

**How other pages link into the anchors:** only `content/glossary/index.mdx` does —
26 links, 24 of them anchored, in the fixed closing form "… is on
[This year's figures](/tools/this-years-figures#anchor)." Step and area pages use the
same closing sentence pattern but link the page bare, with no anchor. Seven of the
nineteen sections are never reached by anchor from anywhere: `#form-the-business`,
`#service-and-pricing-models`, `#advice-and-planning-process`,
`#technology-and-client-experience`, `#client-education`, `#records-and-documentation`,
`#firm-economics`.

---

## 7. `FOLLOWUPS.md` items touching `/tools`, worksheets, or the figures page

Three items, plus one left-open block. No item anywhere in `FOLLOWUPS.md` mentions a
worksheet, checklist, calculator, tracker, or planner. Everything filed against `/tools`
is about the figures page.

### Item 2 — Performance-based fees / Rule 205-3 qualified client thresholds

> The Service and Pricing Models page deliberately omits performance-based fees and the qualified-client thresholds that gate them under Advisers Act Rule 205-3 and its state analogs.
>
> **What it needs:** a row (or rows) on `/tools/this-years-figures` for the qualified-client net-worth and assets-under-management thresholds, and — wherever the topic is eventually covered — an SEC-path callout, since the federal and state versions of the performance-fee exemption diverge.
>
> **What blocks it:** a decision on whether the figures-page row is added on its own, ahead of any page actually covering the topic, or whether the topic gets covered on a page first and the row follows from that.
>
> **Belongs to:** build order item 4 (the figures page). Decide there.

### Item 16 — Whether the clearing corporation has republished the account transfer windows since the shortened settlement cycle

> The Step 11 row for the standardized account transfer window ... carries the one-business-day validation window and the three-business-day completion window as the rule states them. The rule also provides, in both paragraphs, that those time frames change as determined from time to time in publications relating to the transfer facility by the clearing corporation. The rule text alone therefore cannot confirm the windows currently in force ...
>
> **What it needs:** check the clearing corporation's own publications relating to the transfer facility for any change to the one-business-day and three-business-day windows since the shortened settlement cycle took effect, and update the row's Value if one has been published. Not answered here.
>
> **Belongs to:** the yearly figures-page update — this is an annual check, not a one-time fix.

### Item 17 — The figures page preamble names three Source forms for "Varies by state" rows; CLAUDE.md permits four

> The "How to read this page" preamble ... tells the reader that where a row's Value reads "Varies by state," the Source column instead points at what you consult to find your own state's figure, "which is usually your state securities regulator, the model rule the states drew on, or the state office that charges the fee." Those are three of the four forms CLAUDE.md's row conventions permit for such a row. The fourth is missing: the varies-by-state rule says the Source links a federal locator page where one exists, and only otherwise names the state office in plain text, so the locator page is the first-choice form rather than an edge case.
>
> Nothing on the page is currently misdescribed by the omission. All 26 "Varies by state" rows take one of the three forms the preamble names ...
>
> **What it needs:** a decision on which of the two documents moves — add the fourth form to the preamble, or reconsider whether CLAUDE.md should keep a first-choice form that no row has ever used — and then the edit to whichever one it is. Not answered here.
>
> **Belongs to:** the consistency pass (build order item 5), or the next figures-page pass if one comes first.

### Item 15's left-open block — "Left open: two step pages now exceed the hard 900–1,300 word range"

Filed under the figures-page repair pass; the overage was later resolved by the two
recorded exceptions now in `CLAUDE.md` §"Recorded exceptions." Included here only because
the block sits inside a `/tools`-scoped item. It is not open work against `/tools`.

### Item 3 — repo-wide source-currency sweep

Does not name `/tools`, but its scope ("revisit every citation on those seven pages")
is the same kind of check the figures page's Source column would need. Listed for
completeness; not a `/tools` item.

---

## Flat list of distinct artifacts found in §4

Collapsed where two or more steps call for the same thing. 36 artifacts.

| # | Artifact | Steps that call for it |
| --- | --- | --- |
| 1 | Book stocktake — client count, revenue per client, recurring vs non-recurring share | 1 |
| 2 | Portability estimate for the current book | 1, 11 |
| 3 | Control-vs-support trade list — what you gain, what you lose | 1 |
| 4 | Runway estimate, as a range, in months, covering personal and business expenses | 1 |
| 5 | Written go / no-go decision | 1 |
| 6 | Open-questions list carried forward (regulator, entity, client approach) | 1 |
| 7 | Client description, one or two sentences | 2 |
| 8 | Service definition — one service or a small set; one-time or ongoing | 2 |
| 9 | Staffing decision | 2 |
| 10 | The firm-design paragraph | 2 |
| 11 | Investment philosophy statement | 3 |
| 12 | Discretion decision — discretionary or not | 3, 10 |
| 13 | Scope boundaries and referral-out list | 3 |
| 14 | Written reasoning behind the advice approach | 3 |
| 15 | Entity form + tax treatment decision, taken to counsel and a tax professional | 4 |
| 16 | State of formation decision | 4 |
| 17 | Entity name cleared against state records and regulator naming rules | 4 |
| 18 | Registered agent appointment | 4 |
| 19 | The formation packet — filed formation document, governing document, EIN confirmation, agent details, bank records, kept apart from personal papers and dated | 4, 9 (effective-date confirmation joins it) |
| 20 | Regulatory assets under management calculation **worksheet**, dated, kept alongside the result | 5, 12 (recurs at every annual update) |
| 21 | Written regulator determination — figure, method, regulator, exceptions ruled out, what the state or counsel confirmed | 5 |
| 22 | Exam / designation qualification evidence, and the registration-gap check | 6 |
| 23 | Draft individual filing with every disclosure answer reconciled against the CRD record | 6, 9 |
| 24 | Fingerprints taken or scheduled | 6 |
| 25 | State-requirements note — representative fee, CE rule, what state staff confirmed | 6 |
| 26 | Continuing-education tracking method | 6, 12 |
| 27 | Disclosure set — firm brochure (2A), supplement (2B), state-only portion (1B), answered consistently | 7, 9 |
| 28 | Delivery log — client, document, version date, delivery date — plus a dated copy of every version as delivered | 7, 11, 12 |
| 29 | Policy set — compliance manual, code of ethics (with personal trading log and review schedule), privacy policy, business continuity and succession plan naming a person, recordkeeping scheme | 8, 10 (custody answer written into the manual), 12 (scheme kept current) |
| 30 | Filing log — entitlement request, each submission, each fee paid, each comment and response, confirmed effective date | 9 |
| 31 | Custody file — custodian agreements, trading authority, fee-deduction authorization, custody determination, first reconciliation test results; plus tested data feed, reconciliation schedule, trade routing, and baseline systems | 10 |
| 32 | Departure file — employment agreement and covenant review, recruiting-protocol confirmation, counsel's answer on what can be taken, the Form U5 as filed | 11 |
| 33 | Per-client transition packet — signed advisory agreement, documented brochure delivery, separate written account-transfer authorization, flagged non-transferable holdings | 11 |
| 34 | Client outreach sequence | 11 |
| 35 | Compliance calendar — annual updating amendment, renewal window, annual delivery, on one calendar reviewed on a fixed schedule | 12 |
| 36 | Promptly-reportable-items list, reviewed on a fixed schedule | 12 |

### Artifacts that recur rather than finish

Five of these are explicitly annual or continuous, which matters for whether a worksheet
or a checklist is the right shape: #20 (RAUM calculation, "recurs at every annual
update"), #26 (CE tracking), #28 (delivery log), #35 (compliance calendar), #36
(promptly-reportable list). Steps 1–11 each produce something that finishes; step 12
produces only recurring instruments.

### Artifacts the guide already tells the reader not to fill in from a form

#27 and #29 — the disclosure set and the policy set. Four separate passages (§3d) warn
against starting from someone else's template. A worksheet covering either has to be
questions, not a draft.

---

## Contradictions between the landing page's promise, the links that exist, and what CLAUDE.md permits

**1. The landing page describes a section that does not exist yet, in the present tense.**
Both the frontmatter `description` and the opening sentence say `/tools` *holds*
calculators, checklists and worksheets. It holds one reference table. Only the third
sentence, under `## What's here`, concedes "Worksheets and checklists are coming." Note
that "calculators" appears in the two present-tense promises and is dropped from the
concession — so nothing on the page ever promises a calculator will arrive, while two
sentences assert one is already there.

**2. `CLAUDE.md` has no calculator template.** The worksheet skeleton covers worksheets
and, by an explicit renaming rule, checklists. A calculator is promised twice on the
landing page and governed nowhere. Either it is a worksheet by another name, or the
landing page's word should go.

**3. Step 5 tells the reader to keep a worksheet the guide does not supply.** "Keep the
worksheet you used to calculate regulatory assets under management, not just the result,
and date it." This is the only place in `content/` that refers to a specific worksheet as
a thing the reader already has. It is also a figure-driven artifact, which collides with
the worksheet rule "No regulated figures" — a RAUM worksheet would have to name the
thresholds as concepts and link `#decide-if-independence-fits` for the numbers, which is
exactly what the rule contemplates, but it means the worksheet cannot tell the reader
which side of the line they landed on without sending them off-page.

**4. The worksheet rule requires anchored figures links; no existing step or area page
uses one.** "Name the concept and link the matching section of /tools/this-years-figures."
All 24 anchored links in the repo come from the glossary. Every step and area page links
the page bare. A worksheet set built to the rule would be the first non-glossary content
to link by anchor — a visible inconsistency with the 42 bare links already in place,
resolvable either way but not currently ruled on.

**5. `content/domains/index.mdx` does not link `/tools`.** `/introduction` and `/process`
both carry it in their Related lists. The tools landing page's own Related list links
`/process`, `/domains` and `/glossary`. So the link from the practice areas to tools is
missing in one direction only. Not a `/tools` rule violation — the Related list is capped
at 2–4 and `/domains` already carries three — but worth naming before a worksheet set
raises the traffic `/tools` should be receiving.

**6. Seven of the nineteen figures-page sections are unreachable by anchor.** Four of the
seven are areas whose own page links the figures page bare, twice in one case
(`firm-economics`). A worksheet set following the anchored-link rule would deepen the
split rather than close it.

**7. The word floor and the table exclusion pull against each other.** Worksheet pages
are 700–1,000 words; `pnpm wordcount` excludes all table content and all heading text.
A worksheet whose value is a three-column table of prompts counts almost none of its own
substance. `CLAUDE.md` bars padding to clear a floor and does not say whether the
worksheet range is hard or soft, and §"When a page is outside its bounds" names only
step and area pages in its dispositions. A worksheet page that measures 500 words has no
recorded disposition path.

**8. The general "two-sentence summary" rule and the worksheet skeleton disagree about
the opening.** §"Writing style" requires a two-sentence summary under the H1 for any page
outside `process/` and `domains/`; the worksheet skeleton's list of H2s starts at "What
this measures" and is silent on an opener. `this-years-figures` as built has a
one-sentence-plus opener and does not follow the worksheet skeleton at all.

**9. `content/tools/_meta.js` has no label convention.** The shortening rule and the
same-PR-as-the-page rule are written for `process/` and `domains/` only. The Nextra 4
constraint behind the same-PR rule applies to tools identically, so the operational
requirement carries even though `CLAUDE.md` does not state it.

---

## Confirmation

`content/` and `CLAUDE.md` are untouched on this branch. The only change is the addition
of this file at the repo root.
