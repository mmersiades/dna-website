import copy from '@/constants/copy';
import { getPage } from '@/lib/actions';
import cn from '@/utils/cn';
import generateDNAMetadata from '@/utils/generateDNAMetadata';
import { Metadata } from 'next';
import Link from 'next/link';
import './styles.css';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('get-involved');

  return generateDNAMetadata(page);
}

export default function GetInvolvedPage() {
  const { header, links } = copy['get-involved'];
  const { cta } = {
    cta: cn([
      'flex items-center justify-center',
      'bg-radial from-primary/75 to-transparent',
      'text-center',
      'rounded-md',
      'font-bold sm:text-xl lg:text-2xl',
      'p-2 md:p-4 lg:p-6 xl:p-8',
      'font-display',
      'ring-2 ring-primary/50',
      'hover:ring-primary',
      'transition-color duration-250',
    ]),
  };

  return (
    <div className={'cta-container'}>
      <div className={'header-container'}>
        <h4 className={'heading'}>{header}</h4>
      </div>
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
