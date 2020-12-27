import { useEffect } from 'react';

const useEventListener = (
  eventName: string,
  handler: EventListener,
  el = window,
) => {
  useEffect(() => {
    el.addEventListener(eventName, handler);

    return () => {
      el.removeEventListener(eventName, handler);
    };
  }, [eventName, el]);
};

export default useEventListener;
