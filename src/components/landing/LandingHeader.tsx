import CtaLink from '@/components/links/CtaLink';
import copy from '@/constants/copy';
import { FC } from 'react';
import './styles.css';

const LandingHeader: FC = () => {
  const { header: headerText, cta } = copy.landing;
  return (
    <>
      {/*Header*/}
      <div
        id={'main-content'}
        className={'landing-cta-container'}
      >
        <CtaLink
          href={cta.href}
          responsive
        >
          {cta.children}
        </CtaLink>
      </div>
      <header className="header">
        <h1 className={'heading'}>{headerText}</h1>
      </header>

      {/*Fallback header*/}
      <header className="fallback-header">
        <h1 className={'heading'}>{headerText}</h1>
        <div
          id={'main-content'}
          className={'fallback-cta-container'}
        >
          <CtaLink
            href={cta.href}
            responsive
          >
            {cta.children}
          </CtaLink>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
