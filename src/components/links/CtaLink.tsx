'use client';
import cn from '@/utils/cn';
import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

const CtaLink: FC<PropsWithChildren<LinkProps>> = ({ ...props }) => {
  const { link } = {
    link: cn([
      'text-2xl font-bold',
      'rounded-md',
      'border-2 border-grey-500',
      'p-2',
    ]),
  };

  return (
    <Link
      className={link}
      {...props}
      onClick={() => document.getElementById('nav-menu')?.hidePopover()}
    />
  );
};

export default CtaLink;
