import React from 'react';
import classNames from 'classnames';
import './dropdown-country.scss';

import Dropdown from '../Dropdown';
import Label from '../Label';
import { DataItem } from '../Dropdown/models/dataItem';

const DropdownCountry = ({ name, labelText, data, className }: Props) => {
  return (
    <div className={classNames('dropdown-country', className)}>
      <Dropdown name={name} data={data} />
      <Label forInputId={name} text="country" />
    </div>
  );
};

type Props = {
  name: string;
  labelText: string;
  data: readonly DataItem[];
  className?: string;
};

export default DropdownCountry;
