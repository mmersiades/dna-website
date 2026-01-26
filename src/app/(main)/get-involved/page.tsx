import cn from '@/utils/cn';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

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
  const { cta, grid } = {
    cta: cn([
      'flex items-center justify-center',
      'min-h-12 w-full',
      'p-8',
      'bg-gray-50 dark:bg-gray-950',
      'text-center',
      'border-2 rounded-md',
      'font-bold text-xl',
      //
    ]),
    grid: cn([
      'grid',
      'grid-cols-1 sm:grid-cols-2',
      'w-full h-fit',
      'auto-rows-fr',
      'gap-4',
    ]),
  };

  return (
    <div className={'container mr-auto ml-auto'}>
      <p className={'text-center font-bold'}>Get Involved</p>
      <div className={grid}>
        {links.map((link, index) => (
          <div
            key={link.href.toString() + index}
            className={'col-span-1'}
          >
            <Link
              className={cta}
              href={link.href}
            >
              {link.children}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
