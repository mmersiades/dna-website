import { QuoteProps } from '@/components/landing/Quote';
import { Route } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import './styles.css';

type Props = Pick<QuoteProps, 'citationText' | 'citationUrl'>;

// Assumes a --i CSS variable will be set in a parent component
const Citation: FC<Props> = ({ citationText, citationUrl }) => {
  if (!citationText) return null;

  if (citationUrl) {
    return (
      <div className="citation-section">
        <div className={'citation-container'}>
          <Link
            href={citationUrl as Route}
            target={'_blank'}
            className={'citation'}
          >
            {citationText}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="citation-section">
      <div className={'citation-container'}>
        <p className={'citation'}>{citationText}</p>
      </div>
    </div>
  );
};

export default Citation;
