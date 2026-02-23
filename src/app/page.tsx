import IntroQuote from '@/components/landing/IntroQuote';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingHeader from '@/components/landing/LandingHeader';
import LandingHeaderSpacer from '@/components/landing/LandingHeaderSpacer';
import Quote from '@/components/landing/Quote';

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
          index={0}
        />
        <Quote
          statement={'a movement.'}
          quote={
            '“Degrowth is an academic and social movement aimed at the planned and democratic reduction of production and consumption as a solution to social-ecological crises.”'
          }
          author={'Wikipedia'}
          index={1}
        />
        <Quote
          statement={'an economic theory.'}
          quote={
            '“How do we save our planet? Some economists believe the only way is to radically scale back our global consumption of resources. This is a key premise of degrowth – a political and economic theory that is gaining traction as fears grow over climate change.”'
          }
          author={'World Economic Forum, 2022'}
          index={2}
        />
        <Quote
          statement={'a planned reduction.'}
          quote={
            '“A planned reduction of excess energy and resource use to bring the economy back into balance with the living world in a safe, just and equitable way.”'
          }
          author={'Jason Hickel, 2025'}
          index={3}
        />
        <Quote
          statement={'a policy.'}
          quote={
            '“a policy of reducing levels of production and consumption within an economy in order to conserve natural resources and minimize environmental damage.”'
          }
          author={'Oxford Dictionary'}
          index={4}
        />
        <Quote
          statement={'a trajectory.'}
          quote={
            '“a trajectory where the ‘throughput’ (energy, materials and waste flows) of an economy decreases while welfare, or well-being, improves.”'
          }
          author={'Giorgos Kallis, 2023'}
          index={5}
        />
        <Quote
          statement={'an academic field.'}
          quote={
            "“degrowth has evolved from an activist movement into a vibrant multi-disciplinary academic field, grounding in Georgescu-Roegen's (1971) thermodynamic analysis of the economy, Meadows' et al. (1972) limits to growth, and Daly’s (1973, 1997) work on the steady-state economy. Degrowth … draws from anthropology, sociology, and philosophy, and links to inter-disciplinary research in ecological economics and industrial ecology”"
          }
          author={'Martin Weiss & Claudio Cattaneo, 2017'}
          index={6}
        />
      </main>
      <LandingFooter />
    </>
  );
}
