# Follow-ups

Deferred work: items identified during a build session that are out of scope for that
session's prompt, blocked on something else landing first, or otherwise held for a
later pass. This file is maintained going forward as part of every build session —
append new deferrals here as they come up instead of leaving them stranded in a PR
description.

## 1. Convert "Which practice areas apply" bullets from bold text to links

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

## 10. content/domains/_meta.js is ordered by build order, not by the canonical area order

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
for area pages, and (c) ratchet versus depth, now with nine finished pages. Separately, at the consistency pass, re-read the closing sections of
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
