import ContactForm from '@/components/footer/ContactForm';
import Credits from '@/components/footer/Credits';
import MailingListForm from '@/components/footer/MailingListForm';
import Sitemap from '@/components/footer/Sitemap';
import Socials from '@/components/footer/Socials';
import styles from '@/components/footer/styles';
import WatermarkImage from '@/components/WatermarkImage';
import { FC } from 'react';

const Footer: FC = () => {
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
            <div className={'mt-0 h-18 w-full lg:mt-10'}>
              <WatermarkImage
                type={'ants-footer'}
                altText={'Ants watermark background image'}
              />
            </div>
          </div>
          <div className={'col-span-full'}>
            <Socials id={'socials'} />
          </div>
        </div>
        <Sitemap />
        <Credits />
      </div>
    </div>
  );
};

export default Footer;
