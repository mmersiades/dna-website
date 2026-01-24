import { FC } from 'react';

const env = process.env.NODE_ENV;

const BreakPoint: FC = () => {
  const isDev = env === 'development';

  const { mobile, small, medium, xLarge, large, twoXLarge } = {
    mobile: 'visible sm:hidden',
    small: 'hidden sm:max-md:visible sm:max-md:block',
    medium: 'hidden md:max-lg:visible md:max-lg:block',
    large: 'hidden lg:max-xl:visible lg:max-xl:block',
    xLarge: 'hidden xl:max-2xl:visible xl:max-2xl:block',
    twoXLarge: 'hidden 2xl:visible 2xl:block',
  };

  if (isDev) {
    return (
      <>
        <p className={mobile}>MOBILE</p>
        <p className={small}>SM</p>
        <p className={medium}>MD</p>
        <p className={large}>LG</p>
        <p className={xLarge}>XL</p>
        <p className={twoXLarge}>2XL</p>
      </>
    );
  }

  return null;
};

export default BreakPoint;
