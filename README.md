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