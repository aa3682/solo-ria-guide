# The Independent Path — repo instructions

## What this is
An open, public reference site on establishing and running an independent registered investment advisory (RIA) firm in the United States, built as a Nextra 4 docs site. Visual reference only: https://www.promptingguide.ai/ — match its look using the stock nextra-theme-docs; never copy its content or components.

Audience: primary — someone who already works in the industry, most often at a broker-dealer or a larger advisory firm, and is thinking about going independent. Secondary — anyone broader trying to decide whether the independent model fits them at all, before they take any concrete step. Write for a smart adult with no background in the subject; add practitioner depth in clearly marked subsections rather than separate pages.

## Default scenario
The guide's default reader is a state-registered adviser: assets under management fall under the threshold that would require SEC registration instead. See [This year's figures](/tools/this-years-figures) for the current AUM threshold. Where the SEC-registered path works differently, the relevant page says so and flags the divergence rather than silently assuming state registration throughout.

## Sourcing
Public primary sources only:
- SEC rules and no-action guidance
- Form ADV instructions
- State securities regulators and NASAA
- IARD/CRD fee schedules
- FINRA exam requirements
- State entity-formation resources
- IRS guidance
- State insurance regulators, for E&O insurance and bonding

Use these for "Go deeper" links on area pages and for any fact that needs support elsewhere. All prose is original writing — no verbatim or lightly paraphrased text from statutes, regulations, courses, or vendor material.

## Source currency
A link that loads is not necessarily a link that is current. Liveness checks catch dead URLs, not superseded rules.
- Where the same authority publishes both a continuously updated codification and a dated snapshot, cite the codification: eCFR over a dated CFR PDF, a regulator's current consolidated rule over a superseded predecessor still hosted beside it.
- This preference applies only between versions of the same governing authority. Never change which authority a claim rests on in order to get a better source type. Many claims in this guide rest on state securities regulators, NASAA model rules, IARD/CRD fee schedules, and state entity-formation and insurance resources, none of which publish continuously updated codifications. Where the governing authority publishes only dated snapshots, a dated snapshot is the correct citation.
- For any dated document cited, the build report must state which version is current, and must flag any cited document that has a known successor even where the URL still resolves.

## Hard rules
1. No custodian, compliance-software vendor, E&O insurer, or consultant names anywhere: page copy, titles, slugs, frontmatter, alt text, README, comments, commit messages. Vendors are named only on /tools/this-years-figures, which as built names none; nothing commercial is linked anywhere on the site, and there are no affiliate links. Describe vendor categories generically instead (for example, "a qualified custodian").
2. Statutes, agencies, and uniform regulatory forms (Form ADV, Form U4) are primary-source vocabulary and may be named; the vendor-name rule covers commercial parties only. Exam identifiers and designation names remain regulated figures and belong on /tools/this-years-figures.
3. All content is original writing. See Sourcing above for where facts come from; cite a public primary source with a link whenever a fact needs support.
4. Content is educational, not individualized advice. See Disclaimer below for exactly where the disclaimer text appears and where it does not.
5. Do not invent statistics, thresholds, limits, deadlines, or rates. Any number set by law, regulation, or an agency belongs on /tools/this-years-figures with its year and source, never on the page that refers to it — name the concept in plain language there and link instead. Round hypothetical numbers in worked examples are fine and encouraged. If a source can't be confirmed, write "[VERIFY]" inline and list it in the report.
6. No personal data, no real client examples. Worked examples use obviously fictional people.
7. No personal name, employer, or credential anywhere in the repo — not on pages, not in metadata, not in commit messages, not in code comments.
8. One folder per page: `content/<section>/<slug>/index.mdx`. Slugs are lowercase-kebab-case and match the folder name, no number prefixes.
9. Stock nextra-theme-docs look. Custom CSS limited to the one accent-color variable in `app/globals.css`. No custom components unless the owner asks.

## Disclaimer
The standard disclaimer, verbatim:

> This guide is educational material about how independent advisory firms are established and run. It is not legal, compliance, tax, or investment advice, and it does not create an advisory or professional relationship. Registration requirements vary by state and change over time. Verify anything here against the current rules of your regulator, and get your own counsel before acting.

It appears in a Callout on the four section landing pages — introduction, process, domains, tools — and on /tools/this-years-figures. It is never repeated on step, area, glossary, or about pages.

