'use client';

import Error from '@/components/error/Error';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className={'body'}>
        <main
          style={{
            height: '100vh',
            width: '100svw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Error error={error} />
        </main>
      </body>
    </html>
  );
}
