import copy from '@/constants/copy';
import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';
import './styles.css';

const GetInvolvedCtaContent: FC = () => {
  const { header, links } = copy['get-involved'];
  const { cta, headingLineHeight } = {
    cta: cn([
      'flex items-center justify-center',
      'text-center',
      'rounded-md',
      'font-bold sm:text-xl lg:text-2xl',
      'leading-4 sm:leading-5 md:leading-6',
      'p-2 sm:p-4 md:p-8 lg:p-6 xl:p-8',
      'font-display',
    ]),
    headingLineHeight: 'leading-7 sm:leading-8 md:leading-10 lg:leading-11',
  };

  return (
    <div className={'centered'}>
      <div className={'cta-container'}>
        <div className={'header-container'}>
          <h4 className={cn('heading', headingLineHeight)}>{header}</h4>
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
    </div>
  );
};

export default GetInvolvedCtaContent;
