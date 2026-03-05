import Sitemap from '@/components/footer/Sitemap';
import Socials from '@/components/footer/Socials';
import styles from '@/components/footer/styles';
import ContactForm from '@/components/forms/ContactForm';
import MailingListForm from '@/components/forms/MailingListForm';
import { anchor } from '@/components/styles';
import copy from '@/constants/copy';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  const {
    websiteBy,
    developer: { name: developerName, url: developerUrl },
  } = copy.footer;

  const { footerContainer, innerContainer, grid } = styles;

  return (
    <div className={footerContainer}>
      <div className={innerContainer}>
        <div className={grid}>
          <div className={'col-span-full lg:col-span-1'}>
            <ContactForm id={'contact'} />
          </div>
          <div className={'col-span-full lg:col-span-1'}>
            <MailingListForm id={'subscribe'} />
          </div>
          <div className={'col-span-full'}>
            <Socials id={'socials'} />
          </div>
        </div>
        <Sitemap />
        <p>
          {websiteBy}{' '}
          <Link
            href={developerUrl}
            target={'_blank'}
            className={anchor}
          >
            {developerName}
          </Link>{' '}
          {`© ${new Date().getFullYear()}`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
