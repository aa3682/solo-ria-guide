# Follow-ups

Deferred work: items identified during a build session that are out of scope for that
session's prompt, blocked on something else landing first, or otherwise held for a
later pass. This file is maintained going forward as part of every build session —
append new deferrals here as they come up instead of leaving them stranded in a PR
description.

## 1. Convert "Which practice areas apply" bullets from bold text to links — DONE

**Status: done.** Fixed in PR #24, once the ninth area page had merged. Five step pages still
carried bold practice-area references at that point —
[file-and-get-approved](content/process/file-and-get-approved/index.mdx),
[leave-and-transition-clients](content/process/leave-and-transition-clients/index.mdx),
[set-up-custody-and-technology](content/process/set-up-custody-and-technology/index.mdx),
[stay-registered-and-compliant](content/process/stay-registered-and-compliant/index.mdx), and
[write-the-policies](content/process/write-the-policies/index.mdx) — and all five were converted in
one pass. No step page carries a bold practice-area reference now. GitHub issue #18 is closed — the
owner had already closed it before this pass, and it was confirmed closed here rather than reopened.

**Correction to the original entry below.** It states that all 12 step pages used bold text. That
was never true. Seven of the twelve were already fully linked when PR #24 ran, and only five carried
bold references: 18 bullets, not 36. The "all 12" framing overstated the size of the job by more than
half, and a future reader should not inherit it. The rest of the original entry — in particular the
instruction never to convert piecemeal — was followed as written.

### Original entry

On all 12 step pages, the bullets under "Which practice areas apply" that reference a
practice area without an existing page use bold text (`**Area Name**`) instead of a
link. Once every area page exists, all 12 should link consistently
(`[Area Name](/domains/area-slug)`).

**Blocked until:** all 9 area pages have merged.

**How to do it:** one pass across all 12 step pages, converting every remaining bold
practice-area reference to a link at once. Never piecemeal — do not convert a bullet
just because the area it names happens to have merged; wait for all 9.

**Tracking:** GitHub issue #18.

**Build order:** after item 9 (the last area page merges).

## 2. Performance-based fees / Rule 205-3 qualified client thresholds

The Service and Pricing Models page ([content/domains/service-and-pricing-models/index.mdx](content/domains/service-and-pricing-models/index.mdx))
deliberately omits performance-based fees and the qualified-client thresholds that
gate them under Advisers Act Rule 205-3 and its state analogs.

**What it needs:** a row (or rows) on `/tools/this-years-figures` for the qualified-client
net-worth and assets-under-management thresholds, and — wherever the topic is
eventually covered — an SEC-path callout, since the federal and state versions of the
performance-fee exemption diverge.

**What blocks it:** a decision on whether the figures-page row is added on its own,
ahead of any page actually covering the topic, or whether the topic gets covered on a
page first and the row follows from that.

**Belongs to:** build order item 4 (the figures page). Decide there.

## 3. Repo-wide source-currency sweep

CLAUDE.md's Source currency rule (added in this session) distinguishes a link that
loads from a link that is still current. Seven pages were built and their "Go deeper"
links fetched and confirmed live before that distinction was in place — they were
checked for liveness only, not for whether a cited dated document has since been
superseded by a newer version from the same authority.

**What it needs:** revisit every citation on those seven pages against the Source
currency rule: confirm each dated document is still the current version, and flag any
with a known successor even though the link still resolves.

**Belongs to:** build order item 5.

## 4. NASAA hub-page citations audited in PR #19 — recorded, not re-litigated

PR #19 audited six citations that pointed to a NASAA hub page (a landing page collecting
links to state-by-state resources) rather than to a specific document. Two were
replaced. Four remain in place: they were judged fair because they pair the hub-page
link with locator-style language in the surrounding text (making clear the link is a
directory to route through, not a specific authority), rather than citing the hub as
though it were itself the source of a specific fact.

This entry exists so a later consistency pass does not re-open those four citations as
if they were never reviewed. They were reviewed, and the reasoning for leaving them is
above.

**Belongs to:** no further action — reference only.

## 5. SEC Form ADV Part 2 General Instructions PDF is past its stated OMB expiration

The cited PDF ([content/domains/client-education/index.mdx](content/domains/client-education/index.mdx),
also cited on [content/domains/service-and-pricing-models/index.mdx](content/domains/service-and-pricing-models/index.mdx)
and [content/process/write-the-disclosure-documents/index.mdx](content/process/write-the-disclosure-documents/index.mdx))
resolves and is not a superseded rule, but it is stamped SEC 1707 (08-22) with an OMB
clearance line reading "Expires: October 31, 2024" — a date already past. That's a
source-currency flag distinct from a dead link or a superseded version: the document
itself carries a lapsed clearance date.

**What it needs:** confirm whether the SEC has reissued Form ADV Part 2's general
instructions under a current OMB clearance at a stable URL, and if so, repoint all three
citations to it. If no reissued version exists yet, note that explicitly next to the
citation rather than treating the expired clearance date as silent.

**Belongs to:** build order item 5 (repo-wide source-currency sweep) — see also item 3.
This one applies even to pages that were already source-currency-aware, since the link
was reused from an earlier PR without re-checking the document's own clearance date, not
copied blind onto a page built before the rule existed.

## 6. Client Education's fifth Key idea was added to clear a word floor that no longer exists

The fifth Key idea on the Client Education page
([content/domains/client-education/index.mdx](content/domains/client-education/index.mdx)),
"Format shapes whether an explanation actually lands," was added during PR #20 explicitly
to clear the then-900-word area-page floor. That floor has since been lowered to 700, so
the reason the section was written no longer applies.

**What it needs:** re-evaluate the section on its own merits during the consistency pass —
keep it or cut it based on whether it earns its place on the page, not on what it does to
the word count.

**Belongs to:** build order item 5.

## 7. NASAA amended four model rules on May 4, 2026 — pre-amendment PDFs are still hosted

As part of its investment adviser advertising modernization, NASAA amended four model
rules on May 4, 2026: Unethical Business Practices 102(a)(4)-1, Prohibited Conduct
(USA 2002) 502(b), Recordkeeping Requirements 203(a)-2, and Recordkeeping Requirements
(USA 2002) 411(c)-1. Pre-amendment PDFs of these remain hosted on nasaa.org and resolve
normally, so a liveness check will not catch a citation pointing at a superseded version.

This is core source material for the Marketing and Growth area page, which is not yet
written.

