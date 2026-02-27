import styles from '@/components/footer/styles';
import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

const links: PropsWithChildren<LinkProps>[] = [
  {
    children: 'Landing',
    href: '/',
  },
  {
    children: 'About',
    href: '/about',
  },
  {
    children: 'Local Groups',
    href: '/local',
  },
  {
    children: 'Events',
    href: '/events',
  },
  {
    children: 'Learn More',
    href: '/learn',
  },
  {
    children: 'Get Involved',
    href: '/get-involved',
  },
  {
    children: 'Admin',
    href: '/studio',
  },
];

const Sitemap: FC = () => {
  const { container, title, divider } = styles;

  const { linkContainer } = {
    linkContainer: 'flex flex-wrap items-center justify-between gap-6',
  };

  return (
    <div className={container}>
      <h4 className={title}>Sitemap</h4>
      <hr className={divider} />
      <div className={linkContainer}>
        {links.map((link) => (
          <Link
            key={link.href.toString()}
            href={link.href}
          >
            {link.children}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;
