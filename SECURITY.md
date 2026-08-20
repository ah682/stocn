# Security and privacy posture

This repository is a static shareholder demonstration. It is designed to contain public brand content and synthetic fixtures only.

## Deliberately excluded

- production API URLs and internal service names;
- credentials, tokens, cookies, signing material, or authentication logic;
- customer, shipment, employee, applicant, franchisee, or investor records;
- real rate cards, routing rules, network topology, or operational dashboards;
- analytics, telemetry, online chat, maps, and third-party embeds;
- form submission or persistent browser storage.

The interface must not be represented as a live shipping channel. Forms complete locally and discard their values. The only usable tracking number is the synthetic fixture documented in the README.

## Before connecting a backend

Require formal approval from STO security, privacy, legal, data-governance, accessibility, and platform owners. At minimum, add origin-bound anti-abuse controls, strict server-side validation, rate limiting, opaque identifiers, consent records, retention limits, encryption, audit logging, monitoring, and threat modelling. Never treat the design-only schema as a ready-to-deploy security architecture.

If this repository is published, review the visibility of corporate imagery and QR codes under STO's normal brand and communications approval process.
