import { useState } from 'react';
import useEventListener from './useEventListener';

const useWindowSize = () => {
  if (typeof window !== 'undefined') {
    const [windowSize, setWindowSize] = useState<[number, number]>([
      window.innerWidth,
      window.innerHeight,
    ]);

    useEventListener('resize', () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    });

    return windowSize;
  }

  return [null, null];
};

export default useWindowSize;
