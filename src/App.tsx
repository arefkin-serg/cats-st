import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import CartPanel from './components/CartPanel';

import useScrollbarWidth from './hooks/useScrollbarWidth';

const App = () => {
  const { pathname } = useLocation();
  const scrollbarMeasure = useRef<HTMLDivElement>(null);
  useScrollbarWidth(scrollbarMeasure);

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <AppRoutes />
      <CartPanel />
      <div ref={scrollbarMeasure} className="modal-scrollbar-measure" />
    </>
  );
};

export default App;
