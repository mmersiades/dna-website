import IntroQuote from '@/components/landing/IntroQuote';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingHeader from '@/components/landing/LandingHeader';
import LandingHeaderSpacer from '@/components/landing/LandingHeaderSpacer';
import QuotesList from '@/components/landing/QuotesList';
import { Suspense } from 'react';

export default function Landing() {
  return (
    <>
      <LandingHeader />
      <main>
        <LandingHeaderSpacer />
        <IntroQuote
          quote={
            '“Degrowth is not a one-size-fits-all concept, but a mosaic of ideas, practices, and visions that draw from various sources.”'
          }
          author={'Degrowth.net'}
          citationText={
            'International Degrowth Network. (n.d.). What is Degrowth? Explore Degrowth. Retrieved 2025'
          }
          citationUrl={
            'https://explore.degrowth.net/degrowth/what-is-degrowth/'
          }
          index={0}
        />
        <Suspense fallback={<div />}>
          <QuotesList />
        </Suspense>
      </main>
      <LandingFooter />
    </>
  );
}