**What it needs:** whoever writes Marketing and Growth must confirm every NASAA citation
on the page is the post-May-2026 version, and the source-currency sweep must check the
same for any of these four model rules already cited elsewhere in the repo.

**Status: half done.** The Marketing and Growth build cited all four rules in their 5-4-2026
versions, at `/wp-content/uploads/2026/05/` paths.

The repo-wide half was also checked during that build, by grep across `content/` for each rule
number. Two other pages already cite one of the four each, and **both are already the current
5-4-2026 versions** — no repointing was needed:

- [content/domains/advice-and-planning-process/index.mdx](content/domains/advice-and-planning-process/index.mdx)
  cites 102(a)(4)-1 at the `/uploads/2026/05/` path.
- [content/domains/records-and-documentation/index.mdx](content/domains/records-and-documentation/index.mdx)
  cites 203(a)-2 at the `/uploads/2026/05/` path.

Neither 502(b) nor 411(c)-1 is cited anywhere outside Marketing and Growth. The sweep half stays open
only to confirm this remains true as further pages are added, and because the two citations above are
themselves among the links never fetched (items 11 and 3).

**Belongs to:** the Marketing and Growth build (done), and the source-currency sweep (item 3).

## 8. "Go deeper" links on the two newest area pages were not fetched — session egress blocked

The Technology and Client Experience and Risk and Insurance pages were built in a session
whose network egress proxy blocked every domain their citations point at: ecfr.gov,
uscode.house.gov, nasaa.org, and content.naic.org (also sec.gov and investor.gov, which
neither page ends up citing). The six links were corroborated through web search — title,
authority, and rule number confirmed against search results — but none was fetched, so
none has been confirmed live or checked against the document's own date and clearance
stamp, as the area-page conventions require.

**What it needs:** fetch all six links from a session with egress to those domains, confirm
each resolves and is the current version, and clear or replace any that fail. The six are
listed in the PR description for the branch that added the two pages.

**Belongs to:** build order item 5 (source-currency sweep) — or sooner, if a session with
network access to those domains comes up first.

## 9. Superseded NASAA model rules are still hosted on nasaa.org and resolve normally

NASAA's 2020 Model Rule for Investment Adviser Written Policies and Procedures consolidated
and superseded two earlier model rules: Business Continuity and Succession Planning
(April 13, 2015) and the Investment Adviser Information Security and Privacy Rule
(May 19, 2019). Standalone PDFs of both superseded rules remain hosted on nasaa.org and
resolve normally, so a liveness check will not catch a citation pointing at either one.

This is the same failure mode as item 7, on a different set of rules. The repo currently
cites the consolidated 2020 rule in both places it needs one
([content/process/write-the-policies/index.mdx](content/process/write-the-policies/index.mdx)
and [content/domains/technology-and-client-experience/index.mdx](content/domains/technology-and-client-experience/index.mdx)),
so nothing is wrong today.

**A third superseded PDF, found while reviewing PR #22.** Unethical Business Practices
102(a)(4)-1 — an item 7 rule — has *two* superseded texts still hosted, not one. Besides the
pre-amendment 2022 PDF at `/uploads/2022/07/1956-Act-Rule-102-a-4-1-Unethical-Business-Practices-20220516.pdf`,
the 2005 text sits at `/uploads/2023/02/model-rule-investment-adviser-unethical-practices20050911.pdf`.
That one is the worse trap: a 2005 rule under a 2023 upload path, so the date in the URL looks
recent and a reviewer skimming paths rather than opening the file will read it as current. The
only current version is the 5-4-2026 PDF cited on
[content/domains/advice-and-planning-process/index.mdx](content/domains/advice-and-planning-process/index.mdx).

The general lesson, which the sweep should apply to every nasaa.org citation in the repo: the
date in a NASAA upload path is the date the file was uploaded, not the date the rule was adopted
or amended. Never infer currency from the path.

**What it needs:** the source-currency sweep should confirm no citation anywhere in the repo
points at any of these three superseded PDFs, and future pages touching cybersecurity, privacy,
business continuity, or succession should cite the 2020 consolidated rule.

**Belongs to:** the source-currency sweep (item 3).

## 10. content/domains/_meta.js is ordered by build order, not by the canonical area order — DONE

**Status: done.** Fixed in PR #24, in the same pass as item 1 and for the same reason: all nine area
pages had merged, so the whole file could be reordered at once rather than piecemeal.
`content/domains/_meta.js` now lists the nine areas in the canonical order given in CLAUDE.md, so the
sidebar and the [/domains](content/domains/index.mdx) index page agree. The original entry is kept
below for the record.

### Original entry

The sidebar order for the practice areas comes from `content/domains/_meta.js`, which has
been appended to as each page merged. The result is build order (Service and Pricing,
Compliance, Records, Client Education, Technology and CX, Risk and Insurance), not the
canonical order of the nine areas given in CLAUDE.md and used by the
[/domains](content/domains/index.mdx) index page. The sidebar and the index page therefore
list the same areas in different orders.

**What it needs:** reorder `content/domains/_meta.js` to match the canonical nine-area order.
Left alone deliberately — reordering existing entries was outside the scope of the prompt
that noticed it.

**Belongs to:** best done in one pass once all nine area pages exist, alongside item 1.

## 11. "Go deeper" links on Advice and Planning Process and Firm Economics were not fetched — session egress blocked again

Same failure mode as item 8, in a later session and on a different set of links. The session that
built [content/domains/advice-and-planning-process/index.mdx](content/domains/advice-and-planning-process/index.mdx)
and [content/domains/firm-economics/index.mdx](content/domains/firm-economics/index.mdx) had every
outbound domain blocked by its network egress proxy — nasaa.org, sec.gov, irs.gov, iard.com, and
everything else tested. The six citations were corroborated through web search (title, authority,
issuing body, and for dated documents the adoption or issue date confirmed against search results),
but none was fetched, so none has been confirmed live or checked against the document's own printed
date and any clearance stamp.

The six are listed, with what search confirmed about each, in the PR description for the branch that
added the two pages. The NASAA citation is deliberately the post-May-2026 amended version required by
item 7; superseded PDFs of that same model rule are still hosted and still resolve (see item 9).

**Two of the six were cleared by the owner during PR #22 review — do not re-check these:**

