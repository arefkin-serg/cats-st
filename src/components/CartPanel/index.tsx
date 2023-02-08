import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import './cart-panel.scss';

import RecommendedItem from '../RecommendedItem';
import Cart from '../Cart';
import CouponInput from '../CouponInput';
import CartTotal from '../CartTotal';
import SvgIcon from '../SvgIcons/SvgIcon';

import { RootState, useAppDispatch } from '../../store/store';
import { closeCartPanel } from '../../store/app/app-store';

const ANIMATION_DURATION = 300;

const CartPanel = () => {
  const [isShown, setIsShown] = useState<boolean>();
  const { isCartPanelOpened } = useSelector((state: RootState) => ({
    isCartPanelOpened: state.appReducer.isCartPanelOpened,
  }));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsShown(isCartPanelOpened);
      if (isCartPanelOpened) {
        document.body.classList.add('scroll-hidden');
        return;
      }
      document.body.classList.remove('scroll-hidden');
    }, 0);
  }, [isCartPanelOpened]);

  const hideCartPanel = () => {
    setIsShown(false);
    setTimeout(() => {
      dispatch(closeCartPanel());
    }, ANIMATION_DURATION);
  };

  const openCheckoutPage = () => {
    navigate('/checkout');
    hideCartPanel();
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isCartPanelOpened && (
        <aside
          className={classNames('cart-panel', {
            'cart-panel--opened': isShown,
          })}
        >
          <section className="cart-panel__box">
            <div className="cart-panel__form">
              <div className="cart-panel__top-box">
                <div className="cart-panel__title-box">
                  <button className="cart-panel__close-btn" type="button" onClick={hideCartPanel}>
                    <SvgIcon name="cross" className="cart-panel__close-icon" />
                  </button>
                  <h2 className="cart-panel__title">Your Cart</h2>
                </div>
                <Cart />
                <CouponInput className="cart-panel__coupon-input" />
                <RecommendedItem className="cart-panel__recommended-item" isOnCartPanel />
              </div>
              <div className="cart-panel__bottom-box">
                <CartTotal className="cart-total cart-total--index" />
                <div className="cart-panel__button-box">
                  <button
                    className="button button--primary button--index cart-panel__button"
                    type="button"
                    onClick={openCheckoutPage}
                  >
                    Checkout now
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="cart-panel__backdrop" onClick={hideCartPanel} />
        </aside>
      )}
    </>
  );
};

export default CartPanel;
