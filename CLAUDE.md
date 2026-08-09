# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

DNA Website — the public website for Degrowth Network Australia, built with Next.js (App Router) and Sanity CMS.

## Commands

```bash
# Development
pnpm dev                        # Start dev server (runs sanity:typegen first via predev hook)
pnpm build                      # Production build (runs sanity:typegen first via prebuild hook)
pnpm start                      # Start production server

# Sanity
pnpm sanity:typegen             # Extract schema + regenerate src/sanity/types.ts. Run after any schema
                                 # change in src/sanity/schemaTypes/ or GROQ query change.

# Lint & format
pnpm lint                       # ESLint
pnpm prettier:write             # Format entire codebase
pnpm prettier:check             # Check formatting only

# Unit tests (Vitest, node environment)
pnpm test                       # Run all unit tests (files matching **/*.test.ts)
pnpm test:coverage              # Unit tests with coverage
npx vitest --project=node run path/to/file.test.ts    # Run a single unit test file

# Storybook interaction tests (Vitest, browser/Playwright environment)
pnpm storybook                  # Start Storybook UI at :6006 (also runs tests interactively)
pnpm test-storybook              # Run all Storybook play-function tests headlessly
pnpm test-storybook:coverage    # With coverage
npx vitest --project=storybook run path/to/Component.stories.tsx   # Run a single story's tests

# Visual regression
pnpm chromatic                  # Run Chromatic snapshot tests (also runs automatically on push; non-blocking)
```

Note: on first run, if `node_modules/.cache/storybook` is empty, `pnpm test-storybook` may fail with dynamic import errors — re-run and it should pass.

## Architecture

### Content model: Sanity → GROQ → typegen → components

Content is authored in Sanity Studio (embedded at `/studio`, config in `src/sanity/schemaTypes/`) and consumed via GROQ queries in `src/sanity/lib/queries.ts`. Schema types are split into:
- `schemaTypes/contentModels/` — standalone content entities (groups, national groups, activities, links, external resources, participant agreements, SEO).
- `schemaTypes/pageBuilder/` — modular page-building blocks (hero, video, gallery, rich text, CTA, text-with-illustration) composed into `pageType`, which pages assemble via a `pageBuilder` array field.

**`src/sanity/types.ts` is generated — never edit it by hand.** After changing any file under `schemaTypes/` or any GROQ query, run `pnpm sanity:typegen` to regenerate it (this also happens automatically before `dev`/`build` via the `sanity:predev`/`sanity:prebuild` scripts).

Fetching uses `sanityFetch` from `src/sanity/lib/live.ts` (Sanity's Live Content API — enables auto-updating content and Draft Mode/Visual Editing). The plain `client` in `src/sanity/lib/client.ts` is for non-live use. Draft Mode toggles via `/api/draft-mode/enable` and `/api/draft-mode/disable`.

`src/components/pageBuilder/PageBuilder.tsx` is the runtime counterpart to the pageBuilder schema: it switches on each block's `_type` to render the matching component (`PageVideo`, `PageRichText`, `PageGallery`, etc.). Adding a new page-builder block type requires changes in three places kept in sync: the schema (`schemaTypes/pageBuilder/`), the render switch in `PageBuilder.tsx`, and the corresponding React component.

### Routing

`src/app/(main)/` is a route group holding the public-facing pages (about, events, get-involved, learn, local, national, participants-agreement, qr-codes) sharing `(main)/layout.tsx`. `src/app/studio/[[...tool]]` mounts the Sanity Studio as a catch-all route. `src/app/api/` holds route handlers (see below).

### Environment variables

All env vars are declared and validated with Zod in `src/env.ts` via `@t3-oss/env-nextjs`, split into `server` (Sanity read token, SMTP, Google Sheets, Humantix, Pino log level) and `client` (must be prefixed `NEXT_PUBLIC_`). Always read env vars through `env` from `src/env.ts` rather than `process.env` directly — this is what enforces required-var validation and server/client isolation. New variables must be added to both the schema and `experimental__runtimeEnv` in that file.

### API routes

- `POST /api/send-email` — sends email via SMTP2GO/Nodemailer using recipient aliases (keeps real addresses out of client code). Currently uses Neon King Kong's SMTP2GO account temporarily on DNA's behalf.
- `POST /api/google/sheets/group-intent` / `GET /api/google/sheets/group-intent` — writes/reads "group interest" signups to/from Google Sheets (bot-protected on write).
- `src/app/api/google/sheets/participants-agreements` — similar Sheets-backed endpoint for participant agreements.
- `src/app/services/HumantixApi.ts` and `SheetsApi.ts` wrap the external Humantix (events) and Google Sheets APIs respectively; each has a colocated `.test.ts`.

### Logging

Server-side logging goes through the shared Pino logger at `src/utils/pino.ts` (`import logger from '@/utils/pino'`). It depends on `PINO_LOG_LEVEL`, a server-only env var — never use it in client components. Client-side code uses `console` or relies on Sentry (configured via `sentry.server.config.ts` / `sentry.edge.config.ts` and `instrumentation-client.ts`).

### Styling

Tailwind CSS is the primary styling mechanism; Styled Components is also a dependency for cases Tailwind doesn't cover cleanly. Shared style constants live in `src/components/styles`.

### Testing layout

Three distinct layers, each with its own Vitest project (see `vitest.config.mts`):
- **Unit tests** (`*.test.ts`, `node` project): colocated with the code under test, e.g. `src/app/services/HumantixApi.test.ts`.
- **Interaction tests**: `*.stories.tsx` play functions run under the `storybook` Vitest project (real browser via Playwright/Chromium).
- **Visual regression**: Chromatic snapshots every Storybook story on push (`.github/workflows/chromatic.yml`); failures are non-blocking.

Every UI component is expected to have a `.stories.tsx` documenting its states/variants.

## Commit conventions

- Capitalize the first letter.
- Start with a third-person-plural verb describing what the commit does to the code (e.g. `Adds`, `Fixes`, `Improves`, `Updates`).
- Example: `Adds rudimentary GroupInterestTable`.

Husky + lint-staged run ESLint, Prettier, and `tsc` on staged files before every commit; a failing check blocks the commit.
