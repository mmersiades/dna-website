import { anchor } from '@/components/styles';
import copy from '@/constants/copy';
import Link from 'next/link';
import { FC } from 'react';

const Credits: FC = () => {
  const {
    websiteBy,
    developer: { name: developerName, url: developerUrl },
  } = copy.footer;

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
      {`© ${new Date().getFullYear()}`}
    </p>
  );
};

export default Credits;
