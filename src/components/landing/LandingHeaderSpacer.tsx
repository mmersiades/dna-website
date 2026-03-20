'use client';
import { FC, useEffect, useRef } from 'react';
import './styles.css';

const LandingHeaderSpacer: FC = () => {
  const scrollIndicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        if (window.scrollY > 200) {
          scrollIndicatorRef.current.classList.add('hidden');
        } else {
          scrollIndicatorRef.current.classList.remove('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fallback-header-spacer"></div>
      <div className="header-spacer"></div>
      <span
        ref={scrollIndicatorRef}
        className={'icon-[lucide--arrow-big-down-dash] scroll-indicator'}
      />
    </>
  );
};

export default LandingHeaderSpacer;
