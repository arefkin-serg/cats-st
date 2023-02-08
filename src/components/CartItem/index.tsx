import React from 'react';
import classNames from 'classnames';
import './cart-item.scss';

import SvgIcon from '../SvgIcons/SvgIcon';
import Picture from '../Picture';
import QuantityInput from '../QuantityInput';

import { formatPrice } from '../../shared/utils/formatPrice';

const CartItem = ({ imageName, title, quantity, price, className, onQuantityChange, isUnderDelete }: Props) => {
  return (
    <section
      className={classNames('cart-item', className, {
        'cart-item--under-delete': isUnderDelete,
      })}
    >
      <Picture imageName={imageName} altText={title} className="cart-item__image" />
      <div className="cart-item__content">
        <div className="cart-item__title-box">
          <h2 className="cart-item__title">{title}</h2>
          <button className="cart-item__close-btn" type="button" onClick={() => onQuantityChange(0)}>
            <SvgIcon name="cross" className="cart-item__close-icon" />
          </button>
        </div>
        <div className="cart-item__bottom">
          <QuantityInput
            className="cart-item__quantity"
            onChange={onQuantityChange}
            value={quantity}
            isUnderDelete={isUnderDelete}
          />
          <p className="cart-item__cost">{formatPrice(price * quantity)}</p>
        </div>
      </div>
    </section>
  );
};

type Props = {
  imageName: string;
  title: string;
  quantity: number;
  price: number;
  className?: string;
  onQuantityChange: (newValue: number) => void;
  isUnderDelete?: boolean;
};

export default CartItem;
