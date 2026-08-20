# STO shareholder website showcase

A self-contained static recreation of the public STO desktop homepage at `/pc`, built for GitHub Pages and stakeholder presentations.

## What is included

- Faithful desktop proportions, imagery, typography, navigation, hover states, and section animations.
- A purpose-built responsive layout for mobile and tablet screens.
- Local demonstrations for tracking, shipping, quotes, serviceability, customer support, merchant cooperation, franchise enquiries, news, and investor relations.
- Vendored public visual assets, so the site makes no runtime request to the STO website or image CDN.
- Synthetic fixtures under `public/data/` and a sanitized design-only API contract under `schema/`.
- A restrictive Content Security Policy and no analytics, cookies, external scripts, production URLs, credentials, or customer data.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite. The demonstration tracking number is `773123456789012`.

## Validate and build

```bash
npm run check
npm run build
npm run preview
```

The production-ready static output is written to `dist/`.

## Publish to GitHub Pages

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Use the included `.github/workflows/pages.yml` workflow, or upload the contents of `dist/` with your existing deployment process.

The Vite base path is relative (`./`), so the output works both at an organisation root and at a repository subpath.

## Security and data boundary

The interface is intentionally non-production. Forms are handled only in browser memory and are cleared when their modal closes. The tracking timeline, fees, coverage cities, and news index are presentation fixtures. The schema does not identify real hosts, internal services, authentication material, routing logic, customer records, or business-sensitive rate tables.

Before connecting any real backend, require formal review from STO security, privacy, legal, data-governance, accessibility, and platform owners. See `schema/README.md` for the intended boundary.

Measured handoff results and the desktop parity table are recorded in `docs/QUALITY_REPORT.md`. The repository's explicit exclusions and future integration requirements are in `SECURITY.md`.
