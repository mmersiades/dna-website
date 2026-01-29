### Project Guidelines

Welcome to the **DNA Website** project. This document provides a quick overview of the tech stack, project structure,
and development workflows.

### 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **CMS**: [Sanity v4](https://www.sanity.io/) (via `next-sanity`)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [Styled Components](https://styled-components.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Logging**: [Pino](https://getpino.io/)
- **Environment**: [@t3-oss/env-nextjs](https://env.t3.gg/) (with [Zod](https://zod.dev/))
- **Package Manager**: `pnpm`
- **Linting & Formatting
  **: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/)

---

### 📂 Project Structure

- `src/app/`: Next.js App Router pages and layouts.
    - `studio/`: Sanity Studio embedded route.
- `src/sanity/`: Sanity-specific configuration, schemas, and queries.
    - `schemaTypes/`: Definition of Sanity content types.
    - `lib/`: Sanity client, image utilities, and queries.
    - `types.ts`: Generated types from Sanity schema (do not edit manually).
- `src/utils/`: Utility functions and shared helpers (e.g., logging).
- `src/env.ts`: Type-safe environment variable configuration.
- `public/`: Static assets like images and fonts.
- `.husky/`: Git hooks for pre-commit linting and formatting.

---

### 🚀 Key Scripts

Use `pnpm` to run the following commands:

| Command               | Description                                                 |
|:----------------------|:------------------------------------------------------------|
| `pnpm dev`            | Starts the development server.                              |
| `pnpm build`          | Builds the application for production.                      |
| `pnpm sanity:typegen` | Generates TypeScript types from Sanity schemas and queries. |
| `pnpm lint`           | Runs ESLint to find and fix code quality issues.            |
| `pnpm prettier:write` | Formats the entire codebase using Prettier.                 |

---

### 💡 Development Workflows

#### Sanity Schema Changes

Whenever you modify a schema in `src/sanity/schemaTypes/` or update a GROQ query:

1. Ensure the development server is running or you have local schema access.
2. Run `pnpm sanity:typegen` to update `src/sanity/types.ts`.

#### Pre-commit Hooks

The project uses Husky and `lint-staged`. On every commit:

- `eslint` will run on changed `.ts` and `.tsx` files.
- `prettier` will format changed files.
  Ensure your code passes these checks before pushing.

#### Styling

- Use **Tailwind CSS** for most styling needs.
- **Styled Components** are available for complex or dynamic styling that is hard to achieve with Tailwind alone.

#### Git Commits

Follow these conventions for commit messages:

- **Capitalise** the first letter.
- Start with a **verb in the third-person plural** form (ending in 's').
- The verb should describe what the commit **does** to the code.

**Examples:**
- `Adds rudimentary GroupIntentForm`
- `Improves Header component for mobile`
- `Sends mailing list subscription functionality`
- `Initializes next.js, tailwind and sanity`

---

### ✅ Best Practices

- **Type Safety**: Avoid using `any`. Ensure Sanity types are kept up to date.
- **Environment Variables**: Use `src/env.ts` to access environment variables. This ensures type safety and validates that all required variables are present.
- **Logging**: Use the central logger in `src/utils/pino.ts` for consistent logging across the application.
- **Imports**: Imports are automatically organized via `prettier-plugin-organize-imports`. Keep them clean.
- **Components**: Prefer React Server Components (RSC) by default; use `'use client'` only when necessary for
  interactivity or browser APIs.
- **Commits**: Write clear, descriptive commit messages. Pre-commit hooks will handle formatting.
