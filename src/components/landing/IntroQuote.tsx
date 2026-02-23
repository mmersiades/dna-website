import Citation from '@/components/landing/Citation';
import { CSSProperties, FC } from 'react';
import './styles.css';

interface Props {
  quote: string;
  author: string;
  citationText: string;
  citationUrl: string;
  index: number; // 1-based
}

const IntroQuote: FC<Props> = ({
  quote,
  author,
  index,
  citationText,
  citationUrl,
}) => {
  return (
    <section
      className={'quote-section'}
      style={{ '--i': index } as CSSProperties}
    >
      <div className="quote-spacer"></div>
      <div className={'intro-quote-container'}>
        <blockquote>{quote}</blockquote>
        <p>
          <em>
            <small>{` - ${author}`}</small>
          </em>
        </p>
      </div>
      <div className="quote-spacer"></div>
      <Citation
        citationUrl={citationUrl}
        citationText={citationText}
      />
    </section>
  );
};

export default IntroQuote;
