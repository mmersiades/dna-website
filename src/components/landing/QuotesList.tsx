import Quote from '@/components/landing/Quote';
import { sanityFetch } from '@/sanity/lib/live';
import { DEGROWTH_DEFINITIONS_QUERY } from '@/sanity/lib/queries';

export default async function QuotesList() {
  const { data: quotes } = await sanityFetch({
    query: DEGROWTH_DEFINITIONS_QUERY,
  });

  const shuffledQuotes = [...quotes]
    // eslint-disable-next-line react-hooks/purity
    .sort(() => Math.random() - 0.5)
    .slice(0, 15);

  // const test: DEGROWTH_DEFINITIONS_QUERYResult[0] = {
  //   _id: 'qwerty',
  //   citationText:
  //     'Test test test test test Test test test test test Test test test test test Test test test test test Test test test test test Test test test test test!',
  //   citationUrl: 'https://www.google.com',
  //   identifier: 'Test test test test test test!',
  //   quote:
  //     'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test!',
  //   statement: 'test test test test test!',
  //   author: 'Test Test Test Test Test Test Test Test Test Test!',
  // };

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
