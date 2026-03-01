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
      'bg-radial from-primary to-transparent',
      'text-center',
      'rounded-md',
      'font-bold text-base sm:text-xl',
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
