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
          citationText={
            'International Degrowth Network. (n.d.). What is Degrowth? Explore Degrowth. Retrieved 2025'
          }
          citationUrl={
            'https://explore.degrowth.net/degrowth/what-is-degrowth/'
          }
          index={0}
        />
        <Quote
          statement={'a movement.'}
          quote={
            '“Degrowth is an academic and social movement aimed at the planned and democratic reduction of production and consumption as a solution to social-ecological crises.”'
          }
          author={'Wikipedia'}
          citationText={
            'Wikipedia contributors. (n.d.). Degrowth. Wikipedia. Retrieved December 31, 2025'
          }
          citationUrl={'https://en.wikipedia.org/wiki/Degrowth'}
          index={1}
        />
        <Quote
          statement={'an economic theory.'}
          quote={
            '“How do we save our planet? Some economists believe the only way is to radically scale back our global consumption of resources. This is a key premise of degrowth – a political and economic theory that is gaining traction as fears grow over climate change.”'
          }
          author={'World Economic Forum, 2022'}
          citationText={
            'Friedrich, J. (2022). What is degrowth? Economics and the climate crisis. World Economic Forum.'
          }
          citationUrl={
            'https://www.weforum.org/stories/2022/06/what-is-degrowth-economics-climate-change/'
          }
          index={2}
        />
        <Quote
          statement={'a planned reduction.'}
          quote={
            '“A planned reduction of excess energy and resource use to bring the economy back into balance with the living world in a safe, just and equitable way.”'
          }
          author={'Jason Hickel, 2025'}
          citationText={
            'Hickel, J. (2020). Less is more: How degrowth will save the world. Windmill.'
          }
          citationUrl={'https://www.jasonhickel.org/less-is-more'}
          index={3}
        />
        <Quote
          statement={'a policy.'}
          quote={
            '“a policy of reducing levels of production and consumption within an economy in order to conserve natural resources and minimize environmental damage.”'
          }
          author={'Oxford Dictionary'}
          citationText={
            'Oxford University Press. (n.d.). Degrowth, n., 2.b. In Oxford English dictionary. Retrieved 2025'
          }
          citationUrl={'https://doi.org/10.1093/OED/2618684864'}
          index={4}
        />
        <Quote
          statement={'a trajectory.'}
          quote={
            '“a trajectory where the ‘throughput’ (energy, materials and waste flows) of an economy decreases while welfare, or well-being, improves.”'
          }
          author={'Giorgos Kallis, 2023'}
          citationText={
            'Kallis, G. (2018). What is degrowth? In Degrowth (Chap. 2). Agenda Publishing.'
          }
          citationUrl={
            'https://www.cambridge.org/core/books/degrowth/551643BB890451FC2646E7ED13CB1538'
          }
          index={5}
        />
        <Quote
          statement={'an academic field.'}
          quote={
            "“degrowth has evolved from an activist movement into a vibrant multi-disciplinary academic field, grounding in Georgescu-Roegen's (1971) thermodynamic analysis of the economy, Meadows' et al. (1972) limits to growth, and Daly’s (1973, 1997) work on the steady-state economy. Degrowth … draws from anthropology, sociology, and philosophy, and links to inter-disciplinary research in ecological economics and industrial ecology”"
          }
          author={'Martin Weiss & Claudio Cattaneo, 2017'}
          citationText={
            'Weiss, M., & Cattaneo, C. (2017). Degrowth: Taking stock and reviewing an emerging academic paradigm. Ecological Economics, 137, 220–230.'
          }
          citationUrl={'https://doi.org/10.1016/j.ecolecon.2017.01.014'}
          index={6}
        />
      </main>
      <LandingFooter />
    </>
  );
}
