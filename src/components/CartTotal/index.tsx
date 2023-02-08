import React, { useState, useEffect } from 'react';
import './cart-total.scss';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { RootState } from '../../store/store';
import { formatPrice } from '../../shared/utils/formatPrice';

const CartTotal = ({ className }: Props) => {
  const { coupons, cart, shippingCost } = useSelector((state: RootState) => ({
    coupons: state.appReducer.coupons,
    cart: state.appReducer.cart,
    shippingCost: state.appReducer.shippingCost,
  }));
  const [subTotal, setSubTotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [shippingPrice, setShippingPrice] = useState<number>(0);

  useEffect(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubTotal(subtotal);
    const maxDiscount =
      coupons.length > 0 && subtotal > 0 ? Math.max(...coupons.map((coupon) => coupon.discountValue)) : 0;
    setDiscount(maxDiscount);
    const shipping = subtotal > 0 ? shippingCost : 0;
    setShippingPrice(shipping);
    setTotal(subtotal - shipping - maxDiscount);
  }, [coupons, cart, shippingCost]);

  return (
    <div className={classNames('cart-total', className)}>
      <p className="cart-total__row">
        <span className="cart-total__key">Subtotal</span>
        <span className="cart-total__value">${formatPrice(subTotal)}</span>
      </p>
      <p className="cart-total__row">
        <span className="cart-total__key">Shipping</span>
        <span className="cart-total__value">${formatPrice(shippingPrice)}</span>
      </p>
      {discount > 0 && (
        <p className="cart-total__row">
          <span className="cart-total__key">Discounts</span>
          <span className="cart-total__value">-${formatPrice(discount)}</span>
        </p>
      )}
      <p className="cart-total__cost">
        Total
        <span className="cart-total__cost-value">
          <span className="cart-total__currency">AUD</span>${formatPrice(total)}
        </span>
      </p>
    </div>
  );
};

type Props = {
  className?: string;
};

export default CartTotal;
