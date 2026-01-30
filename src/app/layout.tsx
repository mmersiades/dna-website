import DisableDraftModeLink from '@/components/links/DisableDraftModeLink';
import { SanityLive } from '@/sanity/lib/live';
import cn from '@/utils/cn';
import type { Metadata } from 'next';
import { VisualEditing } from 'next-sanity/visual-editing';
import { ThemeProvider } from 'next-themes';
import { Atma } from 'next/font/google';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import './globals.css';

export const metadata: Metadata = {
  title: 'Degrowth Network Australia',
  description: 'Because. Just because.',
};

const atma = Atma({
  variable: '--atma-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { body, html } = {
    html: cn(['overscroll-none', atma.className]),
    body: cn([
      'antialiased',
      'select-none',
      'focus-visible:outline-1 focus-visible:outline-black',
    ]),
  };

  return (
    <html
      suppressHydrationWarning
      lang="en"
      data-scroll-behavior="smooth"
      className={html}
    >
      <body className={body}>
        <ThemeProvider>
          {children}
          <ToastContainer />
          <SanityLive />
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftModeLink />
              <VisualEditing />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
