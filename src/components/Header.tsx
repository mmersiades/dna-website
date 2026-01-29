import IconButton from '@/components/buttons/IconButton';
import BreakPoint from '@/components/dev/BreakPoint';
import CtaLink from '@/components/links/CtaLink';
import NavbarLink, { NavbarLinkProps } from '@/components/links/NavbarLink';
import cn from '@/utils/cn';
import { FC } from 'react';

const links: NavbarLinkProps[] = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Local Groups',
    path: '/local',
  },
  {
    label: 'Events',
    path: '/events',
  },
  {
    label: 'Learn More',
    path: '/learn',
  },
  {
    label: 'Contact',
    path: '#contact',
  },
];

const Header: FC = () => {
  const {
    container,
    desktopContainer,
    mobileContainer,
    menuContainer,
    menuHeader,
    menuList,
  } = {
    container:
      'bg-tertiary-300 dark:bg-tertiary-900 fixed top-0 w-screen z-20 shadow-md',
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
        aria-label="Main Navigation"
      >
        <IconButton
          popoverTarget="nav-menu"
          iconName={'icon-[lucide--menu]'}
          srName={'Open Navigation Menu'}
          size={'size-12'}
          aria-label={'Open Navigation Menu'}
        />
        <BreakPoint />
        <div className={'ml-auto'}>
          <CtaLink href={'/get-involved'}>Get Involved</CtaLink>
        </div>
      </nav>

      <nav
        className={desktopContainer}
        aria-label={'Main Navigation'}
      >
        {links.map((linkProps) => {
          return (
            <NavbarLink
              key={linkProps.path}
              {...linkProps}
            />
          );
        })}
        <BreakPoint />
        <div className={'ml-auto'}>
          <CtaLink href={'/get-involved'}>Get Involved</CtaLink>
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
            iconName={'icon-[lucide--x]'}
            srName={'Close Navigation Menu'}
            aria-label={'Close Navigation Menu'}
            size={'size-12'}
          />
          <p>Site Navigation</p>
        </div>
        <div className={menuList}>
          {links.map((linkProps) => {
            return (
              <NavbarLink
                key={linkProps.path}
                {...linkProps}
                mobile
              />
            );
          })}
          <div className={'absolute right-0 bottom-0 p-8'}>
            <CtaLink href={'/get-involved'}>Get Involved</CtaLink>
          </div>
        </div>
      </menu>
    </div>
  );
};

export default Header;