- **NASAA 102(a)(4)-1 (5-4-2026 PDF)** — VERIFIED. File exists at the cited path; amendment history
  confirmed (adopted 4-27-1997; amended 4-18-2004, 9-11-2005, 11-6-2017, 5-19-2019, 5-4-2026). It is
  the post-May-2026 version item 7 requires.
- **SEC Staff Bulletin, Care Obligations** — VERIFIED live and canonical, not withdrawn or reissued.
  **Correction:** the bulletin is dated **April 30, 2023**, not April 20. The April 20 date appears
  only in the PR #22 description, which has been corrected; it was never in the page, which carries
  no date for this citation.

**Four remain unconfirmed and still need fetching:** SEC IA-5248 (`sec.gov/files/rules/interp/2019/ia-5248.pdf`),
IARD Fees and Accounting (`iard.com/fees-accounting`), and the two IRS pages (Self-Employed Individuals
Tax Center, Estimated Taxes). The IRS pair is low risk — same domain and page type as the already-verified
IRS Recordkeeping hub — but low risk is not confirmed.

**What it needs:** fetch the four remaining links from a session with egress to those domains, confirm
each resolves and is the current version, and clear or replace any that fail.

**Belongs to:** build order item 5 (source-currency sweep) — or sooner, if a session with network
access to those domains comes up first. Best done in one pass together with item 8.

## 12. Step 1's practitioner Callout ends mid-clause — DONE

**Status: done.** Fixed in the Marketing and Growth build, in the wording proposed below and
confirmed by the owner in that prompt. The Callout on
[content/process/decide-if-independence-fits/index.mdx](content/process/decide-if-independence-fits/index.mdx)
now ends: "...and your written go or no-go decision, since later steps will ask you to revisit each
of them." Nothing else in that file was touched. The original entry is kept below for the record.

### Original entry

The practitioner Callout on [content/process/decide-if-independence-fits/index.mdx](content/process/decide-if-independence-fits/index.mdx)
ends: "Document the numbers you used for your runway estimate, the assumptions behind them, and
your written go or no-go decision, since later steps." The sentence stops mid-clause. This is the
first step page of the site and it is live now, so it is visible to every reader who starts at the
beginning.

Deliberately **not** deferred to the source-currency sweep or to a general step-page pass. Either
would ship it broken through at least two more PRs, and a sentence that stops mid-word costs a
reader's trust in the surrounding page more than a stale citation does.

**What it needs:** one line. Nothing about it requires a decision beyond how the sentence should
end. Proposed ending, matching what the same page already says under "Write down where you land"
("somewhere you will actually look at again once the next steps ask you to resolve them"):

> ...and your written go or no-go decision, since later steps will ask you to revisit each of them.

The owner should confirm the wording; the fix itself is uncontroversial.

**Belongs to:** the Marketing and Growth build, as a one-line correction folded into that prompt.
Do not wait for the all-step-pages pass in item 1.

## 13. Both PR #22 pages landed within nine words of the ceiling — a test, and what it can and cannot show

Item added at the owner's direction during PR #22 review, and extended after a measurement that
overturned part of its own premise. Read the whole entry before drawing anything from the result.

### What happened

The soft ceiling from Part 1 of PR #22 was written to stop the 1,300 number from shaping an area
page. In the first build under the new rule, both pages drafted at 1,309 and 1,310 and both landed
at 1,291 and 1,295 — five and nine words short of the line, independently.

The trims themselves were sound: each removed a genuine restatement, and neither claimed density for
a nine-word overage, which is the bad-faith use the rule exists to prevent. The concern is not those
edits. It is that two pages stopping just under the line suggests the count was steering the draft
before it ever steered an edit. Making the ceiling soft does not touch that, because the draft-time
pull is upstream of the rule.

### Why the question cannot be deferred

Draft-time targeting is invisible in a finished page. A 1,290-word page looks identical whether it
was drafted at 1,290 or drafted at 1,600 and cut back. The consistency pass reads finished pages, so
it cannot answer this question at all — deferring the test does not postpone it, it cancels it. That,
not "the last area page is the last clean chance," is the reason to run it on the Marketing and
Growth build. The owner recorded the correction to their own earlier framing here deliberately: the
first framing implied the test would still be possible later at some cost, and it would not be
possible later at any cost.

### The test design for the Marketing and Growth build

Three anchors removed, one widened:

1. **The range is omitted from the prompt.** No 700–1,300 anywhere in the instruction.
2. **The CLAUDE.md range is set aside during drafting.** The prompt says so explicitly. Omitting the
   number from the prompt alone would prove nothing, because CLAUDE.md states 700–1,300 under the
   area conventions and is read at the start of every session. Closing only the prompt would leave
   the instruction file planting the same number.
3. **The benchmark pages named span a wide band, not a cluster.** A build reads existing area pages
   as format benchmarks, and a demonstration plants a length target more reliably than a stated
   number does, because it is shown rather than asserted. Name benchmarks spanning roughly 900 to
   1,300 rather than three pages at one length. Client Education (903) is the thin-area precedent and
   belongs in that set on its own merits, not as a thumb on the scale.
4. **Residual, not closable:** a demonstration cannot be removed entirely, only widened. Some length
   signal survives any benchmark set, because the benchmarks have to be read.

### The measurement that overturned the original benchmark hypothesis

The benchmark confound was assumed, on both sides of the PR #22 review, to be the strongest of the
mechanisms, and the widened band was proposed as a fix. Measuring the eight existing area pages
showed the fix had already been applied, unknowingly, during PR #22 itself.

