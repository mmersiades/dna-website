'use client';

import styles from '@/app/(main)/local/styles';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { Atma } from 'next/font/google';
import Link from 'next/link';
import { FC } from 'react';
import '../../app/globals.css';

const atma = Atma({
  variable: '--atma-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const Error: FC = () => {
  const { title, home } = copy.notFound;

  const { linkContainer, linkLabel } = styles;
  const { container, card, heading, buttonContainer } = {
    container: cn('h-full w-full', 'flex items-center justify-center'),
    card: cn('h-fit w-fit', 'm-1'),
    heading: cn('text-center text-2xl font-bold', 'p-4'),
    buttonContainer: cn(
      'p-4',
      'flex justify-center items-center gap-2',
      'w-full',
    ),
  };

  return (
    <div className={cn(container, atma)}>
      <div className={card}>
        <h1 className={heading}>{title}</h1>
        <div className={buttonContainer}>
          <Link
            href={'/about'}
            className={linkContainer}
          >
            <p className={linkLabel}>{home}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
