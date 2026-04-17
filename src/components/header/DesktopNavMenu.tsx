import BreakPoint from '@/components/dev/BreakPoint';
import Wordmark from '@/components/header/Wordmark';
import CtaLink from '@/components/links/CtaLink';
import NavbarLink from '@/components/links/NavbarLink';
import copy from '@/constants/copy';
import { paths } from '@/constants/paths';
import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';
import './header.css';

const DesktopNavMenu: FC = () => {
  const { links, cta, navLabels } = copy.header;

  const {
    container,
    nav,
    activeBubble,
    hoverBubble,
    ctaContainer,
    wordmarkContainer,
  } = {
    container: 'nav-wrap container',
    nav: cn('flex flex-row items-center'),
    activeBubble: cn(
      'bubble',
      'active',
      'bg-radial from-white to-transparent',
      'dark:from-secondary/50 dark:to-secondary/25',
    ),
    hoverBubble: cn(
      'bubble',
      'hover',
      'bg-transparent',
      'bg-radial dark:from-secondary/25 dark:to-transparent',
    ),
    ctaContainer: 'ml-auto',
    wordmarkContainer: cn(
      'h-14 w-14 lg:h-18 lg:w-18 aspect-square',
      'mr-4',
      'p-1',
    ),
  };

  return (
    <div className={container}>
      <div className={activeBubble}></div>
      <div className={hoverBubble}></div>

      <nav
        className={nav}
        aria-label={navLabels.desktop}
      >
        <Link
          href={paths.home}
          className={wordmarkContainer}
        >
          <Wordmark />
        </Link>
        {links.map((linkProps) => {
          return (
            <NavbarLink
              key={linkProps.path}
              path={linkProps.path}
              label={linkProps.label}
            />
          );
        })}
        <BreakPoint />
        <div className={ctaContainer}>
          <CtaLink href={cta.href}>{cta.children}</CtaLink>
        </div>
      </nav>
    </div>
  );
};

export default DesktopNavMenu;
