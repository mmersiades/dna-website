'use client';
import testIds from '@/constants/testIds';
import cn from '@/utils/cn';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export interface NavbarLinkProps {
  label: string;
  path: Route;
  mobile?: boolean;
}

const NavbarLink: FC<NavbarLinkProps> = ({ label, path, mobile = false }) => {
  const pathname = usePathname();
  const active = pathname === path;

  const { link } = {
    link: cn(
      'nav-link',
      active && 'active',
      'text-xl sm:text-2xl md:text-lg lg:text-lg xl:text-xl',
      'font-bold',
      'text-center',
    ),
  };

  const navId = mobile ? 'mobile-nav' : 'desktop-nav';
  const id = `${navId}-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link
      id={id}
      data-testid={testIds.header.link(navId, label.toLowerCase())}
      className={link}
      href={path}
      onClick={
        mobile
          ? () => document.getElementById('nav-menu')?.hidePopover()
          : undefined
      }
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
