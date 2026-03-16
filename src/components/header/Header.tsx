'use client';
import IconButton from '@/components/buttons/IconButton';
import BreakPoint from '@/components/dev/BreakPoint';
import DesktopNavMenu from '@/components/header/DesktopNavMenu';
import MobileNavMenu from '@/components/header/MobileNavMenu';
import headerStyles from '@/components/header/styles';
import CtaLink from '@/components/links/CtaLink';
import copy from '@/constants/copy';
import testIds from '@/constants/testIds';
import cn from '@/utils/cn';
import { FC, useEffect, useState } from 'react';

const Header: FC = () => {
  const {
    cta,
    navLabels,
    menu: { title: menuTitle, open: openMenuLabel, close: closeMenuLabel },
  } = copy.header;

  const { openMenuButton, closeMenuButton } = testIds.header;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menu = document.getElementById('nav-menu');
    const handleToggle = (event: { newState: string }) => {
      setIsOpen(event.newState === 'open');
    };

    menu?.addEventListener('toggle', handleToggle);
    return () => menu?.removeEventListener('toggle', handleToggle);
  }, []);

  const { container, desktopContainer } = headerStyles;

  const { mobileContainer, menuContainer, menuHeader } = {
    mobileContainer: cn(
      'w-full',
      'h-(--header-height)',
      'flex flex-row items-center gap-4 justify-between',
      'md:hidden',
      'p-2',
    ),
    menuContainer: cn(
      'size-full',
      'transition transition-discrete',
      'bg-tertiary-50 dark:bg-tertiary-800',
      'opacity-0',
      'transform-(--transform-move-to-bottom)',
      'starting:open:opacity-0 open:opacity-100',
      'starting:open:transform-(--transform-move-to-bottom) open:transform-(--transform-remove-translate-y)',
    ),
    menuHeader: cn(
      'w-full',
      'h-(--header-height)',
      'dark:text-white font-bold text-lg italic',
      'flex flex-row items-center justify-start gap-4',
      'bg-tertiary-200 dark:bg-tertiary-950',
      'px-2',
    ),
  };

  return (
    <div className={container}>
      <nav
        className={mobileContainer}
        aria-label={navLabels.mobile}
      >
        <IconButton
          data-testid={openMenuButton}
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
      <div className={desktopContainer}>
        <DesktopNavMenu />
      </div>
      <menu
        className={menuContainer}
        popover={''}
        id="nav-menu"
      >
        <div className={menuHeader}>
          <IconButton
            data-testid={closeMenuButton}
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
        <MobileNavMenu />
      </menu>
    </div>
  );
};

export default Header;
