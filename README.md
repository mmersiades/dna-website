# DNA Website

A web application for Degrowth Network Australia, built with Next.js and Sanity CMS.

## Requirements

Before you can work on this project, ensure you have the following installed on your computer:

- **Node.js**: Version 18.18.0 or later.
- **pnpm**: The recommended package manager for this project.

You'll also need:

- DNA's Vercel account (hobby) email address
- Access to DNA's Protonmail account

## Configuration

The application requires several environment variables to function correctly. These are validated using Zod in
`src/env.ts`.

### Pulling from Vercel

If you have access to the Vercel project (see below), the easiest way to set up your environment is to use the Vercel
CLI:

```bash
vercel env pull
```

This will create an `.env.local` file with the necessary variables.

### Manual Configuration

If you need to configure variables manually, create a `.env.local` file in the root directory. Refer to `src/env.ts` for
the full list of required variables. Key groups include:

- **Sanity**: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `SANITY_API_READ_TOKEN`.
- **Email (SMTP)**: `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_SERVER`, `SMTP_PORT`, `SUBSCRIBE_EMAIL_DNA`, `MAILER_EMAIL`,
  and `CONTACT_EMAIL`.
- **Google Sheets**: `GOOGLE_SHEETS_CLIENT_EMAIL`, `GOOGLE_SHEETS_PRIVATE_KEY`, `GOOGLE_SHEETS_GROUP_INTENT_SHEET_ID`,
  and `GOOGLE_SHEETS_PARTICIPANTS_AGREEMENT_SHEET_ID`.
- **Other**: `HUMANTIX_API_KEY` and `NEXT_PUBLIC_SENTRY_DSN`.

Also see `.env.example`.

## Getting started

- `pnpm i -g vercel`: Install Vercel CLI
- `vercel login`: Log into VERCEL CLI
    - Use DNA's Protonmail email address
    - No password required, just the email address
- `vercel link`: link your local code with the Vercel project. Choose these options:
    - Set up “~/workspace/neonkingkong/dna/dna-website”? yes
    - Which scope should contain your project? Degrowth Network Australia's projects
    - Found project “degrowth-network-australias-projects/dna-website”. Link to it? yes
    - Would you like to pull environment variables now? yes

After running these, you should have:

- a `.vercel` folder in your project directory (gitignored). This folder contains configuration files for Vercel.
- an `.env.local` file in your project directory (gitignored). This file contains environment variables for local
  development.

## Deploy on Vercel

### Manual deployment

This app is set up to be deployed to Vercel from a developer's local computer.

If you've followed the steps in Getting Started, you should be ready to deploy.

```bash
# Deploy to Vercel's preview environment
vercel

# Deploy to Vercel's production environment
vercel --prod
```

The website is configured to deploy to DNA's Vercel account.

### Automated deployment

Pushing to the `preview` branch on the remote repository will trigger a deployment to the Vercel preview environment.

Pushing to the `main` branch (or merges into `main`) on the remote repository will trigger a deployment to the Vercel
production environment.

## Content Management

The website's content is managed through [Sanity CMS](https://www.sanity.io/). This allows content editors to update the
website without needing to touch the code.

### Type Generation

This project uses Sanity's typegen to ensure type safety when working with CMS content. Whenever you modify a schema in
`src/sanity/schemaTypes/` or update a GROQ query, you must regenerate the types:

```bash
pnpm sanity:typegen
```

This updates `src/sanity/types.ts`. Avoid editing this file manually.

### Sanity Studio

The Sanity Studio is embedded directly into the website and can be accessed at `/studio`.

To log in to the Sanity Studio or the Sanity manage dashboard, use Degrowth Network Australia's Sanity account:

- **Email**: `degrowthnetwork@proton.me`

### Draft Mode & Visual Editing

The application supports Sanity's Visual Editing and Draft Mode. This allows you to preview draft content and see
changes in real-time.

- **Enable Draft Mode**: Access `/api/draft-mode/enable`.
- **Disable Draft Mode**: Access `/api/draft-mode/disable` (a link is also provided in the bottom right corner when
  draft mode is active).

### Documentation

