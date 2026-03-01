import IntroQuote from '@/components/landing/IntroQuote';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingHeader from '@/components/landing/LandingHeader';
import LandingHeaderSpacer from '@/components/landing/LandingHeaderSpacer';
import QuotesList from '@/components/landing/QuotesList';
import copy from '@/constants/copy';
import { Suspense } from 'react';

export default function Landing() {
  const { introQuote } = copy.landing;
  return (
    <>
      <LandingHeader />
      <main>
        <LandingHeaderSpacer />
        <IntroQuote
          quote={introQuote.quote}
          author={introQuote.author}
          citationText={introQuote.citationText}
          citationUrl={introQuote.citationUrl}
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
