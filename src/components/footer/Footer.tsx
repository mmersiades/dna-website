import Sitemap from '@/components/footer/Sitemap';
import Socials from '@/components/footer/Socials';
import ContactForm from '@/components/forms/ContactForm';
import MailingListForm from '@/components/forms/MailingListForm';
import { anchor } from '@/components/styles';
import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  const { container, innerContainer, grid } = {
    container: cn([
      'bg-tertiary-800 dark:bg-tertiary-800',
      'w-screen',
      'text-background dark:text-foreground',
    ]),
    innerContainer: cn(['mr-auto ml-auto', 'container', 'p-4']),
    grid: cn([
      'grid auto-rows-min',
      'gap-8 xl:gap-12',
      '[column-rule:1px_solid_#ccc]',
      // mobile, sm, md
      'grid-cols-1',
      // lg, xl, 2xl
      'lg:grid-cols-2',
    ]),
  };
  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={grid}>
          <div className={'col-span-full lg:col-span-1'}>
            <ContactForm id={'contact'} />
          </div>
          <div className={'col-span-full lg:col-span-1'}>
            <MailingListForm
              id={'subscribe'}
              subscribeTo={'dna-mailing'}
            />
          </div>
          <div className={'col-span-full'}>
            <Socials id={'socials'} />
          </div>
        </div>
        <Sitemap />
        <p>
          Website by{' '}
          <Link
            href={'https://www.neonkingkong.com'}
            target={'_blank'}
            className={anchor}
          >
            Neon King Kong
          </Link>{' '}
          {`© ${new Date().getFullYear()}`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
