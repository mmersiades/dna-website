'use client';
import { useCallback, useEffect, useState } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Set initial width after component mounts on client side
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]); // Empty dependency array ensures it runs once on mount

  return screenWidth;
};

export default useScreenWidth;
