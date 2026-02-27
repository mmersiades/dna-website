import DisableDraftModeLink from '@/components/links/DisableDraftModeLink';
import copy from '@/constants/copy';
import { SanityLive } from '@/sanity/lib/live';
import cn from '@/utils/cn';
import type { Metadata } from 'next';
import { VisualEditing } from 'next-sanity/visual-editing';
import { ThemeProvider } from 'next-themes';
import { Atma } from 'next/font/google';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { ContactPoint, Organization, WithContext } from 'schema-dts';
import './globals.css';

const atma = Atma({
  variable: '--atma-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: `${copy.seo.fullName} | ${copy.seo.tagline}`,
  description: copy.seo.description,
  authors: [{ name: 'Michael Mersiades', url: 'https://www.neonkingkong.com' }],
  generator: 'Next.js',
  keywords: copy.seo.keywords,
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: `https://${copy.seo.url}/opengraph-image.jpg`,
  },
  openGraph: {
    title: copy.seo.fullName,
    type: 'website',
    description: copy.seo.tagline,
    url: `https://${copy.seo.url}/`,
    siteName: copy.seo.fullName,
    images: [{ url: `https://${copy.seo.url}/opengraph-image.jpg` }],
    locale: 'en_AU',
  },
};

const contactPoint: ContactPoint = {
  '@type': 'ContactPoint',
  email: copy.seo.email,
  areaServed: 'Australia',
  name: 'DNA contact email',
};

const jsonLd: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: copy.seo.fullName,
  description: copy.seo.tagline,
  url: copy.seo.url,
  knowsAbout: copy.seo.knowsAbout,
  keywords: copy.seo.keywords,
  email: copy.seo.email,
  contactPoint,
  areaServed: 'Australia',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { body, html } = {
    html: cn('overscroll-none', atma.className),
    body: cn('antialiased'),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
