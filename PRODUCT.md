# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
SvelteKit 3 + Svelte 5 (runes), TypeScript, `adapter-static` (fully prerendered), Bun 1.4.4 as package manager and runtime. Single page, Russian-language. Content lives in `src/lib/data.ts`.

## Users
OstMaster serves four audiences: public-sector buyers (schools, kindergartens, clinics, municipal capital-construction departments), commercial clients (shops, shopping centres, offices, warehouses), private individuals, and partners or general contractors who need a low-current systems subcontractor. Visitors typically arrive already knowing the company (referral, tender, earlier contact) and check whether it is a dependable contractor.

## Product Purpose
Website of ООО «ОстМастер», a security and low-current systems contractor in Surgut (Khanty-Mansi Autonomous Okrug, Russia). It presents the services the company installs and the objects it has delivered. Success means a visitor is convinced the company is reliable and is able to reach it by phone or email.

## Positioning
Comprehensive security systems from one contractor, backed by a long list of delivered municipal and commercial objects across the Khanty-Mansi region. The director's statement frames the stance: working, properly specified systems built jointly with the customer, not "бутафория" (decoration).

## Operating Context
Regional B2B and B2G contracting. Work is scoped with the customer's technical staff and often tied to municipal procurement. Contact is by phone and email; the office is at Сургут, ул. Иосифа Каролинского, 9. Hours: Mon–Fri 9:00–20:00, Sat–Sun 9:00–18:00.

## Capabilities and Constraints
Services: fire alarm; CCTV; access control (barriers, checkpoints, turnstiles); intruder alarm; telephone networks and PBX; structured cabling and LANs; automatic fire suppression; voice alarm and evacuation control.
Constraints: static site, no backend, no request form. The primary CTA is contact details, not a lead form. Phone and email links must stay functional. Content is in Russian.
Undecided: whether a request form or lead flow will be added.

## Brand Commitments
Company name «ОстМастер», tagline «Комплексные системы безопасности», and the existing logo (emblem vectorised from the original raster (traced silhouettes + gradients) at `src/lib/assets/emblem.svg`, an ellipse monogram with the word МАСТЕР; the wordmark text beside it is live HTML text in `Logo.svelte`). Director name and photo are confirmed real: Иван Иванович Мастеров, director.
Visual direction (owner's choice, November 2026): strict engineering look replacing the earlier "keep close to the 2012 original" preference. Graphite dark theme with a light variant, IBM Plex Sans, one blue accent, hairline rules, no decorative ornament. The logo emblem stays as vectorised from the original.

## Evidence on Hand
Real: the client and object lists (municipal and commercial, with addresses), the director's statement, contact details, and the service descriptions, all carried over from the 2012 site.
Exists but not yet on the site: licenses and permits (e.g. fire-safety and SRO-type approvals). Add only from the user's own documents; do not invent license numbers.
Stale: the source site dates from 2012, so years of operation, object counts, and the service list may have changed. Do not state new figures without the user's confirmation. No testimonials, case studies, or pricing exist, and none may be fabricated.

## Product Principles
1. Reliability is the message: every claim is backed by a real, named object or document.
2. Contact paths (phone, email, address, hours) are always visible and one tap away.
3. Say only what is verified; mark stale or unconfirmed facts instead of polishing them into claims.
4. Serve both institutional buyers who verify credentials and private clients who want plain language.
5. Keep the site light and static, readable on a phone.

## Accessibility & Inclusion
No product-specific standard was set. Target WCAG 2.2 AA as a baseline: keyboard operation, visible focus, `prefers-reduced-motion` respected, light and dark themes, and phone use. The auto-advancing service carousel has no stop control by the owner's choice; it pauses on hover and focus only.
