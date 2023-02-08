import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import { useAppDispatch, RootState } from '../../store/store';
import { updateCart } from '../../store/app/app-store';
import './cart.scss';

import CartItem from '../CartItem';

const DURATION_DELETING_ANIMATION = 350;

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useSelector((state: RootState) => ({
    cart: state.appReducer.cart,
  }));
  const [itemIdUnderDelete, setItemIdUnderDelete] = useState<string | null>();
  const [isDeletingAnimate, setIsDeletingAnimate] = useState<boolean>();
  const isRealCancelDeletionClickRef = useRef<boolean>();

  useEffect(() => {
    if (!itemIdUnderDelete) {
      return undefined;
    }
    document.addEventListener('click', handleCancelDelete);
    return () => document.removeEventListener('click', handleCancelDelete);
  }, [itemIdUnderDelete]);

  const handleChangeQuantity = (id: string, quantity: number) => {
    if (quantity !== 0) {
      const _newCart = cart.map((item) => (item.id !== id ? item : { ...item, quantity }));
      dispatch(updateCart(_newCart));
      return;
    }
    setItemIdUnderDelete(id);
  };

  const handleDelete = () => {
    setIsDeletingAnimate(true);
    document.removeEventListener('click', handleCancelDelete);
    setTimeout(() => {
      setIsDeletingAnimate(false);
      dispatch(updateCart(cart.filter((item) => item.id !== itemIdUnderDelete)));
      setItemIdUnderDelete(null);
      // eslint-disable-next-line functional/immutable-data
      isRealCancelDeletionClickRef.current = false;
    }, DURATION_DELETING_ANIMATION);
  };

  const handleCancelDelete = () => {
    if (!isRealCancelDeletionClickRef.current) {
      // eslint-disable-next-line functional/immutable-data
      isRealCancelDeletionClickRef.current = true;
      return;
    }
    dispatch(updateCart([...cart]));
    setItemIdUnderDelete(null);
    // eslint-disable-next-line functional/immutable-data
    isRealCancelDeletionClickRef.current = false;
  };

  return (
    <div className="cart">
      {cart.length === 0 && <div className="cart__nothing">There’s nothing for your poor cat in your cart!</div>}

      {cart.map((item) => (
        <React.Fragment key={item.id}>
          <AnimateHeight
            duration={DURATION_DELETING_ANIMATION}
            height={isDeletingAnimate && item.id === itemIdUnderDelete ? 0 : 'auto'}
          >
            <section className="cart__item-box">
              <CartItem
                imageName={item.imageUrl}
                title={item.name}
                quantity={item.quantity}
                price={item.price}
                onQuantityChange={(quantity) => handleChangeQuantity(item.id, quantity)}
                className="cart__item"
                isUnderDelete={item.id === itemIdUnderDelete}
              />
              <div
                className={classNames('cart__delete-confirm', {
                  'cart__delete-confirm--shown': item.id === itemIdUnderDelete,
                })}
              >
                <button className="button cart__delete-button" type="button">
                  Cancel
                </button>
                <button className="button cart__delete-button" type="button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </section>
          </AnimateHeight>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;
