import { FC } from 'react';
import './styles.css';

const LandingHeaderSpacer: FC = () => {
  return (
    <>
      <div className="fallback-header-spacer"></div>
      <div className="header-spacer"></div>
    </>
  );
};

export default LandingHeaderSpacer;
