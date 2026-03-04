'use client';
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

  return (
    <Link
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
