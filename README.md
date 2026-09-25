# Chop Chop

A responsive landing page for Chop Chop, a fictional food-delivery service for the Kombos. Built with React, TypeScript, Vite, and Tailwind CSS v4.

## Local Development

Use Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Vite prints the local URL when the development server starts. It uses port 5173 by default and selects another available port if needed.

## Checks and Build

```sh
npm run lint
npm run build
npm run preview
```

`npm run build` runs the TypeScript project build and creates the production site in `dist/`. `npm run preview` serves that build locally.

## Deployment

The public source repository is [yusjeng21/chop-chop-restaurant-website](https://github.com/yusjeng21/chop-chop-restaurant-website), connected to the Chop Chop project on Vercel. Pushes to `main` are deployed by Vercel. The production site is [chop-chop-restaurant-website-sigma.vercel.app](https://chop-chop-restaurant-website-sigma.vercel.app).

For a direct production deployment from the local project, authenticate with Vercel and run:

```sh
npx vercel --prod
```

The Vercel project uses the Vite build and `dist` output directory.

## Course Practice

This project is a practice/lab exercise for my **Agentic Software Engineering I** course, exploring a new way of building software with the assistance of agents. The work follows **The Agentic Build Loop**:

1. Plan with the agent in Plan mode.
2. Review and save the plan.
3. Implement/execute the plan in Agent mode.
4. Review the diffs (files): accept or reject with your feedback.
5. Repeat the process when there is more work to plan and do.

## Design Handoff

The visual references and implementation guidance are in `design-handoff/`. Public SVG artwork and photo credits are in `public/assets/`.

Keep this README current as the project, development workflow, or deployment setup changes.