## Attribution and license
- The guide is published under the project name The Independent Path, not a personal name. No personal name, employer, credential, or license appears anywhere in the repo, on pages or in metadata.
- Prose in `content/` is licensed under CC BY 4.0; code is licensed under MIT. This is stated in README.md and, once that page is written, on /about.
- Writing the About page's authorship description is out of scope until a prompt asks for it; when it is written, it describes the author without a personal name, employer, credential, or license.

## Structure
Top-level sections, in this sidebar order:
1. introduction
2. process — "The Independent Path," 12 chronological steps
3. domains — "Practice Areas," 9 standing subject areas. The sidebar label and the route deliberately differ (`/domains`, not `/practice-areas`) — do not "fix" this.
4. tools — calculators, checklists, worksheets
5. glossary
6. about

A step is chronological and finishes: it says what must be decided or produced at that point in the sequence, and once it is done you move to the next one. An area is standing subject matter that never finishes: it says how to think about a subject over the life of the firm. Step pages link to the areas that apply at that point rather than restating them.

Slugs are lowercase-kebab-case and match the folder name.

### The 12 steps (content/process/<slug>/index.mdx)
In order:
1. Decide If Independence Fits — `decide-if-independence-fits`
2. Design the Firm — `design-the-firm`
3. Set Your Advice Approach — `set-your-advice-approach`
4. Form the Business — `form-the-business`
5. Choose Your Regulator — `choose-your-regulator`
6. Qualify as an Adviser — `qualify-as-an-adviser`
7. Write the Disclosure Documents — `write-the-disclosure-documents`
8. Write the Policies — `write-the-policies`
9. File and Get Approved — `file-and-get-approved`
10. Set Up Custody and Technology — `set-up-custody-and-technology`
11. Leave and Transition Clients — `leave-and-transition-clients`
12. Stay Registered and Compliant — `stay-registered-and-compliant`

### The 9 areas (content/domains/<slug>/index.mdx)
1. Service and Pricing Models — `service-and-pricing-models`
2. Advice and Planning Process — `advice-and-planning-process`
3. Technology and Client Experience — `technology-and-client-experience`
4. Client Education — `client-education`
5. Marketing and Growth — `marketing-and-growth`
6. Compliance and Supervision — `compliance-and-supervision`
7. Records and Documentation — `records-and-documentation`
8. Firm Economics — `firm-economics`
9. Risk and Insurance — `risk-and-insurance`

### Sidebar labels
Sidebar labels are shortened for phone reading and deliberately do not match the page titles above. Because Nextra 4 rejects `_meta.js` keys with no matching page, add a label to `content/process/_meta.js` or `content/domains/_meta.js` only in the same PR that adds its page — not before. Both files exist and carry all twelve steps and all nine areas. A PR that adds a page adds that page's entry to the existing file. Never leave either file with an empty `export default {}` — Nextra 4 fails the build with a prerender error.

Steps, page title → sidebar label:
- Decide If Independence Fits → Is It For You
- Design the Firm → Design the Firm
- Set Your Advice Approach → Advice Approach
- Form the Business → Form the Business
- Choose Your Regulator → Choose Regulator
- Qualify as an Adviser → Qualify
- Write the Disclosure Documents → Disclosure Documents
- Write the Policies → Policies
- File and Get Approved → File and Approval
- Set Up Custody and Technology → Custody and Tech
- Leave and Transition Clients → Leave and Transition
- Stay Registered and Compliant → Stay Compliant

Areas, page title → sidebar label:
- Service and Pricing Models → Service and Pricing
- Advice and Planning Process → Advice and Planning
- Technology and Client Experience → Technology and CX
- Client Education → Client Education
- Marketing and Growth → Marketing and Growth
- Compliance and Supervision → Compliance
- Records and Documentation → Records
- Firm Economics → Firm Economics
- Risk and Insurance → Risk and Insurance

## Stack
- Nextra 4, nextra-theme-docs, Next.js App Router, MDX in content/
- pnpm only. Never use npm or yarn.
- Keep the build warning-free.
- Custom CSS limited to one accent color variable. No custom components unless the owner asks.

## Writing style
- Plain English, short paragraphs, active voice. Define a term the first time it appears and link it to the glossary.
- Landing pages and any page outside content/process/ and content/domains/: one H1, a two-sentence summary under it, then H2 sections. End with a "Related" list linking to 2–4 other pages. Pages under those two folders follow the Page templates section instead: the opening paragraph replaces the summary, and the cross-link sections replace the Related list.
- Use Nextra callouts sparingly: one "Note" or "Warning" per page at most, except SEC-path callouts, which are exempt from that cap. The SEC-path callout's own rule — used only where the paths actually diverge — is what limits how many a page carries.
- Tables for comparisons; bullet lists for steps; prose for explanation.

