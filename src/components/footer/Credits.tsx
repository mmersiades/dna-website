'use client';

import copy from '@/constants/copy';
import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Suspense } from 'react';

const Copyright = () => {
  return <span>{`© ${new Date().getFullYear()}`}</span>;
};

const Credits: FC = () => {
  const {
    websiteBy,
    developer: { name: developerName, url: developerUrl },
    illustratorUrl,
  } = copy.footer;

  const {
    text,
    row,
    container,
    externalLinkIconContainer,
    externalLinkIcon,
    imageContainer,
  } = {
    text: 'font-sans',
    row: cn('flex flex-row gap-2 justify-between items-center', 'w-full h-fit'),
    container: cn([
      'flex items-center flex-wrap gap-4 md:gap-8 flex-1 justify-center',
      'max-w-lg',
      'border-1 border-tertiary-700 rounded-lg',
      'hover:border-secondary',
      'p-4 md:p-8',
      'transition-color duration-250',
      'relative',
      'after:absolute after:inset-0 after:opacity-0 after:rounded-lg',
      'after:bg-radial after:from-secondary/25 after:to-transparent',
      'hover:after:opacity-100',
      'after:transition-opacity after:duration-250',
      'group',
    ]),
    externalLinkIconContainer: cn(
      'absolute top-0 right-0',
      'z-10 ',
      'size-8 sm:size-10',
      'flex items-center justify-center',
      'rounded-md',
    ),
    externalLinkIcon: cn(
      'icon-[lucide--external-link]',
      'size-4 sm:size-6',
      'text-tertiary-700',
      'group-hover:text-secondary-200',
      'transition-color duration-250',
    ),
    imageContainer: 'relative h-10 w-1/4 min-w-25',
  };

  return (
    <div className={row}>
      <Link
        href={developerUrl}
        target={'_blank'}
        className={cn(container, 'h-[stretch]')}
      >
        <div className={externalLinkIconContainer}>
          <span className={externalLinkIcon}></span>
        </div>
        <p className={text}>
          {`${websiteBy} ${developerName} `}
          <Suspense fallback={<span>2026</span>}>
            <Copyright />
          </Suspense>
        </p>
      </Link>
      <Link
        href={illustratorUrl}
        target={'_blank'}
        className={cn(container, 'w-1/4 min-w-32')}
      >
        <div className={externalLinkIconContainer}>
          <span className={externalLinkIcon}></span>
        </div>
        <div className={imageContainer}>
          <Image
            src={'/milka-signature-white.svg'}
            alt="Milka's signature"
            fill
            sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 192px"
          />
        </div>
      </Link>
    </div>
  );
};

export default Credits;
