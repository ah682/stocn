# Security notes

The site uses public page content and synthetic demo data. Tracking, quotes and
service-area checks run locally. Form values stay in the page; they are not sent
to a server or saved in browser storage.

The Content Security Policy limits connections and form submissions to the same
origin. The current handlers run locally, without API calls. The page has no
analytics, third-party embeds, cookies or browser storage.

## Adding a backend

The [API examples](schema/README.md) describe request and response shapes. A server
implementation would also need input validation, access controls, rate limits and
a retention policy for submitted data. Review the Content Security Policy when
adding network access, and keep credentials and real customer records out of the
static files.
