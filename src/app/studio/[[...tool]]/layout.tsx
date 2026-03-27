import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Sanity Studio',
  robots: { index: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default async function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
