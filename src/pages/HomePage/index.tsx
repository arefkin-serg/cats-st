import React from 'react';
import './home-page.scss';
import { useAppDispatch } from '../../store/store';
import { showCartPanel } from '../../store/app/app-store';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const openCartPanel = () => {
    dispatch(showCartPanel());
  };

  return (
    <section className="homepage">
      <img src="/images/homepage.png" alt="" className="homepage__image" onClick={openCartPanel} />
    </section>
  );
};

export default HomePage;
