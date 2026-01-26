import cn from '@/utils/cn';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import './globals.css';

export const metadata: Metadata = {
  title: 'Degrowth Network Australia',
  description: 'Because. Just because.',
};

export default function RootLayout({
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
      className="overscroll-none scroll-smooth"
    >
      <body className={body}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
