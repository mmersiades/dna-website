import CtaLink from '@/components/links/CtaLink';
import cn from '@/utils/cn';
import Link from 'next/link';
import './landing.css';

export default function Landing() {
  return (
    <>
      {/*Header*/}
      <div className={'cta-container'}>
        <CtaLink href={'/get-involved'}>Get Involved</CtaLink>
      </div>
      <header className="header">
        <h1 className={'heading'}>What is Degrowth?</h1>
      </header>

      {/*Fallback header*/}
      <header className="fallback-header">
        <h1 className={'heading'}>What is Degrowth?</h1>
        <div className={'fallback-cta-container'}>
          <CtaLink href={'/get-involved'}>Get Involved</CtaLink>
        </div>
      </header>
      <main>
        <div className="fallback-header-spacer"></div>
        <div className="header-spacer"></div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
        <div className={'h-20 p-20'}>.</div>
      </main>

      {/*Footer*/}
      <>
        <Link
          className={'home-container'}
          href={'/about'}
        >
          <span className={cn(['home-icon', 'icon-[lucide--home]'])}></span>
        </Link>
        <footer className={'footer'}>
          <div className={'progress'}></div>
        </footer>
      </>

      {/*Fallback footer*/}
      <footer className={'fallback-footer'}>
        <Link
          className={'fallback-home-container'}
          href={'/about'}
        >
          <span className={cn(['home-icon', 'icon-[lucide--home]'])}></span>
        </Link>
      </footer>
    </>
  );
}
