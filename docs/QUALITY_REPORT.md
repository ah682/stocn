# Browser check notes

Checks recorded on 2026-08-19 (Europe/London).

## Layout

The layout was compared with the public STO `/pc` page, including navigation and interactive states.

At a 1920 × 1080 viewport, the recorded section positions were:

| Landmark | Reference Y | Build Y | Difference |
| --- | ---: | ---: | ---: |
| Hero end | 803.000 px | 803.000 px | 0.000 px |
| Merchant service start | 1157.969 px | 1157.969 px | 0.000 px |
| Personal service start | 1918.969 px | 1918.969 px | 0.000 px |
| Franchise start | 2623.703 px | 2623.703 px | 0.000 px |
| News content start | 3480.672 px | 3480.656 px | −0.016 px |
| Footer start | 4051.000 px | 4051.000 px | 0.000 px |
| Document end | 4345.984 px | 4345.984 px | 0.000 px |

The desktop design intentionally retains the original 1920-based proportional system. Below 900 px, it switches to a purpose-built responsive composition because the public desktop route itself does not provide a usable mobile layout.

## Browser checks

Browser checks ran at 1920 × 1080, 1440 × 900, 1024 × 768, and 390 × 844. All four passed:

- zero horizontal overflow;
- zero image failures;
- zero console, page, or request errors;
- zero external requests;
- zero duplicate IDs, unnamed buttons, or images without `alt` attributes;
- desktop dropdown navigation;
- mobile navigation open/close;
- merchant capability tabs;
- invalid tracking-number feedback;
- synthetic tracking timeline;
- local quote calculation;
- modal open, submit, and close flows.

## Lighthouse

The build scored:

| Category | Score |
| --- | ---: |
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Measured mobile metrics included 2.1 s Largest Contentful Paint, 0 ms Total Blocking Time, 0 Cumulative Layout Shift, and approximately 729 KiB transferred. Lighthouse scores can vary by machine and runner.

## Network and data checks

- Restrictive Content Security Policy is declared in the document.
- Frontend source contains no `http://` or `https://` runtime URL.
- No `fetch`, XHR, WebSocket, beacon, cookie, or browser-storage usage is present.
- All form handling is local and ephemeral.
- Tracking, pricing, serviceability, and location data are explicitly synthetic.
- The documented OpenAPI file has no server hostname and no production security material.
- `npm audit` reported zero known vulnerabilities on that date.

## Local checks

```bash
npm ci
npm run check
npm run build
npm run preview
```

The deployment artifact is `dist/`.
