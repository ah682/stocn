# API examples

[openapi.yaml](openapi.yaml) sketches the requests and responses for a future
backend. It contains synthetic examples and no server address. The current site
uses local demo data and does not call these endpoints.

## Endpoints

- `tracking`: accept a list of tracking numbers and return shipment events.
- `quotes`: estimate a price from origin, destination, weight and dimensions.
- `serviceability`: check whether an area is covered.
- `leads`: receive business, franchise or feedback enquiries with consent.
- `news`: return published news.

The `public/data/` directory contains JSON examples for the demo. If you add a backend,
implement authentication, input validation, rate limits and data retention alongside
the endpoints.
