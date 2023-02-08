import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import { useAppDispatch, RootState } from '../../store/store';
import './coupon-input.scss';

import CouponLabel from '../CouponLabel';

import { addCoupon, removeCoupon } from '../../store/app/app-store';

const CouponInput = ({ className }: Props) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<any>(null);
  const { coupons } = useSelector((state: RootState) => ({
    coupons: state.appReducer.coupons,
  }));
  const [isCouponFormShown, setIsCouponFormShown] = useState<boolean>(coupons && coupons.length > 0);

  // TO DO Use Formik here
  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    inputRef.current.value = '';
    if (coupons.length > 0 && !isCouponFormShown) {
      setIsCouponFormShown(true);
    }
  }, [coupons]);

  const handleApply = () => {
    const _id = inputRef.current.value;
    if (!_id || coupons.some((item) => item.id === _id)) {
      return;
    }
    dispatch(addCoupon(_id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeCoupon(id));
  };

  const showCouponForm = () => {
    setIsCouponFormShown(true);
  };

  return (
    <div className={classNames('coupon-input', className)}>
      <AnimateHeight duration={350} height={isCouponFormShown ? 0 : 'auto'}>
        <div
          className={classNames('coupon-input__enter', {
            'coupon-input__enter--hidden': isCouponFormShown,
          })}
        >
          Promo Code?
          <button className="coupon-input__enter-action" type="button" onClick={showCouponForm}>
            Enter Code
          </button>
        </div>
      </AnimateHeight>
      <AnimateHeight duration={350} height={isCouponFormShown ? 'auto' : 0}>
        <div
          className={classNames('coupon-input__row', {
            'coupon-input__row--hidden': !isCouponFormShown,
          })}
        >
          <input type="text" className="coupon-input__field" ref={inputRef} placeholder="Coupon Code" />
          <button type="button" className="coupon-input__button button" onClick={handleApply}>
            Apply
          </button>
        </div>
      </AnimateHeight>
      <ul className="coupon-input__list">
        {coupons.map((coupon) => (
          <li className="coupon-input__list-elem" key={coupon.id}>
            <CouponLabel id={coupon.id} discountValue={coupon.discountValue} handleRemove={handleRemove} />
          </li>
        ))}
      </ul>
    </div>
  );
};

type Props = {
  className?: string;
};

export default CouponInput;