| Area page | Words | Build order |
| --- | --- | --- |
| Service and Pricing Models | 946 | 1st |
| Compliance and Supervision | 1,139 | 2nd |
| Records and Documentation | 1,134 | 3rd |
| Client Education | 903 | 4th |
| Technology and Client Experience | 1,223 | 5th |
| Risk and Insurance | 1,298 | 6th |
| Advice and Planning Process | 1,291 | 7th (PR #22) |
| Firm Economics | 1,295 | 8th (PR #22) |

The PR #22 prompt named four benchmark pages: Service and Pricing Models (946), Compliance and
Supervision (1,139), Client Education (903), and Risk and Insurance (1,298). That is already a band
of 903 to 1,298 — a 395-word spread including the thinnest page in the set — and both new pages still
landed at 1,291 and 1,295.

So the benchmark cluster hypothesis is largely dead. The band was already wide and it did not hold
the pages down. Keep the wide band in the Marketing and Growth prompt anyway, since narrowing it now
would reintroduce a variable for no reason, but do not expect it to be the thing that moves the
result.

### What the result will and will not show

With the benchmark band already demonstrated not to bind, the two stated numbers are the remaining
removable anchors, which makes the test cleaner than it looked, not weaker.

- **Marketing and Growth comes back well under — 900, 1,000:** the stated range was doing the work.
  The consistency pass can then drop the range from CLAUDE.md for area pages.
- **Marketing and Growth comes back near 1,280:** genuinely surprising, and it rules the stated
  numbers out. The mechanism is then something else, and the two live candidates are below.

### Two candidate mechanisms neither party had named

Both are visible in the table above and neither involves a stated number.

- **A build-order ratchet.** The counts drift upward across the run: 946, then three pages in the
  1,100s and below, then 1,223, 1,298, 1,291, 1,295. Benchmarks named for a build skew toward
  recently merged pages, so each build reads a slightly longer set than the last and writes to it.
  If this is the mechanism, no wording change fixes it and the counts will keep climbing.
- **Genuine subject depth at this level of treatment.** Six key ideas, each carrying a real handoff
  to a neighbouring area, may simply cost about 1,300 words to write at the density the benchmark
  pages set. If so the pages are the right length and the ceiling is the thing that is wrong.

Distinguishing these two is out of scope for the Marketing and Growth build and probably needs the
finished set of nine.

### Result: 1,823 words

The test ran as designed on the Marketing and Growth build and the page came back at **1,823 words**
— 528 above the previous high (Firm Economics, 1,295) and 523 above the soft ceiling. That is not
either outcome the entry anticipated.

What this rules out. The two stated numbers were the remaining removable anchors, and removing them
did not produce a shorter page; it produced by a wide margin the longest one. So the stated range was
not holding the pages *up* to 1,290 — it was holding them *down* to it. Every page in the table above
was writing against a ceiling, and the ceiling was the binding constraint, not the floor and not the
benchmarks. The "comes back well under — 900, 1,000" branch is dead, and so is the reading that the
range was doing no work.

What it does not rule out. The build-order ratchet and the genuine-subject-depth hypotheses both
survive, and 1,823 does not separate them. The drafting agent reported that it did not estimate
length while writing and did not consult the count until the page was finished, which is consistent
with depth; but the page also has six Key ideas each running two to three paragraphs, which is a
denser treatment than any earlier area page, and a ratchet would predict exactly that. One page
cannot distinguish them.

**The open judgment this creates.** Nobody has yet decided whether 1,823 words is a page that should
be cut or a page that shows the ceiling is wrong. The prompt forbade adjusting the page toward any
range after measuring, deliberately, so it shipped at 1,823 unedited. The build's own boundary check
found no scope leakage — the length is density, not wandering — but "not scope creep" is not the same
finding as "the right length for a phone." That judgment is deferred, unmade, to the consistency
pass, together with the ratchet-versus-depth question, which now has a much larger data point to work
from.

**What it needs:** the result is recorded above. At the consistency pass, decide (a) whether the
Marketing and Growth page should be cut and to what, (b) whether the 1,300 ceiling survives at all
for area pages, and (c) ratchet versus depth, now with nine finished pages.

Separately, at the consistency pass, re-read the closing sections of
[content/domains/advice-and-planning-process/index.mdx](content/domains/advice-and-planning-process/index.mdx)
and [content/domains/firm-economics/index.mdx](content/domains/firm-economics/index.mdx) and judge
whether either reads slightly clipped at the end.

**Belongs to:** the Marketing and Growth build (the test), and build order item 5 (the re-read and
the ratchet-versus-depth question).

## 14. "Go deeper" links on Marketing and Growth were not fetched — session egress blocked a third time

Same failure mode as items 8 and 11, in a third consecutive session and on a fresh set of links. The
session that built [content/domains/marketing-and-growth/index.mdx](content/domains/marketing-and-growth/index.mdx)
had nasaa.org, ecfr.gov, sec.gov, and uscode.house.gov all answered 403 at CONNECT by the egress
proxy — a policy denial, not a transient failure, so it was not retried. The `WebFetch` tool was
blocked on the same domains. `WebSearch` worked, so all five citations were corroborated through
search: exact URL, issuing body, rule number, and for each NASAA document the adoption-and-amendment
line, confirmed against search results. None was fetched.

Two of the five need no re-check. The owner cleared them in the build prompt: the NASAA 102(a)(4)-1
5-4-2026 PDF, and NASAA 203(a)-2 5-4-2026. **Three remain unconfirmed:** NASAA 502(b) 5-4-2026,
NASAA 411(c)-1 5-4-2026, and the eCFR codification of 17 CFR 275.206(4)-1. The two NASAA pair-rules
are low risk — same upload directory, same amendment date, same package as the two already cleared —
but low risk is not confirmed. All five are listed with their corroboration in the PR description for
the branch that added the page.

That this has now happened three sessions running is itself the finding. Every area page built since
item 8 has shipped with unfetched citations, and the backlog is growing rather than clearing.

**What it needs:** fetch the three remaining links from a session with egress to nasaa.org and
ecfr.gov, confirm each resolves and is the current version, and clear or replace any that fail. Best
done in one pass with items 8 and 11 — thirteen links across six pages now.

**Belongs to:** build order item 5 (source-currency sweep), or sooner if a session with egress to
those domains comes up.

## 15. PR #25 findings 6(a) through 6(e): regulated figures described without deferring — DONE

**Status: done.** All five were repaired in the figures-page repair pass, together with the unlinked
deferral in PR #25's finding 4(c). Recorded here in full so the findings survive their PR
description, and because two of them left a loose end that is not closed (below).

The five, and what each became:

- **6(a) — [file-and-get-approved](content/process/file-and-get-approved/index.mdx), SEC-path
  callout.** Two statutory day counts were printed in the body: the period the statute gives the
  Commission after filing, and how long instituted proceedings may run. This was the only place in
  `content/` where a regulated figure appeared as an actual number, and so the only unambiguous Hard
  rule 5 violation. Both are now named in plain language and deferred.
- **6(b) — notice filing fees, and the level of business that triggers a notice filing.** Described
  on [file-and-get-approved](content/process/file-and-get-approved/index.mdx),
  [stay-registered-and-compliant](content/process/stay-registered-and-compliant/index.mdx), and
  [firm-economics](content/domains/firm-economics/index.mdx) with no deferral on any of the three.
  All three sentences sit in SEC-path callouts, which is the likely reason the deferral habit skipped
  them — a pattern worth watching, since SEC-path content gets less traffic through every convention.
  Each now defers, in wording fitted to its own sentence rather than made uniform across the three.
- **6(c) — [stay-registered-and-compliant](content/process/stay-registered-and-compliant/index.mdx),
  the renewal window.** Named with no deferral. It now defers, and the renewal fee named in the same
  passage rides on the same link — see the note below.
- **6(d) — [risk-and-insurance](content/domains/risk-and-insurance/index.mdx), the net worth
  reporting deadline.** Named only as "a short deadline," and not covered by the deferral in the
  sentence before it. It now defers.
- **6(e) — [compliance-and-supervision](content/domains/compliance-and-supervision/index.mdx), the
  compliance review frequency.** Named with no deferral. It now defers. The federal interval was also
  spelled out in one of that page's "Go deeper" link descriptions; the description now reads "a
  periodic review of its adequacy and effectiveness," with the URL untouched. This page had no
  figures at all before, so it gains its own section in FIGURES-INVENTORY.md.

**On the renewal fee in 6(c).** The fee was already inventoried as a figure deferred from
`firm-economics`, so it was not itself a rule 5 gap. It was covered anyway: the fee is named in plain
language on `stay-registered-and-compliant` with no route from that page to the figures page, and the
window's new link sits in the same passage, so one sentence carries both. Recorded because it was a
judgment call rather than something the prompt required.

### Left open: two step pages now exceed the hard 900–1,300 word range

The repairs add words and remove none, and four of the six pages were already within a few words of
1,300 before this pass:

| Page | Before | After | Ceiling |
| --- | --- | --- | --- |
| `content/process/stay-registered-and-compliant/index.mdx` | 1,299 | 1,325 | 1,300, hard |
| `content/process/file-and-get-approved/index.mdx` | 1,290 | 1,316 | 1,300, hard |
| `content/domains/firm-economics/index.mdx` | 1,295 | 1,312 | 1,300, soft |
| `content/domains/risk-and-insurance/index.mdx` | 1,298 | 1,307 | 1,300, soft |
| `content/domains/compliance-and-supervision/index.mdx` | 1,139 | 1,150 | 1,300, soft |
| `content/process/write-the-disclosure-documents/index.mdx` | 1,297 | 1,297 | 1,300, hard |

Nothing was cut to get any of them back under. The repair prompt forbade rewriting beyond the
sentence each fix sits in, and CLAUDE.md's own area-page rule says to compress for redundancy and
never for the count. Both point the same way: shipping two step pages over a hard limit is the
smaller error, and it is visible here rather than silent.

The two area pages need only the soft-ceiling statement, and the cause is neither of the two the rule
contemplates: it is not density and it is not scope leakage, it is a required deferral added to a
page that was already at the line. That is a third cause the ceiling rule does not have a slot for.

**What it needs:** a decision on the two step pages — accept the overrun, or authorise a trim pass
with permission to edit sentences the repair prompt put out of bounds. Both step pages carry
redundancy that the new deferrals make more visible: `file-and-get-approved` now defers the same
class of fee twice within ten lines, once under "Pay what is owed" and once in the callout below it.
A trim would have somewhere obvious to start. Also worth deciding whether the soft-ceiling rule
should name a third valid cause, since this one will recur every time a repair pass adds a deferral
to a page near the line.

**Belongs to:** build order item 5 (the consistency pass), or sooner if the owner wants the step
pages back in range before the figures page is built.

## 16. Whether the clearing corporation has republished the account transfer windows since the shortened settlement cycle

The Step 11 row for the standardized account transfer window on
[content/tools/this-years-figures/index.mdx](content/tools/this-years-figures/index.mdx) carries the
one-business-day validation window and the three-business-day completion window as the rule states
them. The rule also provides, in both paragraphs, that those time frames change as determined from
time to time in publications relating to the transfer facility by the clearing corporation. The rule
text alone therefore cannot confirm the windows currently in force — a publication by the clearing
corporation can move them without the rule changing, and the move to a shortened settlement cycle is
exactly the kind of event that would prompt one.

**What it needs:** check the clearing corporation's own publications relating to the transfer facility
for any change to the one-business-day and three-business-day windows since the shortened settlement
cycle took effect, and update the row's Value if one has been published. Not answered here.

**Belongs to:** the yearly figures-page update — this is an annual check, not a one-time fix.

## 17. The figures page preamble names three Source forms for "Varies by state" rows; CLAUDE.md permits four

The "How to read this page" preamble on
[content/tools/this-years-figures/index.mdx](content/tools/this-years-figures/index.mdx) tells the
reader that where a row's Value reads "Varies by state," the Source column instead points at what you
consult to find your own state's figure, "which is usually your state securities regulator, the model
rule the states drew on, or the state office that charges the fee." Those are three of the four forms
CLAUDE.md's row conventions permit for such a row. The fourth is missing: the varies-by-state rule
says the Source links a federal locator page where one exists, and only otherwise names the state
office in plain text, so the locator page is the first-choice form rather than an edge case.

Nothing on the page is currently misdescribed by the omission. All 26 "Varies by state" rows take one
of the three forms the preamble names, and eight of them say in the Source cell itself that no
federal locator page exists for that figure. The preamble's "usually" also leaves room. What the
omission does mean is that the preamble and CLAUDE.md no longer describe the same set of forms, and
the first row that does cite a federal locator page would read as a contradiction of the sentence
that introduces it.

**What it needs:** a decision on which of the two documents moves — add the fourth form to the
preamble, or reconsider whether CLAUDE.md should keep a first-choice form that no row has ever used —
and then the edit to whichever one it is. Not answered here. Neither the preamble nor CLAUDE.md was
touched in this pass.

**Belongs to:** the consistency pass (build order item 5), or the next figures-page pass if one comes
first.

### Added by the phone read-through: three more figures-page findings

Filed here rather than as items of their own, so the figures-page sweep stays one piece of work with
items 2, 16 and 21. None of the three is about a Source form, so they do not belong to the question
above; they belong to the same pass.

**The page is the only five-column table on the site, and the most linked-to page in the guide.**
Eighty-nine links in `content/` point at
[content/tools/this-years-figures/index.mdx](content/tools/this-years-figures/index.mdx), and every
one of them arrives at a Concept | What it governs | Value | Year | Source table whose middle and
right cells routinely run to forty words or more. The three worksheet pages all hold to three
columns, because CLAUDE.md's worksheet template caps them there so they "render on a phone without
horizontal scrolling" — the figures page is not covered by that rule and does not meet it. Reading
one row on a narrow screen means scrolling sideways past two long prose cells to reach the Value, and
Year and Source are off-screen from the start. The Risk and Insurance rows are the worst case: the
"Amount of a required surety bond" row's What-it-governs cell is four sentences and 93 words.

**Two rows read `NEEDS-VALUE`, and the pages that send readers to them promise an answer.** The
filing system fee under `#file-and-get-approved` and the yearly registration renewal window under
`#stay-registered-and-compliant` are both unestablished. The preamble explains what `NEEDS-VALUE`
means, so the page is honest about it — but
[content/process/file-and-get-approved/index.mdx](content/process/file-and-get-approved/index.mdx)
says "This year's figures holds each one with its source" and
[content/process/stay-registered-and-compliant/index.mdx](content/process/stay-registered-and-compliant/index.mdx)
says "Both the window and the fee are on This year's figures," which is a flat promise of a number the
reader does not get. Both values are on operator-published pages (`iard.com/fee_schedule` and
`iard.com/renewal-program`) that a fetch could settle.

**Two link-destination mismatches.** First, the four figures that decide the regulator — small adviser
ceiling, large adviser threshold, mid-sized band, buffer — all sit under `#decide-if-independence-fits`
(Step 1), while the Step 5 section holds only the multi-state exception count. A reader following
step 5's "each appears by name on This year's figures" lands at the top of a long page and has to
find rows filed under a different step than the one they came from; the RAUM worksheet gets this right
by linking `#decide-if-independence-fits` explicitly, step 5 does not. Second,
[content/process/set-up-custody-and-technology/index.mdx](content/process/set-up-custody-and-technology/index.mdx)
promises "see This year's figures for the model most states built on **and where to check your own
regulator's adaptation of it**" — the Step 10 rows name the NASAA model and say each state adapts it,
but unlike most other "Varies by state" rows they carry no pointer to a state securities regulator, so
the second half of the promise is not delivered.

**What all three need:** the two Values fetched from the operator's pages; a decision on the table
shape (fewer columns, a split of "What it governs" out of the table, or an accepted exception recorded
against the worksheet rule); step 5's bare figures links anchored to `#decide-if-independence-fits`,
which overlaps item 20; and either a regulator pointer added to the Step 10 rows or step 10's sentence
narrowed to what the rows actually say. Nothing was changed on the page.

## 18. "Confirm with your home state and write it down" is the final H3 on two step pages

The last H3 under "What actually happens" is the same sentence, word for word, on
[content/process/choose-your-regulator/index.mdx](content/process/choose-your-regulator/index.mdx)
and [content/process/qualify-as-an-adviser/index.mdx](content/process/qualify-as-an-adviser/index.mdx).
The H3 survey run for the substep ruling counted every H3 heading across the twelve step pages and
found no other heading text that repeats anywhere among them. The full survey is in the description
of PR #44, which was opened read-only and closed without merging.

Neither page is wrong on its own terms. Both steps genuinely end by confirming a determination with
the home state and writing the answer down, so the heading is accurate in both places. What the
repetition costs is navigational: a reader moving between step 5 and step 6 sees the same line close
both pages and cannot tell from the heading alone what distinguishes the two steps' closing work.

**What it needs:** a decision on whether one of the two is reworded and which, then the edit. The
step 6 side is the likelier candidate, since step 5's whole subject is the regulator determination
and the heading sits closer to that page's purpose. Not answered here, and neither heading was
touched in the merge pass that produced this entry.

**Belongs to:** a step-page voice pass across the twelve, not a single-page fix — the value is in
seeing all twelve closing headings together before moving one.

## 19. qualify-as-an-adviser's final H3 opens directly on the adviser illustration

On [content/process/qualify-as-an-adviser/index.mdx](content/process/qualify-as-an-adviser/index.mdx),
the final H3 begins on the words "For illustration, the adviser" with no lead-in prose of its own.
The H3 survey found it is the only one of the twelve final H3s built that way. On the other eleven
pages the final H3 states something substantive first and the recurring-adviser passage is appended
to it, which is the arrangement step 1 established and the rest of the guide follows.

CLAUDE.md's "The recurring adviser" section fixes the passage's placement — last thing in the final
H3, opening with those words — and that rule is satisfied here. What is missing is the subsection's
own content before it. As built, step 6's last heading carries the illustration and the "You leave
this step holding" paragraph and nothing else, so the heading names work the section never describes
in its own voice.

**What it needs:** a sentence or two of the subsection's own before the illustration begins, matching
how the other eleven final H3s open. Not written here. Step 6 was outside the scope of PR #42, which
is where the adviser passages for the later steps were added and where this arrangement would
otherwise have been caught.

**Belongs to:** the same step-page voice pass as item 18 — both are step 6 closing-section items and
should be read together.

## 20. Most links to the figures page are bare where an anchored link exists, and the worksheet template requires anchors

Forty-two of the sixty-nine links to `/tools/this-years-figures` in `content/` point at the page with
no anchor, even where the figures page carries a section whose id matches the linking page exactly.
All twenty-four anchored links in the repo come from [content/glossary/index.mdx](content/glossary/index.mdx);
no step page and no area page uses one. The inventory in PR #48 has the full breakdown.

The worksheet page template in CLAUDE.md tells a worksheet to "name the concept and link the matching
section of /tools/this-years-figures" — an anchored link. So the first worksheet shipped will be the
first non-glossary page linking by anchor, and non-glossary content will be inconsistent with itself:
worksheets anchored, the step and area pages they sit beside not.

Not every bare link has an anchor to convert to. The figures page has no section for steps 2 and 3,
because neither step produces a regulated figure, and a page can legitimately refer to the figures
page as a whole rather than to one section. A sweep has to check each link against the section list,
not rewrite all forty-two.

**What it needs:** a decision on which way the inconsistency resolves — convert the bare links that
have a matching section, or relax the worksheet template's anchor requirement — and then the sweep or
the edit. Not answered here.

**Belongs to:** the consistency pass (build order item 5), or the first worksheet PR if one comes
first, since that is the PR that creates the inconsistency.

## 21. Two Form ADV General Instructions figures the RAUM worksheet needs have no row on the figures page

[content/tools/calculating-your-regulatory-assets-under-management/index.mdx](content/tools/calculating-your-regulatory-assets-under-management/index.mdx)
names two figures in plain language and sends the reader to the Form ADV General Instructions for
each, because neither has a row on `/tools/this-years-figures` to link by anchor:

- **The share of an account's value that must be securities** for the account to be a securities
  portfolio, and the treatment of cash and cash equivalents for that test.
- **How recent the valuation date must be** relative to the date of filing.

Both are set by the same instructions, both belong under the Step 1 section where the other
regulator-determination figures already sit, and neither was printed on the worksheet or given an
invented anchor. The sections exist; it is the rows that are missing.

**What it needs:** both rows added under `#decide-if-independence-fits`, with the Value taken from a
fetched copy of the Form ADV General Instructions rather than from memory, and the worksheet's two
plain-language sentences then repointed at the anchor. Not done here — every figure-page Value has to
come from a fetched primary source, which makes this a figures-page pass rather than a content edit.

**Belongs to:** the next figures-page pass, with items 2, 16 and 17.

## 22. The three worksheets are barely reachable from the steps they support

A reader working the sidebar in order meets `/tools` after the twelve steps and the nine areas have
already gone by, so the only way a worksheet reaches them at the moment it is useful is a link from
its own step. Those links are thin or missing:

- [content/tools/building-your-running-calendar/index.mdx](content/tools/building-your-running-calendar/index.mdx)
  has no inbound link anywhere in `content/` except the tools landing page.
  [content/process/stay-registered-and-compliant/index.mdx](content/process/stay-registered-and-compliant/index.mdx)
  closes on "a running calendar of amendments, renewals, deliveries, and retained records" and its
  practitioner Callout tells the reader to put three things "on the same calendar" — and never links
  the worksheet that builds it.
- [content/process/decide-if-independence-fits/index.mdx](content/process/decide-if-independence-fits/index.mdx)
  links [Reaching Your Written Decision](/tools/reaching-your-written-decision) once, inside the
  practitioner Callout, under the link text "your runway estimate". The H3 that actually produces the
  written decision, "Write down where you land," does not link it.
- [content/process/choose-your-regulator/index.mdx](content/process/choose-your-regulator/index.mdx)
  links the RAUM worksheet once, inside the practitioner Callout, under the link text "worksheet".
  The H3 that walks the calculation, "Establish your regulatory assets under management," sends the
  reader to the SEC's Form ADV General Instructions PDF instead — off-site, to a PDF, on a phone,
  when the site's own worksheet is what the reader wants there.

The tools landing page states the relationship in the other direction for all three ("It supports
[step]"), so the intent is already written down; it is the return link that is missing or mislabelled.

**What it needs:** a decision on where a worksheet link belongs on a step page — in the body H3 that
produces the artifact, in the practitioner Callout, in a "Next step" neighbour, or more than one —
and then the edits. The link text is part of the same decision: "your runway estimate" and
"worksheet" both name the thing the worksheet computes rather than the page the reader lands on. Not
answered here.

**Belongs to:** a step-page pass. Item 20's figures-page anchor sweep touches the same sentences on
several of these pages, so the two are worth doing together.

## 23. Four glossary terms are defined but nothing links to them

Every page that names one of these concepts describes it in plain words and does not link the
definition that already exists:

- **Mid-sized adviser band** — [content/process/choose-your-regulator/index.mdx](content/process/choose-your-regulator/index.mdx)
  calls it "a band in between where the answer depends on the home state" and then "The middle band",
  both unlinked, while linking [buffer on either side of the SEC line](/glossary#buffer-on-either-side-of-the-sec-line)
  in the same paragraph. The figures page carries a row named "Mid-sized adviser band".
- **Brochure supplement** — [content/process/write-the-disclosure-documents/index.mdx](content/process/write-the-disclosure-documents/index.mdx)
  introduces it as "a second and much shorter document describes the individual" and calls it "the
  supplement" thereafter, all unlinked, while linking [firm brochure](/glossary#firm-brochure) in the
  H3 above it.
- **Standardized account transfer** — [content/process/leave-and-transition-clients/index.mdx](content/process/leave-and-transition-clients/index.mdx)
  calls it "a standardized transfer process that most custodians and broker-dealers participate in",
  unlinked.
- **Hypothetical performance** — [content/domains/marketing-and-growth/index.mdx](content/domains/marketing-and-growth/index.mdx)
  says "an illustration or a projection is not a track record and cannot be dressed as one",
  unlinked. The figures page carries a row named "Treatment required for hypothetical performance".

This also makes CLAUDE.md's own definition of the Glossary running list inaccurate: it describes the
list as "Every term that any page links to /glossary," and four of the sixty entries are not linked
from anywhere.

**What it needs:** a link on first mention in each of the four places, checked against the one-callout
and first-mention conventions the surrounding pages already follow — or, if a term is genuinely not
worth linking from prose, a decision about what its presence in the running list then means. Not
answered here.

**Belongs to:** the consistency pass (build order item 5).

## 24. "Form ADV" links to the glossary on three pages and to an SEC PDF on a fourth

`[Form ADV](/glossary#form-adv)` appears on
[content/process/choose-your-regulator/index.mdx](content/process/choose-your-regulator/index.mdx),
[content/process/file-and-get-approved/index.mdx](content/process/file-and-get-approved/index.mdx),
and [content/domains/compliance-and-supervision/index.mdx](content/domains/compliance-and-supervision/index.mdx).
On [content/process/write-the-disclosure-documents/index.mdx](content/process/write-the-disclosure-documents/index.mdx)
the same two words link to `https://www.sec.gov/about/forms/formadv-part2.pdf` instead.

A reader who has learned by step 5 that a blue "Form ADV" is a glossary definition taps it on step 7
and gets a PDF download. On a phone that is a full context switch out of the site, and it happens at
the one point in the guide where the reader most needs the glossary's short version of what the form
is and what its parts are.

The same URL is also described two different ways where it is cited properly, as a "Go deeper" entry:
"SEC: Form ADV Part 2 General Instructions" on
[content/domains/client-education/index.mdx](content/domains/client-education/index.mdx) and "SEC:
Form ADV Part 2 Instructions" on
[content/domains/service-and-pricing-models/index.mdx](content/domains/service-and-pricing-models/index.mdx).

**What it needs:** step 7's sentence repointed at `/glossary#form-adv` with the SEC instructions cited
some other way if they are needed there at all, and one spelling settled for the document's name
across the two area pages. Not done here — the sentence has to be reworded, not just relinked, so it
is not a one-line fix.

**Belongs to:** the consistency pass (build order item 5).

## 25. "Which practice areas apply" bullets start capitalised on steps 1–7 and lowercase on steps 8–12

Every bullet under that heading opens with a capital letter on
`decide-if-independence-fits`, `design-the-firm`, `set-your-advice-approach`, `form-the-business`,
`choose-your-regulator`, `qualify-as-an-adviser`, and `write-the-disclosure-documents`
("The runway estimate and revenue analysis in this step…"), and with a lowercase letter on
`write-the-policies`, `file-and-get-approved`, `set-up-custody-and-technology`,
`leave-and-transition-clients`, and `stay-registered-and-compliant`
("the privacy policy and the security and continuity procedures written here…").

The split is clean at step 8 and matches the order the pages were built, so nothing is wrong on any
one page — it only shows when the steps are read in sequence, which is how the sidebar presents them.
Seventeen bullets across five files are on the lowercase side.

**What it needs:** a ruling on which form is the house style, then the sweep. The capitalised form is
on more pages and reads as the earlier decision, but that is not a reason on its own. Not decided
here, and no bullet was touched.

**Belongs to:** a step-page voice pass, with items 18 and 19.

## 26. Steps 10 and 11 give opposite instructions about whether they overlap

[content/process/set-up-custody-and-technology/index.mdx](content/process/set-up-custody-and-technology/index.mdx)
is step 10. [content/process/leave-and-transition-clients/index.mdx](content/process/leave-and-transition-clients/index.mdx)
is step 11, and its Common mistakes list closes with:

> Starting client conversations before the custody and technology work from the previous step is
> actually finished, leaving nowhere for a transferring account to land.

Its practitioner Callout, the next thing on the page, opens:

> In practice, this step rarely waits for the previous one to finish. Client conversations and
> account-transfer paperwork often start while the custodial relationship and operational systems from
> the previous step are still being tested… Treat the two steps as running in parallel, even though
> this guide presents them in sequence.

Both are defensible on their own — the mistake is about collecting authorizations you cannot execute,
the Callout is about not idling the calendar — but they are three lines apart, they use the same
words for the same two activities, and on a phone they land on the same screen. A reader cannot tell
from the page which one is the guidance.

**What it needs:** one of the two reworded so the distinction it turns on is visible: the Callout's
"far enough along" test is the real rule, and the bullet reads as an absolute. Rewording the bullet is
the likelier fix. Not written here.

**Belongs to:** a step-page voice pass, with items 18, 19 and 25.

## 27. The SEC-path callout on step 9 is the densest block on the site

There are twenty-three SEC-path callouts across `content/`, running from 44 to 115 words with a
median around 67. The longest by a wide margin is the one under "Know when the registration is
effective" on
[content/process/file-and-get-approved/index.mdx](content/process/file-and-get-approved/index.mdx),
at 115 words in three sentences.

Length alone would not matter. What makes it hard on a narrow screen is that all three sentences are
qualifications of each other — the statute gives a deadline to act "rather than a date on which your
own registration takes effect by itself", then a second deadline applies to proceedings and can be
extended, so "a filing that draws them resolves well after the deadline to act has passed", then a
state's review is on a different clock again. The reader is on the state-registered path, so the
whole block is telling them about a timetable that does not apply to them, in a warning-coloured box
roughly a phone screen tall, at the point in the page where they wanted to know when they can start
working.

It is within the callout rule's one-to-three-sentence limit as written; the limit counts sentences,
not clauses.

**What it needs:** a trim, or a split of the second sentence's content out of the callout, or a
ruling that the divergence genuinely needs all of it. The two figures behind it already have their own
rows under `#file-and-get-approved` on the figures page, so some of the detail may not need to be in
the callout at all. Not attempted here.

**Belongs to:** a step-page voice pass, with items 18, 19, 25 and 26.

## 28. The running calendar worksheet opens on a claim the practice areas contradict, and keeps a heading about "the number" on a page with no number

Two things on
[content/tools/building-your-running-calendar/index.mdx](content/tools/building-your-running-calendar/index.mdx),
both of which only bite in sidebar order.

The first line of the page is "Every page in this guide before this one produces something that
finishes." The reader has just come through the nine practice-area pages, whose landing page
([content/domains/index.mdx](content/domains/index.mdx)) says "a Practice Area never finishes — it is
a subject you keep working in for as long as the firm operates," and each of which repeats the point
in its own opening paragraph. The sentence is reaching for a real contrast — everything else hands you
a finished artifact, this hands you an instrument you reopen — but as written it is contradicted by
the nine pages immediately before it.

The second is that the page's "What this measures" section answers "Not a quantity," and four
headings later the fixed worksheet heading reads "What the number does and does not tell you." The
section under it recovers well ("The count tells you how much the firm is tracking"), but the heading
asserts a number the page has already said it does not produce.

**What it needs:** the opening sentence rewritten to contrast artifacts rather than pages, which does
not require touching anything else. The heading is a template question, not a page question — CLAUDE.md's
worksheet skeleton fixes that wording for all worksheets, so changing it here means changing the
template or granting this page an exception. Neither was done here.

**Belongs to:** the first one is a single-page edit and can go in any worksheet pass; the second is a
CLAUDE.md decision and should be settled before a fourth worksheet is written.

## 29. /about is the only page that ends without a Related list, and the only one with no description

[content/about/index.mdx](content/about/index.mdx) fails both checks, and it is the sole page in
`content/` that fails either:

- It has no `## Related` list. Every other page outside `content/process/` and `content/domains/` has
  one, and those two folders substitute their own cross-link sections. CLAUDE.md's writing style
  requires the list for exactly this set of pages.
- Its frontmatter has `title` but no `description`. All thirty other pages carry one.

About is the last entry in the sidebar, so a reader who has gone through the whole guide in order ends
on the one page with nowhere to go next. The page's final line is the CC BY attribution string, which
makes the stop feel like the end of a licence file rather than the end of a guide.

**What it needs:** a Related list of two to four links and a one-sentence description. Both are
authoring rather than mechanical, and the Related list's targets are a small judgement call —
[Introduction](/introduction) is already linked inline in the body, so the list should probably not
lead with it. Not written here.

**Belongs to:** the consistency pass (build order item 5).
