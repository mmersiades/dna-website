import { createEnv } from '@t3-oss/env-nextjs'; // or core package
import { z } from 'zod';

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    SMTP_USERNAME: z.string(),
    SMTP_PASSWORD: z.string(),
    SMTP_SERVER: z.string().min(1),
    SMTP_PORT: z.string().min(1).max(5),
    SUBSCRIBE_EMAIL_DNA: z.email(),
    PINO_LOG_LEVEL: z.enum([
      'trace',
      'debug',
      'info',
      'warn',
      'error',
      'fatal',
    ]),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(8),
    NEXT_PUBLIC_SANITY_DATASET: z.string(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   * For Next.js >= 13.4.4, you only need to destructure client variables
   */
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
});
