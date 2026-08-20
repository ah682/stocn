# Sanitized backend contract

This directory describes the minimum API shapes a future integration could implement. It is documentation only: the shareholder site does not call these paths, include a server hostname, or contain production credentials, identifiers, internal topology, business rules, customer records, or observability code.

The contract deliberately uses generic resource names and synthetic examples. Before any real implementation, the owning STO security, legal, data-governance, and platform teams should review authentication, rate limits, retention, masking, audit logging, anti-enumeration controls, and jurisdiction-specific requirements.

## Intended boundaries

- `tracking`: accept a bounded list of tracking numbers and return customer-safe events.
- `quotes`: provide a non-binding quote from origin, destination, weight, and dimensions.
- `serviceability`: answer whether an area is serviceable without exposing internal network topology.
- `leads`: accept business, franchise, or feedback enquiries after explicit consent.
- `news`: provide already-published public content.

The local files under `public/data/` are synthetic presentation fixtures and are not intended to seed a production database.
