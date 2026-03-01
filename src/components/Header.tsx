'use client';
import IconButton from '@/components/buttons/IconButton';
import BreakPoint from '@/components/dev/BreakPoint';
import CtaLink from '@/components/links/CtaLink';
import NavbarLink, { NavbarLinkProps } from '@/components/links/NavbarLink';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { FC, useEffect, useState } from 'react';

const Header: FC = () => {
  const {
    links,
    cta,
    navLabels,
    menu: { title: menuTitle, open: openMenuLabel, close: closeMenuLabel },
  } = copy.header;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menu = document.getElementById('nav-menu');
    const handleToggle = (event: { newState: string }) => {
      setIsOpen(event.newState === 'open');
    };

    menu?.addEventListener('toggle', handleToggle);
    return () => menu?.removeEventListener('toggle', handleToggle);
  }, []);

  const {
    container,
    desktopContainer,
    mobileContainer,
    menuContainer,
    menuHeader,
    menuList,
  } = {
    container:
      'bg-tertiary-200 dark:bg-tertiary-900 fixed top-0 w-screen z-20 shadow-md',
    mobileContainer: cn([
      'w-full',
      'h-(--header-height)',
      'flex flex-row items-center gap-4 justify-between',
      'md:hidden',
      'p-2',
    ]),
    desktopContainer: cn([
      'container',
      'ml-auto mr-auto',
      'h-(--header-height)',
      'hidden md:flex flex-row items-center gap-4 xl:gap-6 2xl:gap-8 justify-start',
      'p-2',
    ]),
    menuContainer: cn([
      'size-full',
      'border border-black',
      'transition transition-discrete',
      'bg-gray-50 dark:bg-secondary-900',
      'opacity-0',
      'transform-(--transform-move-to-bottom)',
      'starting:open:opacity-0 open:opacity-100',
      'starting:open:transform-(--transform-move-to-bottom) open:transform-(--transform-remove-translate-y)',
    ]),
    menuHeader: cn([
      'w-full',
      'h-(--header-height)',
      'dark:text-white font-bold text-lg italic',
      'flex flex-row items-center justify-start gap-4',
      'bg-gray-100 dark:bg-secondary-800',
      'pr-2 pl-8',
    ]),
    menuList: cn(['flex flex-col gap-8 items-start', 'p-8']),
  };

  return (
    <div className={container}>
      <nav
        className={mobileContainer}
        aria-label={navLabels.mobile}
      >
        <IconButton
          popoverTarget="nav-menu"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          iconName={'icon-[lucide--menu]'}
          srName={openMenuLabel}
          size={'size-12'}
          aria-label={openMenuLabel}
        />
        <BreakPoint />
        <div className={'ml-auto'}>
          <CtaLink href={cta.href}>{cta.children}</CtaLink>
        </div>
      </nav>
      <nav
        className={desktopContainer}
        aria-label={navLabels.desktop}
      >
        {links.map((linkProps) => {
          return (
            <NavbarLink
              key={linkProps.path}
              {...(linkProps as NavbarLinkProps)}
            />
          );
        })}
        <BreakPoint />
        <div className={'ml-auto'}>
          <CtaLink href={cta.href}>{cta.children}</CtaLink>
        </div>
      </nav>
      <menu
        className={menuContainer}
        popover={''}
        id="nav-menu"
      >
        <div className={menuHeader}>
          <IconButton
            popoverTarget="nav-menu"
            popoverTargetAction={'hide'}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            iconName={'icon-[lucide--x]'}
            srName={closeMenuLabel}
            aria-label={closeMenuLabel}
            size={'size-12'}
          />
          <p>{menuTitle}</p>
        </div>
        <div className={menuList}>
          {links.map((linkProps) => {
            return (
              <NavbarLink
                key={linkProps.path}
                {...(linkProps as NavbarLinkProps)}
                mobile
              />
            );
          })}
          <div className={'absolute right-0 bottom-0 p-8'}>
            <CtaLink href={cta.href}>{cta.children}</CtaLink>
          </div>
        </div>
      </menu>
    </div>
  );
};

export default Header;
