import DisableDraftModeLink from '@/components/links/DisableDraftModeLink';
import { SanityLive } from '@/sanity/lib/live';
import cn from '@/utils/cn';
import type { Metadata } from 'next';
import { VisualEditing } from 'next-sanity/visual-editing';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import './globals.css';

export const metadata: Metadata = {
  title: 'Degrowth Network Australia',
  description: 'Because. Just because.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { body } = {
    body: cn([
      'bg-gray-050 dark:bg-gray-950 antialiased',
      'select-none',
      'focus-visible:outline-2 focus-visible:outline-black',
    ]),
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="overscroll-none"
    >
      <body className={body}>
        {children}
        <ToastContainer />
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftModeLink />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
