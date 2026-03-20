import Quote from '@/components/landing/Quote';
import { sanityFetch } from '@/sanity/lib/live';
import { DEGROWTH_DESCRIPTIONS_QUERY } from '@/sanity/lib/queries';

export default async function QuotesList() {
  const { data: quotes } = await sanityFetch({
    query: DEGROWTH_DESCRIPTIONS_QUERY,
  });

  const shuffledQuotes = [...quotes]
    // eslint-disable-next-line react-hooks/purity
    .sort(() => Math.random() - 0.5)
    .slice(0, 15);

  return (
    <>
      {shuffledQuotes.map((quote, index) => (
        <Quote
          key={quote._id}
          statement={quote.statement}
          quote={quote.quote}
          author={quote.author}
          citationText={quote.citationText}
          citationUrl={quote.citationUrl}
          identifier={quote.identifier}
          index={index + 1}
        />
      ))}
    </>
  );
}
