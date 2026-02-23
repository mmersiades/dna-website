import Citation from '@/components/landing/Citation';
import { CSSProperties, FC } from 'react';
import './styles.css';

export interface QuoteProps {
  statement: string;
  quote: string;
  author: string;
  index: number; // 1-based
  citationText: string | null;
  citationUrl: string | null;
  identifier: string | null;
}

const Quote: FC<QuoteProps> = ({
  quote,
  author,
  index,
  statement,
  citationText,
  citationUrl,
  identifier,
}) => {
  let label = ` - ${author}`;

  if (identifier) {
    label = label + `, ${identifier}`;
  }

  return (
    <section
      className={'quote-section'}
      style={{ '--i': index } as CSSProperties}
    >
      {/*Subheader*/}
      <div className={'subheader-container'}>
        <div className={'subheader-a-container'}>
          <h3 className={'subheader-a'}>Degrowth is </h3>
        </div>
        <div className={'subheader-b-container'}>
          <h3 className={'subheader-b'}>{statement}</h3>
        </div>
      </div>

      {/*Blockquote*/}
      <div className="quote-spacer"></div>
      <div className={'quote-container'}>
        <blockquote>{quote}</blockquote>
        <p>
          <em>
            <small>{label}</small>
          </em>
        </p>
      </div>
      <div className="quote-spacer"></div>

      {/*Citation*/}
      {
        <Citation
          citationUrl={citationUrl}
          citationText={citationText}
        />
      }
    </section>
  );
};

export default Quote;
