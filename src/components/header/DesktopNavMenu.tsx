import BreakPoint from '@/components/dev/BreakPoint';
import CtaLink from '@/components/links/CtaLink';
import copy from '@/constants/copy';
import cn from '@/utils/cn';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import './header.css';

interface Props {
  path: Route;
  label: string;
}

const HeaderLink: FC<Props> = ({ path, label }) => {
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
      href={path}
      className={link}
    >
      {label}
    </Link>
  );
};

const DesktopNavMenu: FC = () => {
  const { links, cta, navLabels } = copy.header;

  const { nav, activeBubble, hoverBubble } = {
    nav: cn('flex flex-row items-center'),
    activeBubble: cn(
      'bubble',
      'active',
      'bg-radial from-secondary-100 to-secondary-400 dark:from-secondary/50 dark:to-secondary/25',
    ),
    hoverBubble: cn(
      'bubble',
      'hover',
      'bg-transparent',
      'bg-radial dark:from-secondary/25 dark:to-transparent',
    ),
  };

  return (
    <div className="nav-wrap container">
      <div className={activeBubble}></div>
      <div className={hoverBubble}></div>
      <nav
        className={nav}
        aria-label={navLabels.desktop}
      >
        {links.map((linkProps) => {
          return (
            <HeaderLink
              key={linkProps.path}
              path={linkProps.path}
              label={linkProps.label}
            />
          );
        })}
        <BreakPoint />
        <div className={'ml-auto'}>
          <CtaLink href={cta.href}>{cta.children}</CtaLink>
        </div>
      </nav>
    </div>
  );
};

export default DesktopNavMenu;