For more information on how to use Sanity, refer to the [official Sanity documentation](https://www.sanity.io/docs).

## Development Workflow

### Server-Side Logging (Pino)

The project uses [Pino](https://getpino.io/) for server-side logging (via `src/utils/pino.ts`).

- **Usage**: `import logger from '@/utils/pino';`
- **Restriction**: Pino is for **server-side only**. It depends on the `PINO_LOG_LEVEL` environment variable, which is
  not exposed to the client.
- **Client-Side**: Use standard `console` methods or rely on Sentry for production error tracking.

### Git Commit Conventions

We follow a specific format for commit messages to keep the history clean and readable:

- **Capitalize** the first letter.
- Start with a **verb in the third-person plural** form (e.g., `Adds`, `Fixes`, `Improves`, `Updates`).
- Describe what the commit **does** to the code.

*Example*: `Adds rudimentary GroupInterestTable`

### Pre-commit Hooks

The project uses [Husky](https://typicode.github.io/husky/) and `lint-staged` to run automated checks before every
commit:

- **ESLint**: Checks for code quality issues.
- **Prettier**: Ensures consistent formatting.
- **TypeScript (`tsc`)**: Verifies type safety.

If any of these checks fail, the commit will be blocked until the issues are resolved.

## API Routes

### Send Email

`POST /api/send-email`

Sends an email to predefined email addresses.
Aliases are used to keep email addresses out of the client code.

SMTP2GO is used to send emails.

SMTP2GO is currently configured to use Neon King Kong's account temporarily. Once DNA has their own SMTP2GO account,
reconfigure.

#### Request Body

```ts
type SendEmailBody = {
    from: string;
    to: EmailAlias[];
    subject?: string;
    text?: string;
    html?: string;
};
```

#### Responses

- **204 No Content**: Email sent successfully.
- **400 Bad Request**: Invalid email alias provided.
- **500 Internal Server Error**: Failed to send email.

### Google Sheets Group Intent

#### Write Group Intent

`POST /api/google/sheets/group-intent`

Appends a new row of user intent data to a Google Sheet.

##### Request Body

```ts
type WriteGroupIntentRowBody = {
    name: string;
    email: string;
    state: string;
    subregion: string;
    country: string;
    date: string;
};
```

##### Responses

- **200 OK**: Row appended successfully.
- **403 Forbidden**: Access denied (bot detected).
- **500 Internal Server Error**: Failed to write to sheet.

#### Get Group Intent

`GET /api/google/sheets/group-intent`

Retrieves aggregated group intent data from Google Sheets based on location parameters.

##### Query Parameters

- `state` (optional): The state to filter by.
- `region` (optional): The subregion to filter by.
- `country` (optional): The country to filter by.

##### Responses

- **200 OK**: Returns an array of `TableRow` objects.

```ts
type TableRow = {
    label: string;
    count: number;
    bold: boolean;
};
```

## Testing

The project uses a combination of unit tests, interaction tests, and visual regression tests to ensure code quality and
stability.

### Unit Testing

We use [Vitest](https://vitest.dev/) for testing business logic and utilities. Place `.test.ts` files alongside the code
they test.

```bash
# Run unit tests
pnpm test

# Run unit tests with coverage reporting
pnpm test:coverage
```

### Interaction Testing

We use [Storybook's play function](https://storybook.js.org/docs/writing-tests/interaction-testing) along with Vitest to
test component interactions. These tests run in a browser environment.

```bash
# Run Storybook interaction tests
pnpm test-storybook

# Run Storybook interaction tests with coverage reporting
pnpm test-storybook:coverage
```

These interaction tests can also be run via the Storybook UI.

```bash
# Start Storybook UI
pnpm storybook
```

#### Known problems

1. If `node_modules/.cache/storybook` is empty or missing (usually when first time running tests), the tests will
   usually fail with dynamic import errors. Subsequent test runs should pass. I haven't been able to resolve this
   problem.

### Visual Regression Testing

We use [Chromatic](https://www.chromatic.com/) for UI components. It automatically captures snapshots of stories defined
in Storybook.

Visual regression tests can be run via the Storybook UI during development.

```bash
# Start Storybook UI
pnpm storybook
```

They are also run automatically on every push to the remote repository. Failures are non-blocking. See
`.github/workflows/chromatic.yml`

## Commands

```bash
# Starts the development server
pnpm dev

# Builds the application for production
pnpm build

# Starts the production server
pnpm start

# Runs ESLint to find and fix code quality issues
pnpm lint

# Generates types for Sanity content. Re-run whenever schema changes.
pnpm sanity:typegen

# Formats the entire codebase using Prettier
pnpm prettier:write

# Checks the codebase for formatting issues
pnpm prettier:check

# Pulls environment variables from Vercel > updates env.local
vercel env pull

# Run unit tests
pnpm test

# Run Storybook interaction tests
pnpm test-storybook

# Run visual regression tests on Chromatic
pnpm chromatic
```