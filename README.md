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

We will explore the possibility of deploying it
to [Merri-bek Tech](https://www.merri-bek.tech/services/for-community-groups/). Failing that, DNA should consider
creating their own Vercel account and transferring the deployment to there.

## API Routes

### Send Email

`POST /api/send-email`

Sends an email to predefined aliases.

#### Request Body

```yaml
openapi: 3.0.0
content:
  application/json:
    schema:
      type: object
      required:
        - from
        - to
      properties:
        from:
          type: string
          description: The sender's email address.
        to:
          type: array
          items:
            type: string
            enum: [dna]
          description: A list of email aliases to send to.
        subject:
          type: string
          description: The email subject.
        text:
          type: string
          description: The plain text content of the email.
        html:
          type: string
          description: The HTML content of the email.
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

# Re-run this every time you modify your schema types or GROQ queries
pnpm sanity:typegen

# Formats the entire codebase using Prettier
pnpm prettier:write

# Checks the codebase for formatting issues
pnpm prettier:check
```