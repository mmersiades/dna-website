import Sitemap from '@/components/footer/Sitemap';
import Socials from '@/components/footer/Socials';
import ContactForm from '@/components/forms/ContactForm';
import MailingListForm from '@/components/forms/MailingListForm';
import { anchor } from '@/components/styles';
import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  const { container, innerContainer } = {
    container: cn([
      'bg-tertiary-800 dark:bg-tertiary-800',
      'w-screen',
      'text-background dark:text-foreground',
    ]),
    innerContainer: cn(['mr-auto ml-auto', 'container', 'p-4']),
  };
  return (
    <div className={container}>
      <div className={innerContainer}>
        <ContactForm id={'contact'} />
        <MailingListForm
          id={'subscribe'}
          subscribeTo={'dna-mailing'}
        />
        <Socials id={'socials'} />
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
