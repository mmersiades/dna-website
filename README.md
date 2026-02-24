# TODOs
- [ ] Add a variety of animation directions to LandingPage
- [ ] Implement domain name
- [ ] Add Recaptcha or similar
- [ ] Style toasts
- [ ] A11y audit
- [ ] SEO
- [ ] Some sort of carousel for GroupCards
- [ ] Crowdsource Degrowth definitions
- [ ] Remove all WhatsApp stuff
- [ ] Find out if there's another way to join a learning circle
- [ ] Add illustrations and finalise styling
- [ ] Storybook tests
- [ ] Cypress tests
- [ ] Finalise about page
- [ ] Add external resources and style them
- [ ] Add sizes prop to Images
- [ ] Get mailing list subscription working

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
- an `.env.local` file in your project directory (gitignored). This file contains environment variables for local development.

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