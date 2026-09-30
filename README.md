# The Independent Path

An open, public guide to establishing and running an independent registered investment advisory (RIA) firm in the United States. It walks through the twelve chronological steps of going independent — from deciding whether the model fits through staying registered once the firm is running — alongside nine standing practice areas that apply throughout, such as compliance, technology, and firm economics.

## Stack

- [Nextra](https://nextra.site) 4 with `nextra-theme-docs`, restyled with a slate theme (dark only) in `app/globals.css`
- A slate code-highlighting theme in `code-theme.mjs`, passed to Nextra in `next.config.mjs`
- [Outfit](https://github.com/Outfitio/Outfit-Fonts), self-hosted from `fonts/` with `next/font/local`
- Next.js App Router
- MDX content in `content/`
- [Pagefind](https://pagefind.app) search index generated at build time
- [Playwright](https://playwright.dev) (dev only), for `pnpm theme-audit`
- pnpm as the only package manager

## Content organization

- `content/introduction/` — what the guide covers, who it is for, and how to use it.
- `content/process/` — The Independent Path: one folder per step, in chronological order.
- `content/domains/` — Practice Areas: one folder per standing subject area.
- `content/tools/` — the worksheets, and `this-years-figures`, the single page that holds every limit, rate, threshold, and deadline set by law, regulation, or an agency.
- `content/glossary/` — one alphabetical glossary page.
- `content/about/` — what this project is and how it is licensed.

Each content page is its own folder with an `index.mdx` file. `CLAUDE.md` has the full set of conventions — page templates, writing style, sourcing, and hard rules — that every page follows.

## Run locally

Requires Node.js 20.9 or later and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Build

```sh
pnpm build
pnpm start
```

`pnpm build` also generates the search index (Pagefind) into `public/_pagefind`.

On Vercel, set `VERCEL_DEEP_CLONE=true` (Production and Preview) in each project's environment variables. Without it Vercel clones the repository shallowly and Nextra warns "repository is shallow cloned" during the build.

`pnpm theme-audit [url]` re-checks the theme in a running build (`pnpm start`, default http://localhost:3000): dark mode forced, no theme switch, no neutral greys, text contrast and focus rings, on every sidebar page at 1280px and 390px. Run it after a Nextra upgrade or any colour change. The first run on a new machine needs `pnpm exec playwright install chromium`.

`pnpm wordcount <path>` counts the body prose of a content page, following the word-count rules in `CLAUDE.md`.

## License

The prose in `content/` is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); see `LICENSE-CONTENT.md`. The code is licensed under MIT; see `LICENSE`. The Outfit font in `fonts/` is licensed under the SIL Open Font License 1.1 (see `fonts/OFL.txt`).

To credit the prose, copy this line:

`The Independent Path — https://solo-ria-guide.vercel.app — CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/`

If you adapt or modify the writing, say so where you credit it.
