import Quote from '@/components/landing/Quote';
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
        <section className="quote-section">
          <div className="quote-spacer"></div>
          <div className="opening-quote-container">
            <blockquote>
              “Degrowth is not a one-size-fits-all concept, but a mosaic of
              ideas, practices, and visions that draw from various sources.”
            </blockquote>
            <p>
              <em>
                <small> - Degrowth.net</small>
              </em>
            </p>
          </div>
          <div className="quote-spacer"></div>
        </section>
        <Quote
          text={
            '“Degrowth is an academic and social movement aimed at the planned and democratic reduction of production and consumption as a solution to social-ecological crises.”'
          }
          author={'Wikipedia'}
          position={'first'}
          index={1}
        />
        <Quote
          text={
            '“How do we save our planet? Some economists believe the only way is to radically scale back our global consumption of resources. This is a key premise of degrowth – a political and economic theory that is gaining traction as fears grow over climate change.”'
          }
          author={'World Economic Forum, 2022'}
          position={'second'}
          index={2}
        />
        <Quote
          text={
            '“A planned reduction of excess energy and resource use to bring the economy back into balance with the living world in a safe, just and equitable way.”'
          }
          author={'Jason Hickel, 2025'}
          position={'third'}
          index={3}
        />
        <Quote
          text={
            '“a policy of reducing levels of production and consumption within an economy in order to conserve natural resources and minimize environmental damage.”'
          }
          author={'Oxford Dictionary'}
          position={'fourth'}
          index={4}
        />
        <Quote
          text={
            '“a trajectory where the ‘throughput’ (energy, materials and waste flows) of an economy decreases while welfare, or well-being, improves.”'
          }
          author={'Giorgos Kallis, 2023'}
          position={'fifth'}
          index={5}
        />
        <Quote
          text={
            "“degrowth has evolved from an activist movement into a vibrant multi-disciplinary academic field, grounding in Georgescu-Roegen's (1971) thermodynamic analysis of the economy, Meadows' et al. (1972) limits to growth, and Daly’s (1973, 1997) work on the steady-state economy. Degrowth … draws from anthropology, sociology, and philosophy, and links to inter-disciplinary research in ecological economics and industrial ecology”"
          }
          author={'Martin Weiss & Claudio Cattaneo, 2017'}
          position={'sixth'}
          index={6}
        />
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
