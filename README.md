# STO homepage recreation

A frontend portfolio study recreating STO Express's Chinese corporate homepage.
The implementation includes responsive navigation, service tabs, dialogs and local
tracking/price/service-area demonstrations. It is an independent recreation, not
an official STO service or evidence of a commercial engagement.

Built with HTML, CSS and vanilla JavaScript; Vite provides development and production
bundling. Images and demo fixtures are in `public/`. Tracking results and quotes are
synthetic, forms stay local, and the frontend does not call a logistics backend.
The OpenAPI files in `schema/` describe a possible boundary, not an implemented API.

## Run locally

The locked Vite package declares Node.js `^20.19.0 || >=22.12.0`; use a compatible
runtime and npm.

```bash
git clone https://github.com/ah682/stocn.git
cd stocn
npm ci
npm run dev
```

Use the URL printed by Vite. `npm run check` validates local assets, DOM hooks,
JSON fixtures and the static network boundary. `npm run build` writes `dist/`;
`npm run preview` serves that build locally. There is no production account or
parcel data to enter.

## Status and provenance

This is a static demo. The dated [quality report](docs/QUALITY_REPORT.md) records
historical lab checks; its scores are not a current hosted-service guarantee.
Changes should keep demo data explicit and run the static check/build plus a manual
keyboard and narrow-screen check for affected interactions.

STO names, logos, photographs and visual references belong to their respective
rights holders. Their presence demonstrates a recreation and does not grant reuse
rights or imply affiliation. Review upstream permissions before republishing assets;
this README adds no licence grant.
