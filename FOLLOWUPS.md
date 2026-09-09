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

**Belongs to:** the Marketing and Growth build, and the source-currency sweep (item 3).

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

## 9. Two superseded NASAA model rules are still hosted on nasaa.org and resolve normally

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

**What it needs:** the source-currency sweep should confirm no citation anywhere in the repo
points at either superseded PDF, and future pages touching cybersecurity, privacy, business
continuity, or succession should cite the 2020 consolidated rule.

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
item 7, and the superseded 2022 PDF of the same model rule is still hosted and still resolves.

**What it needs:** fetch all six from a session with egress to those domains, confirm each resolves and
is the current version, and clear or replace any that fail.

**Belongs to:** build order item 5 (source-currency sweep) — or sooner, if a session with network
access to those domains comes up first. Best done in one pass together with item 8.
