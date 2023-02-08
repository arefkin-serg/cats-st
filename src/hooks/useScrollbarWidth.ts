import { RefObject, useEffect } from 'react';

const calculateScrollbarWidth = (scrollbarMeasure: HTMLElement): void => {
  const root = document.documentElement;
  const scrollBarWidth = scrollbarMeasure.offsetWidth - scrollbarMeasure.clientWidth;
  root.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);
};

const useScrollbarWidth = <T extends HTMLElement>(ref: RefObject<T>) => {
  useEffect(() => {
    if (ref.current) {
      calculateScrollbarWidth(ref.current);
    }
  }, []);
};

export default useScrollbarWidth;
