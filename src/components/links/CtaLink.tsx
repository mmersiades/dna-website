'use client';
import cn from '@/utils/cn';
import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

type Props = LinkProps & {
  responsive?: boolean;
};

const CtaLink: FC<PropsWithChildren<Props>> = ({
  children,
  responsive = false,
  ...props
}) => {
  const { link } = {
    link: cn(
      'text-2xl font-bold text-primary-foreground',
      responsive && '[font-size:min(4vw,2rem)]',
      'bg-primary-200 dark:bg-primary',
      'bg-radial from-primary-200 to-primary-400/75 dark:from-primary dark:to-primary-500/50',
      'border-2 border-primary-800 rounded-lg dark:border-0',
      'p-2',
      'relative',
      'before:content-[""] before:absolute before:rounded-lg before:opacity-0 before:inset-0',
      'before:bg-radial before:from-primary-100 before:to-primary-300',
      'dark:before:from-primary-200 dark:before:to-primary',
      'hover:before:opacity-100',
      'before:transition-opacity duration-250',
    ),
  };

  return (
    <Link
      className={link}
      {...props}
      onClick={() => document.getElementById('nav-menu')?.hidePopover()}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default CtaLink;
