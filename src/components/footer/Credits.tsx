'use client';
import styles from '@/components/footer/styles';

import copy from '@/constants/copy';
import Link from 'next/link';
import { FC, Suspense } from 'react';

const Copyright = () => {
  return <span>{`© ${new Date().getFullYear()}`}</span>;
};

const Credits: FC = () => {
  const {
    websiteBy,
    developer: { name: developerName, url: developerUrl },
  } = copy.footer;

  const { anchor } = styles;

  const { text } = {
    text: 'font-sans',
  };

  return (
    <p className={text}>
      {websiteBy}{' '}
      <Link
        href={developerUrl}
        target={'_blank'}
        className={anchor}
      >
        {developerName}
      </Link>{' '}
      <Suspense fallback={<span>2026</span>}>
        <Copyright />
      </Suspense>
    </p>
  );
};

export default Credits;
