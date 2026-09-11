# The Independent Path

An open, public guide to establishing and running an independent registered investment advisory (RIA) firm in the United States. It walks through the twelve chronological steps of going independent — from deciding whether the model fits through staying registered once the firm is running — alongside nine standing practice areas that apply throughout, such as compliance, technology, and firm economics.

## Stack

- [Nextra](https://nextra.site) 4 with `nextra-theme-docs`
- Next.js App Router
- MDX content in `content/`
- [Pagefind](https://pagefind.app) search index generated at build time
- pnpm as the only package manager

## Content organization

- `content/introduction/` — what the guide covers, who it is for, and how to use it.
- `content/process/` — The Independent Path: one folder per step, in chronological order.
- `content/domains/` — Practice Areas: one folder per standing subject area.
- `content/tools/` — calculators, checklists, and worksheets, including `this-years-figures`, the single page that holds every limit, rate, threshold, and deadline set by law, regulation, or an agency.
- `content/glossary/` — one alphabetical glossary page.
- `content/about/` — what this project is and how it is licensed.

Each content page is its own folder with an `index.mdx` file. `CLAUDE.md` has the full set of conventions — page templates, writing style, sourcing, and hard rules — that every page follows.

## Run locally

Requires Node.js 20+ and [pnpm](https://pnpm.io).

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

`pnpm wordcount <path>` counts the body prose of a content page, following the word-count rules in `CLAUDE.md`.

## License

The prose in `content/` is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); see `LICENSE-CONTENT.md`. The code is licensed under MIT; see `LICENSE`.

To credit the prose, copy this line:

The Independent Path — https://solo-ria-guide.vercel.app — CC BY 4.0