## Word count basis
The governing statement of what the word count counts. The area and step templates below set the numbers; this section sets the basis they are measured on. Measure with `pnpm wordcount <path>`, which implements this section exactly.

### What the count counts
The ceiling counts only what the writer chose to write at length. Content mandated by another rule in this file does not count against it.

Excluded:
- YAML frontmatter, import statements, JSX/component tags and their attributes, HTML comments
- Markdown link URLs. Visible link text counts wherever the surrounding text counts
- All heading text, at every level
- All table content
- The "Related" lists and the area-page "Go deeper" lists, including their headings
- SEC-path callouts — the fixed-pattern callout opening "If you are on the SEC path:"
- The standard educational-content disclaimer
- The one-sentence line under the fixed "## Next step" heading at the end of a step page

Counted:
- Body prose
- Cross-link bullets that sit in body prose rather than under a "Related" or "Go deeper" heading, such as the "Which practice areas apply" list on a step page
- Worked examples
- Every callout that is not an SEC-path callout or the standard disclaimer, including the "For practitioners" callout

The "Next step" exclusion is bounded: it applies only to a single sentence under that exact heading at the end of the page. Anything longer there is authored prose and counts.

### The ceilings
- Step pages: hard range 900–1,300 words.
- Area pages: soft ceiling 1,300 words. No floor.
- Worksheet pages: 700–1,000 words.

### Routing comes before length
A mandated cross-link belongs in the "Related" or "Go deeper" list unless the pointer must sit inside a sentence to make sense. Check routing first, before reaching for any length remedy, and recount the page after routing. A page that is over only because a pointer sits in prose that could have been a list entry is a routing problem, not a length problem.

### When a page is outside its bounds
A page outside its bounds records, in the PR description: the measured count, which bound it misses, the result of the routing check, what was attempted and rejected, and the disposition. The record must name what was tried, not only why the page is long. Then:

- An area page over the soft ceiling may merge on that record.
- A step page outside the hard range, over or under, may not merge on the record alone. It merges after a trim or a routing fix, or after an explicit ruling from the owner, which is recorded the same way.
- Padding to clear the 900 floor is not a remedy. A step page still short after the routing check is a candidate for a ruling, not for filler.

Compress for redundancy, never for the count. Removing a restatement or a scene-setting opener improves a page; squeezing clauses together to hit a number makes it worse to read on a phone, which is the opposite of what the ceiling is for.

The record lives in the PR description. There is no running decisions file, and none should be created.

### Recorded exceptions
- **Marketing and Growth** (`content/domains/marketing-and-growth/index.mdx`) stands at approximately 1,758 words on this basis, over the soft ceiling, and is accepted rather than trimmed or split. Marketing carries more regulated surface than any other practice area; the overage is subject breadth, not density or scope leakage. Six H3 subsections is the modal count for an area page, so the page is not structurally two pages sharing a file. The phone read-through found it sound. Do not trim or split this page to the ceiling without a fresh ruling.

## Page templates
One fixed skeleton. Every page under domains/ (the practice areas) uses the area skeleton below. Write the sections in the order given; do not add, remove, or reorder them.
Every practice-area page lives at `content/domains/<slug>/index.mdx`, one folder per page. The step-page skeleton is not here — it is documented on its own, in full, in "## Step page template" below.

Area page skeleton:
1. Frontmatter with `title` and `description`.
2. H1 matching the frontmatter title.
3. Opening paragraph, no heading.
4. "Where this starts in the process" — a short fixed section, right after the opening, linking the two or three steps whose decisions this area then governs. See the Area page conventions section below for the full rule.
5. "Key ideas" — 4–7 H3 subsections, one concept each.
6. "Common misconceptions"
7. "For practitioners" — a Callout, same treatment as above.
8. "Go deeper" — 2–6 links, prefer fewer, to public primary sources from the Sourcing list above, naming the specific agency or body.

