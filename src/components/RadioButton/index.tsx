import React, { useRef } from 'react';
import './radio-button.scss';

const RadioButton = ({ name, labelText, cost, checked }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleEnter = (event: any) => {
    if (event.key === 'Enter' && ref.current) {
      ref?.current?.click();
    }
  };
  return (
    <label className="radio-button" tabIndex={0} role="button" onKeyDown={handleEnter}>
      <input
        type="radio"
        name={name}
        value={labelText}
        className="radio-button__field visually-hidden"
        checked={checked}
        ref={ref}
      />
      <span className="radio-button__content">
        <span className="radio-button__circles" />
        {labelText}
      </span>
      <span>${cost}</span>
    </label>
  );
};

type Props = {
  name: string;
  labelText: string;
  cost: string;
  checked?: boolean;
};

export default RadioButton;
