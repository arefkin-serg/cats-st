import React, { useRef, useEffect } from 'react';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import './quantity-input.scss';

import { wrongDigitSymbols } from '../../shared/models/wrongDigitSymbols';

type FormType = {
  quantity: number;
};

const validationSchema = Yup.object().shape({
  quantity: Yup.number().required('Required'),
});

const MAX_QUANTITY = 9999;

const QuantityInput = ({ onChange, value = 1, maxValue = MAX_QUANTITY, className, isUnderDelete }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const previousInputValueRef = useRef<number>();

  useEffect(() => {
    if (isUnderDelete) {
      return;
    }
    if (formik && formik.values.quantity !== value) {
      formik.setFieldValue('quantity', value);
    }
  }, [value, isUnderDelete]);

  const initialValues: FormType = {
    quantity: value,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      onChange(values.quantity);
    },
  });

  const handleFocus = () => {
    if (!inputRef.current) {
      return;
    }
    // eslint-disable-next-line functional/immutable-data
    previousInputValueRef.current = formik.values.quantity;
    inputRef.current.select();
  };

  const handleInputBlur = () => {
    const _value = formik.values.quantity;
    const _stringValue = inputRef.current?.value ?? '';
    if (typeof _value !== 'number' || _stringValue.includes('.') || _value < 0 || _value > maxValue) {
      formik.setFieldValue('quantity', previousInputValueRef.current);
      return;
    }
    formik.handleSubmit();
  };

  const decrementValue = () => {
    formik.setFieldValue('quantity', formik.values.quantity - 1);
    formik.handleSubmit();
  };

  const incrementValue = () => {
    formik.setFieldValue('quantity', formik.values.quantity + 1);
    formik.handleSubmit();
  };

  return (
    <FormikProvider value={formik}>
      <form className={classNames('quantity-input', className)} onSubmit={formik.handleSubmit}>
        <button
          className="quantity-input__button quantity-input__button--minus"
          type="button"
          disabled={formik.values.quantity < 1}
          onClick={decrementValue}
        >
          –
        </button>
        <input
          type="number"
          name="quantity"
          className="quantity-input__field"
          onChange={formik.handleChange}
          onBlur={handleInputBlur}
          value={formik.values.quantity}
          onFocus={handleFocus}
          onKeyDown={(event) => {
            if (
              wrongDigitSymbols.includes(event.key) ||
              (event.key === 'ArrowDown' && formik.values.quantity === 0) ||
              (event.key === 'ArrowUp' && formik.values.quantity === maxValue)
            ) {
              event.preventDefault();
            }
          }}
          ref={inputRef}
        />
        <button
          className="quantity-input__button quantity-input__button--plus"
          type="button"
          disabled={formik.values.quantity >= maxValue}
          onClick={incrementValue}
        >
          +
        </button>
      </form>
    </FormikProvider>
  );
};

type Props = {
  value?: number;
  maxValue?: number;
  className?: string;
  onChange: (newValue: number) => void;
  isUnderDelete?: boolean;
};

export default QuantityInput;