Conventions for area and worksheet pages:
- Area pages: soft ceiling of 1,300 words, no floor. Worksheet pages: 700–1,000 words (see Worksheet page below). What counts toward the number is set by "Word count basis" above; measure with `pnpm wordcount <path>`. An area page that has said everything it has to say ends there. Do not add a section in order to clear a number, and do not cite the ceiling as the reason for including anything.
- The 1,300-word ceiling is a review trigger, not a hard limit. An area page may exceed it. Run the routing check first, then record the overage as "When a page is outside its bounds" above requires — the measured count, the routing result, what was attempted and rejected, and the disposition. There is no closed list of acceptable causes; state the actual one.

  This soft ceiling applies to area pages only. Step pages keep the hard 900–1,300 range in "Step page template" below, and worksheet pages keep 700–1,000.
- Second person, plain English. No jargon without a one-line explanation.
- Headings are plain nouns or short questions. H2 for the numbered sections above, H3 within them.
- No disclaimer on individual pages; it lives on the landing pages only (see Disclaimer above).
- Area pages never print yearly-changing figures — limits, thresholds, rates, deadlines. Where a figure is relevant, name the concept in plain language and link to /tools/this-years-figures (for example: 'up to the yearly limit — see this year's figures'). That page holds every number with its year and primary source and is updated once a year. Every 'Go deeper' link must be fetched and confirmed live before the PR is opened; any link that cannot be confirmed is marked [VERIFY] in the report. The rule covers figures set by law, regulation, or an agency. Round hypothetical numbers in a worked example ('200 units a month for ten years') are fine and encouraged.
- Links to the U.S. Code use the granuleid form: https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-titleNN-sectionNNNN&num=0&edition=prelim (substitute the title and section). The "title:NN section:NNN" form is not used.
- Row schema on /tools/this-years-figures: one figure per row, columns Concept | What it governs | Value | Year | Source, grouped under one H2 per section with a stable id (`## Section Name [#slug]`). Sections follow the grouping and canonical order of FIGURES-INVENTORY.md: the step sections first, in step order, then the practice-area sections in the site's order (see The 9 areas above). A figure appears once, under the section it fits best. Every Value comes from a fetched primary source or reads VERIFY; never fill a Value from memory.
- Figures that vary by state: Value reads "Varies by state", Year is blank, and Source links a federal locator page if one exists or otherwise names the state office in plain text ("Your state's securities regulator"). Never build a per-state table.
- Where a row's Value reads "Varies by state" and a NASAA model rule stands behind the state requirement, the Source column names that model rule and its amendment date rather than a bare state-regulator locator. Value still reads "Varies by state." The model's own number is never placed in the Value column, because a reader reads that column as the answer that binds them. Rows whose subject is a name rather than a number, such as exam identifiers and accepted designations, work the other way: the Value column prints the names themselves and carries any state variation in that same cell, and where a model rule stands behind the requirement the Source column still names that model rule and its amendment date.
- Where a row's Value reads "Varies by state" and no model rule and no federal locator page stands behind the state requirement, the Source column names the body that sets the figure and states plainly that no uniform model rule and no federal locator page exists. No substitute link is supplied. The entity formation filing fee and the yearly franchise tax or annual report fee, both set by each state's business filing office, are the standing example.
- Where the model rule standing behind a row has been adopted but never amended, the Source column names the rule and its adoption date in place of an amendment date. The amendment-date form above still governs any model rule that has one. The NASAA model rule on investment adviser representative continuing education, adopted and never since amended, is the standing example.
- Figures fixed by statute that do not change yearly still get a row: Year reads "Set by statute" and Source links the statute or the agency page. A figure fixed by rule rather than reset each year takes "Set by rule" in the Year column, on the same terms.
- Internal links use the site's existing slugs. Check the actual paths under content/ before writing a link.
- The Callout is the stock component from nextra/components, the same one the landing pages use. Import it with exactly this line: `import { Callout } from 'nextra/components'`
- The hard rules and writing style above apply in full to page bodies, headings, and frontmatter, including titles, descriptions, and slugs.

## Area page conventions

Four rules specific to area pages, on top of the area skeleton and conventions above. They were established building the first area page, [Service and Pricing Models](/domains/service-and-pricing-models), the format benchmark for the other eight the way step 1 was the benchmark for the 12 steps.

1. An area page says how to think about a subject over time. It is standing subject matter that never finishes. It does not walk a sequence, and it does not restate what a step page already covers — link to the step instead of re-explaining it.
2. The page assumes the firm exists but does NOT assume the reader has worked through the 12 steps. It must be readable cold by someone who arrived from search. Never write "as you decided in Step 3" or any phrasing that depends on the reader having read the sequence.
3. Near the top, right after the opening paragraph, add one short fixed section headed "Where this starts in the process" that links the two or three steps whose decisions this area then governs. These are the originating steps — the ones that produce a decision or artifact this area then carries forward — not every step that links to this area; a step that only consumes or formalizes what the area governs is downstream and does not belong here. Cap the section at three links; fewer is fine. Do not also add a related-steps list at the bottom of the page. Inline links to steps are still allowed on first mention elsewhere in the page.
4. The recurring unnamed hypothetical ("the adviser") appears here too, but in present-tense standing situations rather than at a point in the sequence. Write "the adviser reprices annually and finds..." not "by this stage the adviser has...". No new named examples.

With rule 3 applied, an area page's running order is: frontmatter, H1, opening paragraph, "Where this starts in the process," "Key ideas," "Common misconceptions," "For practitioners," "Go deeper."

Worksheet page (tools):
- Path: `content/tools/<slug>/index.mdx`, one folder per page.
- 700–1,000 words. What counts toward the number is set by "Word count basis" above; measure with `pnpm wordcount <path>`.
- Second person, plain English.
- H2 sections in this order, headings only: "What this measures", "Before you start", first input section, second input section, "The result", "What the number does and does not tell you", "What to do with it", "For practitioners" (Callout), then Related.
- Input section names are worksheet-specific: name each for the two things the worksheet gathers.
- Checklists use the same skeleton with the input sections named "Goals to consider" / "Your goals" and "The result" renamed "Your short list".
- Tables have three columns at most so they render on a phone without horizontal scrolling.
- No regulated figures. Name the concept and link the matching section of /tools/this-years-figures.
- "For practitioners" is a Callout and comes last, followed only by the Related list.
- No disclaimer.
- Example values in tables and worked examples are round hypothetical numbers.

## Step page template
Every page under `content/process/<slug>/index.mdx` follows this exact skeleton, derived from step 1 ([Decide If Independence Fits](/process/decide-if-independence-fits)), so later steps don't have to re-derive it from scratch:

1. Frontmatter with `title` (the full step name) and `description` (one sentence, plain language).
2. H1 matching the frontmatter title.
3. Opening paragraph, no heading: what this step is, in plain words.
4. H2 "Why it matters"
5. H2 "What actually happens" — three to five H3 substeps. The final H3 states what the reader leaves the step holding.
6. H2 "Questions to ask yourself" — four to six questions.
7. H2 "Common mistakes" — a bulleted list, one mistake per bullet, each one or two sentences.
8. H2 "Which practice areas apply" — a list linking the relevant `/domains/` routes, one sentence each on why it applies at this step.
9. A `<Callout type="info">` for practitioners, placed after the practice areas list, with no heading of its own.
10. H2 "Next step" — a single sentence linking the next `/process/` route. The last step's Next step links to the Practice Areas index at `/domains` instead, since the practice areas are standing material that never finishes.

Step-page rules:
- 900–1,300 words, a hard range. What counts toward the number is set by "Word count basis" above; measure with `pnpm wordcount <path>`. A step page outside the range runs the routing check and follows "When a page is outside its bounds" — unlike an area page, it does not merge on the record alone.
- No paragraph longer than four sentences.
- Second person, plain English, educational rather than advisory.
- Steps link to the practice areas that apply rather than restating them.
- Steps link forward to later steps rather than explaining their subject matter in place.
- Mirroring runs both ways. Where an area page's "Where this starts in the process" names a step as originating, that step's "Which practice areas apply" lists that area. Area convention 3 governs the reverse direction, where a step may link an area that does not name the step back.

## SEC-path callout
A reusable callout for the places where the SEC-registered path diverges from the guide's default state-registered scenario. It applies to step pages and area pages alike; it is not part of either skeleton, because it goes wherever the divergence falls.
- Component: `<Callout type="warning">`.
- First words, identical every time: "If you are on the SEC path:"
- One to three sentences stating only how the SEC path differs at that point. It does not explain the SEC path in full.
- Placed inline at the point in the page where the divergence occurs, not collected at the end.
- Used only where the paths actually diverge. A page with no divergence has no SEC-path callout.
- Distinct from the practitioner `<Callout type="info">` at the end of every step page and every area page, which stays as it is.

## How to work
- Do exactly what the prompt asks. Do not add sections, pages, or features that were not requested.
- Commit after each completed prompt with a one-line message describing the change. Never push unless the prompt says to push.
- Never delete or rewrite existing content pages unless the prompt names the file.
- End every task with a "Report" section: what was created or changed (file paths), anything marked [VERIFY], anything you were unsure about, and the exact command to view the result.
- Do only what the current prompt asks. Do not act on your own follow-up suggestions, and do not edit files outside the scope of the prompt, even to fix something you notice. List anything you would have done under a "Suggested follow-ups" heading at the end of your report and in the PR description, and leave it there.
- Never put a list of URLs in a PR description. URL lists go in a PR comment instead. Every href corruption seen so far has been in a description; the same lists posted cleanly as comments.
- After posting a PR description, fetch the stored body back from GitHub and compare it against the text that was sent. Proofreading the outgoing text does not catch this — the corruption happens after the text is handed over, so only the stored copy shows it.

## Glossary
One page at /glossary, alphabetical. Every term is an H3 with an explicit id: `### Term [#term-id]`. The id is the term in lowercase, spaces and slashes replaced with hyphens, all other punctuation dropped, no leading or trailing hyphens. Definitions are 2 to 4 sentences with no regulated figures; where a term turns on one, link the matching section of /tools/this-years-figures by anchor. Same-page cross-references (`[other term](#other-term-id)`) are allowed sparingly.
Links to glossary terms from any page use the anchor form /glossary#term-id; a plural link text maps to the singular term's id.

## Glossary running list
Every term that any page links to /glossary. Add a term here when a new page links it. Future prompts reference this list instead of restating it.

- Advertisement — `advertisement`
- Advisers Act — `advisers-act`
- Annual updating amendment — `annual-updating-amendment`
- Brochure supplement — `brochure-supplement`
- Broker-dealer — `broker-dealer`
- Buffer on either side of the SEC line — `buffer-on-either-side-of-the-sec-line`
- Business continuity and succession plan — `business-continuity-and-succession-plan`
- Chief compliance officer — `chief-compliance-officer`
- Claims-made policy — `claims-made-policy`
- Code of ethics — `code-of-ethics`
- Compliance program review — `compliance-program-review`
- Conflict of interest — `conflict-of-interest`
- CRD — `crd`
- Custody — `custody`
- Deficiency letter — `deficiency-letter`
- Discretionary authority — `discretionary-authority`
- Disqualified person — `disqualified-person`
- Endorsement — `endorsement`
- Entitlement — `entitlement`
- Errors and omissions coverage — `errors-and-omissions-coverage`
- Examination — `examination`
- Fiduciary duty — `fiduciary-duty`
- FINRA — `finra`
- Firm brochure — `firm-brochure`
- Form ADV — `form-adv`
- Form ADV Part 1B — `form-adv-part-1b`
- Form CRS — `form-crs`
- Form U4 — `form-u4`
- Form U5 — `form-u5`
- Hypothetical performance — `hypothetical-performance`
- IARD — `iard`
- Independent verification — `independent-verification`
- Investment adviser representative — `investment-adviser-representative`
- Mid-sized adviser band — `mid-sized-adviser-band`
- Minimum net worth — `minimum-net-worth`
- Model rule — `model-rule`
- Multi-state exception — `multi-state-exception`
- NASAA — `nasaa`
- Notice filing — `notice-filing`
- Other-than-annual amendment — `other-than-annual-amendment`
- Plain English — `plain-english`
- Professional designation — `professional-designation`
- Qualified custodian — `qualified-custodian`
- Qualifying examination — `qualifying-examination`
- Recordkeeping scheme — `recordkeeping`
- Recruiting protocol — `recruiting-protocol`
- Registered investment adviser — `registered-investment-adviser`
- Regulatory assets under management — `regulatory-assets-under-management`
- Renewal window — `renewal-window`
- Restrictive covenant — `restrictive-covenant`
- Retention period — `retention-period`
- Retroactive date — `retroactive-date`
- SEC-registered adviser — `sec-registered-adviser`
- Securities and Exchange Commission — `securities-and-exchange-commission`
- Standardized account transfer — `standardized-account-transfer`
- State-registered adviser — `state-registered-adviser`
- Supervision — `supervision`
- Surety bond — `surety-bond`
- Testimonial — `testimonial`
- Uniform Securities Act — `uniform-securities-act`

## Working notes on editing this file
When editing a numbered list in this file, scope the edit to the list block itself, never to a line range or "every line after line N". A line-scoped renumbering in the step 7 branch silently incremented the first numbered line in five unrelated lists (Structure, the 12 steps, the 9 areas, the area page skeleton, and the step page template) before it was caught and reverted.
