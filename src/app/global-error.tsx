'use client';

import cn from '@/utils/cn';
import * as Sentry from '@sentry/nextjs';
import { Atma } from 'next/font/google';
import Link from 'next/link';
import { useEffect } from 'react';
import './global-error.css';

const atma = Atma({
  variable: '--atma-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  const { html } = {
    html: cn('overscroll-none', atma.className),
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={html}
    >
      <body className={'body'}>
        <main className={'main'}>
          <div className={'container'}>
            <h1 className={'heading'}>
              Uh-oh. Something&#39;s gone terribly wrong.
            </h1>
            <div className={'error-container'}>
              <p>{`${error.name}: ${error.message}`}</p>
            </div>
            <div className={'button-container'}>
              <Link
                href={'/about'}
                className={'button'}
              >
                Go to Home
              </Link>
              <button
                className={'button'}
                onClick={() => window.location.reload()}
              >
                Reload Page
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
