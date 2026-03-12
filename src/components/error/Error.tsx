'use client';

import styles from '@/components/local/styles';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import * as Sentry from '@sentry/nextjs';
import { Atma } from 'next/font/google';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import '../../app/globals.css';

const atma = Atma({
  variable: '--atma-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

interface Props {
  error: Error & { digest?: string };
}

const Error: FC<Props> = ({ error }) => {
  const { title, reload, home } = copy.error;

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  const { linkContainer, linkLabel } = styles;
  const { container, card, heading, errorContainer, buttonContainer } = {
    container: cn('h-full w-full', 'flex items-center justify-center'),
    card: cn('h-fit w-fit', 'm-1'),
    heading: cn('text-center text-2xl font-bold', 'p-2'),
    errorContainer: cn(
      'p-2',
      'bg-red-300/50',
      'border border-red-300',
      'font-mono',
    ),
    buttonContainer: cn('p-2', 'flex justify-between items-center gap-2'),
  };

  return (
    <div className={cn(container, atma)}>
      <div className={card}>
        <h1 className={heading}>{title}</h1>
        <div className={errorContainer}>
          <p>{`${error.name}: ${error.message}`}</p>
        </div>
        <div className={buttonContainer}>
          <Link
            href={'/about'}
            className={linkContainer}
          >
            <p className={linkLabel}>{home}</p>
          </Link>
          <button
            className={linkContainer}
            onClick={() => window.location.reload()}
          >
            <p className={linkLabel}>{reload}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
