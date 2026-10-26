# STO homepage recreation

A recreation of STO Express's Chinese homepage, built with HTML, CSS and vanilla
JavaScript. It includes responsive navigation, service tabs, dialogs and local
tracking, quote and service-area demos. Vite handles development and builds.

## Run locally

Use Node.js 22.12 or newer and npm.

```bash
git clone https://github.com/ah682/stocn.git
cd stocn
npm ci
npm run dev
```

Open the URL printed by Vite. Try tracking number `773123456789012` to see the
sample shipment timeline. Tracking results, prices and service areas use demo data
embedded in `app.js`; JSON examples are also included in `public/data/`. Forms run
locally and do not send enquiries or shipments.

## Development

- `npm run check` checks local assets, DOM hooks, JSON fixtures and network usage.
- `npm run build` creates `dist/`.
- `npm run preview` serves the build locally.

After interface changes, check keyboard navigation and the mobile layout too.
The [browser check notes](docs/QUALITY_REPORT.md) record the August 2026 layout and
performance measurements.

The [API examples](schema/README.md) describe a possible future integration; no
backend is connected. See [security notes](SECURITY.md) for the current setup.

STO branding, photographs and reference artwork belong to their respective owners.
