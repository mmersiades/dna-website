import copy from '@/constants/copy';
import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';
import './styles.css';

const LandingFooter: FC = () => {
  const { home } = copy.landing;
  return (
    <>
      {/*Footer*/}
      <Link
        className={'home-container'}
        href={home.href}
      >
        <span className={cn(['home-icon', 'icon-[lucide--home]'])}></span>
      </Link>
      <footer className={'footer'}>
        <div className={'progress'}></div>
      </footer>

      {/*Fallback footer*/}
      <footer className={'fallback-footer'}>
        <Link
          className={'fallback-home-container'}
          href={home.href}
        >
          <span className={cn(['home-icon', 'icon-[lucide--home]'])}></span>
        </Link>
      </footer>
    </>
  );
};

export default LandingFooter;
