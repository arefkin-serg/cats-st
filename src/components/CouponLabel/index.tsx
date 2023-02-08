import React from 'react';
import classNames from 'classnames';
import './coupon-label.scss';
import { formatPrice } from '../../shared/utils/formatPrice';

const CouponLabel = ({ id, discountValue, className, handleRemove }: Props) => {
  return (
    <p className={classNames('coupon-label', className)} title={`Discount ${formatPrice(discountValue, 0)}%`}>
      <span className="coupon-label__text">{id}</span>
      <button
        type="button"
        className="coupon-label__close-btn"
        onClick={() => {
          handleRemove(id);
        }}
      />
    </p>
  );
};

type Props = {
  id: string;
  discountValue: number;
  className?: string;
  handleRemove: (index: string) => void;
};

export default CouponLabel;
