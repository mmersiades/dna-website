import Sitemap from '@/components/footer/Sitemap';
import MailingListForm from '@/components/forms/MailingListForm';
import cn from '@/utils/cn';
import { FC } from 'react';

const Footer: FC = () => {
  const { container, innerContainer } = {
    container: cn([
      'bg-tertiary-800 dark:bg-tertiary-800',
      'w-screen h-200',
      'text-background dark:text-foreground',
    ]),
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
        <Sitemap />
      </div>
    </div>
  );
};

export default Footer;
