import { CSSProperties, FC } from 'react';
import './styles.css';

interface Props {
  text: string;
  author: string;
  position: string;
  index: number; // 1-based
}

const Quote: FC<Props> = ({ text, author, index }) => {
  return (
    <section
      className={'quote-section'}
      style={{ '--i': index } as CSSProperties}
    >
      <div className="quote-spacer"></div>
      <div className={'quote-container'}>
        <blockquote>{text}</blockquote>
        <p>
          <em>
            <small>{` - ${author}`}</small>
          </em>
        </p>
      </div>
      <div className="quote-spacer"></div>
    </section>
  );
};

export default Quote;
