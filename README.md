# DNA Website

A web application for Degrowth Network Australia, built with Next.js and Sanity CMS.

## Requirements

Before you can work on this project, ensure you have the following installed on your computer:

- **Node.js**: Version 18.18.0 or later.
- **pnpm**: The recommended package manager for this project.

You'll also need:

- DNA's Vercel account (hobby) email address
- Access to DNA's Protonmail account

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

This app is set up to be deployed to Vercel from a developer's local computer.

If you've followed the steps in Getting Started, you should be ready to deploy.

```bash
# Deploy to Vercel's preview environment
vercel

# Deploy to Vercel's production environment
vercel --prod
```

The website is configured to deploy to DNA's Vercel account.

## Content Management

The website's content is managed through [Sanity CMS](https://www.sanity.io/). This allows content editors to update the
website without needing to touch the code.

### Sanity Studio

The Sanity Studio is embedded directly into the website and can be accessed at [/studio](/studio).

To log in to the Sanity Studio or the Sanity manage dashboard, use Degrowth Network Australia's Sanity account:

- **Email**: `degrowthnetwork@proton.me`

### Documentation

For more information on how to use Sanity, refer to the [official Sanity documentation](https://www.sanity.io/docs).

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
```