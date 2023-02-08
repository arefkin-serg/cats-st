import React from 'react';
import classNames from 'classnames';
import './input.scss';

const Input = ({ name, type = 'text', value = '', className }: Props) => {
  return <input className={classNames('input', className)} type={type} name={name} id={name} defaultValue={value} />;
};

type Props = {
  name: string;
  type?: 'email' | 'text' | 'tel';
  value?: string;
  className?: string;
};

export default Input;
