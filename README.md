# DNA Website

A web application for Degrowth Network Australia, built with Next.js and Sanity CMS.

## Requirements

Before you can work on this project, ensure you have the following installed on your computer:

- **Node.js**: Version 18.18.0 or later.
- **pnpm**: The recommended package manager for this project.

## Deploy on Vercel

```bash
# Deploy to Vercel's preview environment
vercel

# Deploy to Vercel's production environment
vercel --prod
```

The website is configured to deploy to Neon King Kong's Vercel account temporarily.

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
```