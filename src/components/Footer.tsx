import MailingListForm from '@/components/forms/MailingListForm';
import cn from '@/utils/cn';
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
    children: 'WhatsApp Chats',
    href: '/get-involved/whatsapp',
  },
  {
    children: 'Admin',
    href: '/studio',
  },
];

const Footer: FC = () => {
  const { container, innerContainer } = {
    container: cn(['bg-gray-100 dark:bg-gray-700', 'w-screen h-200']),
    innerContainer: cn(['mr-auto ml-auto', 'container', 'p-4']),
  };
  return (
    <div className={container}>
      <div className={innerContainer}>
        <div id={'contact'}>
          <p>Contact details go here</p>
        </div>
        <div id={'socials'}>
          <p>Socials go here</p>
        </div>
        <MailingListForm
          id={'subscribe'}
          subscribeTo={'dna'}
        />
        <h6>Sitemap</h6>
        <div className={'flex flex-wrap items-center justify-between gap-4'}>
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
    </div>
  );
};

export default Footer;
