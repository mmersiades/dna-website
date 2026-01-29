'use client';
import cn from '@/utils/cn';
import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

const CtaLink: FC<PropsWithChildren<LinkProps>> = ({ children, ...props }) => {
  const { link } = {
    link: cn([
      'text-2xl font-bold text-primary-foreground',
      'bg-radial from-primary to-primary-400',
      'rounded-md',
      'p-2',
      'relative isolate',
      'before:content-[""] before:absolute before:rounded-md before:opacity-0 before:inset-0',
      'before:bg-radial before:from-primary-200 before:to-primary',
      'hover:before:opacity-100',
      'before:transition-opacity duration-250',
    ]),
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
