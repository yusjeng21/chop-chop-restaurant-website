# Chop Chop Website Implementation Plan

## Goal

Rebuild the supplied Chop Chop food-delivery landing page as a responsive TypeScript site that matches the design handoff. After implementation and verification, publish it to a new public GitHub repository and deploy it through a new Vercel project.

## Decisions

- Use Vite, React, TypeScript, and Tailwind CSS v4.
- Treat `design-handoff/style-guide.md` and both comps as authoritative for copy, visual design, breakpoints, and behavior.
- Use the provided SVG artwork and retain its photo-credit record.
- Keep this frontend-only: navigation and relevant calls to action work, but dish “Add” controls do not create a fake cart or checkout.
- Create a public GitHub repository named `chop-chop-restaurant-website` and connect it to a new Vercel project after local verification.
- Do not add a fabricated app-store/download destination; use a real provided link if one exists, otherwise keep the CTA intentionally non-deceptive.

## Implementation

1. Scaffold the Vite React + TypeScript project and Tailwind v4 integration, with development, type-check/lint, and production-build scripts.
2. Copy the supplied logo, phone, step, and dish SVGs to the public asset directory; use the logo as the favicon and preserve `CREDITS.md`.
3. Implement the responsive header, cream hero with phone art and stat badge, dark three-step section, popular dishes, delivery areas, and dark footer. Match the exact copy and ordering in the comps, using typed data for repeated content where appropriate.
4. Match all documented tokens, system font, spacing, breakpoints, borders, hover/focus behavior, and accessible image treatment.
5. Run type-check/lint and production build. Inspect desktop and mobile rendering against the comps, including keyboard focus, image loading, console errors, and horizontal overflow; correct any mismatches.
6. Create/push the public GitHub repository and verify its remote, visibility, and default branch.
7. Import the repository into Vercel, use Vite build defaults (`npm run build`, output `dist`), deploy production, and smoke-test the live page at desktop and mobile widths.

## References

- `design-handoff/style-guide.md`
- `design-handoff/comp-desktop.png`
- `design-handoff/comp-mobile.png`
- `design-handoff/assets/`

## Open Deployment Prerequisite

GitHub and Vercel account authorization must be available when publishing and deploying. The proposed repository name may need adjustment if it is already taken in the selected GitHub account.
