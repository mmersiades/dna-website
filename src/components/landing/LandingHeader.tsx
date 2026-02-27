import CtaLink from '@/components/links/CtaLink';
import { FC } from 'react';
import './styles.css';

const LandingHeader: FC = () => {
  return (
    <>
      {/*Header*/}
      <div
        id={'main-content'}
        className={'landing-cta-container'}
      >
        <CtaLink href={'/get-involved'}>Get Involved</CtaLink>
      </div>
      <header className="header">
        <h1 className={'heading'}>What is Degrowth?</h1>
      </header>

      {/*Fallback header*/}
      <header className="fallback-header">
        <h1 className={'heading'}>What is Degrowth?</h1>
        <div
          id={'main-content'}
          className={'fallback-cta-container'}
        >
          <CtaLink href={'/get-involved'}>Get Involved</CtaLink>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
