'use client';
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export interface NavbarLinkProps {
  label: string;
  path: string;
  mobile?: boolean;
}

const NavbarLink: FC<NavbarLinkProps> = ({ label, path, mobile = false }) => {
  const pathname = usePathname();
  const active = pathname === path;

  const { link } = {
    link: cn([
      'text-xl sm:text-2xl md:text-lg lg:text-lg xl:text-xl',
      'font-bold',
      'relative',
      'after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-secondary-100 dark:after:bg-secondary-200 after:opacity-0',
      'after:transition-all after:duration-250 after:delay-50 after:ease-in-out',
      'px-1',
      active
        ? 'after:w-full after:opacity-100'
        : 'hover:after:w-full hover:after:opacity-75',
    ]),
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
