import { fetchSanityDegrowthDescriptions } from '@/app/actions';
import Quote from '@/components/landing/Quote';

export default async function QuotesList() {
  const quotes = await fetchSanityDegrowthDescriptions();

  return quotes.map((quote, index) => (
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
  ));
}
