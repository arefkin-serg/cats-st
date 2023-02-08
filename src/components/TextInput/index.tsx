import React from 'react';
import classNames from 'classnames';
import './text-input.scss';
import Label from '../Label';
import Input from '../Input';

const TextInput = ({ name, type = 'text', labelText, value = '', className }: Props) => {
  return (
    <div className={classNames('text-input', className)}>
      <Input className="text-input__field" type={type} name={name} value={value} />
      <Label text={labelText} className="text-input__label" forInputId={name} />
    </div>
  );
};

type Props = {
  name: string;
  type?: 'email' | 'text' | 'tel';
  labelText: string;
  value?: string;
  className?: string;
};

export default TextInput;
