import cn from '@/utils/cn';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import './styles.css';

const links: PropsWithChildren<LinkProps>[] = [
  {
    href: '#subscribe',
    children: 'Subscribe to our mailing list',
  },
  {
    href: '/local',
    children: 'Join a local Degrowth group',
  },
  {
    href: '/get-involved/whatsapp',
    children: 'Join a learning circle',
  },
  {
    href: '#socials',
    children: 'Find us on socials',
  },
  {
    href: '/events',
    children: 'Come to a DNA event',
  },
  {
    href: '/get-involved/whatsapp',
    children: 'Join a WhatsApp group',
  },
];

export default function GetInvolvedPage() {
  const { cta } = {
    cta: cn([
      'flex items-center justify-center',
      'bg-radial from-primary to-transparent',
      'text-center',
      'rounded-md',
      'font-bold text-base sm:text-xl',
    ]),
  };

  return (
    <div className={'cta-container'}>
      {links.map((link, index) => (
        <Link
          key={link.href.toString() + index}
          className={cn(cta, 'cta-position')}
          href={link.href}
        >
          <span>{link.children}</span>
        </Link>
      ))}
    </div>
  );
}
