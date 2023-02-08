import React from 'react';
import classNames from 'classnames';
import './phone-input.scss';

import Label from '../Label';
import Input from '../Input';
import Dropdown from '../Dropdown';

const PhoneInput = ({ name, value, className }: Props) => {
  // TODO Move it to the Props
  const dropdownData = [
    { flag: 'australia', value: '+61' },
    { flag: 'australia', value: '+62' },
    { flag: 'australia', value: '+63' },
  ];

  return (
    <div className={classNames('phone-input', className)}>
      <div className="phone-input__box">
        <Dropdown data={dropdownData} name="country-code" className="phone-input__country-dropdown dropdown--phone" />
        <Input className="phone-input__field" type="tel" name={name} value={value} />
      </div>
      <Label forInputId="phone" text="mobile phone" className="phone-input__label" />
    </div>
  );
};

type Props = {
  name: string;
  value?: string;
  className?: string;
};

export default PhoneInput;
