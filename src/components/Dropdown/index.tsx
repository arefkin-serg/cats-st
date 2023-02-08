import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import './dropdown.scss';

import Picture from '../Picture';
import { useClickOutside } from '../../hooks/useOnClickOutside';

import { DataItem } from './models/dataItem';

const Dropdown = ({ name, data, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isListVisible, setIsListVisible] = useState(false);
  useClickOutside(ref, () => setIsListVisible(false));
  const [value, setValue] = useState(data[0]);

  const handleSelect = (newValue: DataItem) => {
    setValue(newValue);
  };

  const handleEnterSelect = (event: any, newValue: DataItem) => {
    if (event.key === 'Enter') {
      setValue(newValue);
    }
  };

  const handleClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      setIsListVisible(!isListVisible);
    }
  };

  return (
    <div
      className={classNames('dropdown', className, { 'dropdown--list-visible': isListVisible })}
      ref={ref}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      onKeyDown={handleEnter}
    >
      <div className="dropdown__input-box">
        {value.hasOwnProperty('flag') && <Picture imageName={`flag-${value.flag}`} className="dropdown__flag" />}
        <input type="text" name={name} id={name} className="dropdown__field" value={value.value} disabled />
      </div>
      <ul className="dropdown__list" role="menu" tabIndex={0}>
        {data.map((elem) => (
          <li
            className="dropdown__list-elem dropdown__list-elem--selected"
            key={elem.value}
            onClick={() => handleSelect(elem)}
            tabIndex={0}
            role="menuitem"
            onKeyDown={(event) => handleEnterSelect(event, elem)}
          >
            {elem.hasOwnProperty('flag') && <Picture imageName={`flag-${elem.flag}`} className="dropdown__flag" />}
            {elem.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

type Props = {
  name: string;
  data: readonly DataItem[];
  className?: string;
};

export default Dropdown;
