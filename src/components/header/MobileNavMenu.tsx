import CtaLink from '@/components/links/CtaLink';
import NavbarLink from '@/components/links/NavbarLink';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { FC } from 'react';
import './header.css';

const MobileNavMenu: FC = () => {
  const { links, cta, navLabels } = copy.header;

  const { container, nav, activeBubble, hoverBubble, ctaContainer } = {
    container: cn(
      'nav-wrap',
      'h-[calc(100vh-var(--header-height))]',
      'text-black dark:text-white',
    ),
    nav: cn('flex flex-col items-start', 'p-2'),
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
    ctaContainer: 'absolute right-0 bottom-0 p-8',
  };

  return (
    <div className={container}>
      <div className={activeBubble}></div>
      <div className={hoverBubble}></div>
      <nav
        className={nav}
        aria-label={navLabels.mobile}
      >
        {links.map((linkProps) => {
          return (
            <NavbarLink
              key={linkProps.path}
              path={linkProps.path}
              label={linkProps.label}
              mobile
            />
          );
        })}
        <div className={ctaContainer}>
          <CtaLink href={cta.href}>{cta.children}</CtaLink>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavMenu;
