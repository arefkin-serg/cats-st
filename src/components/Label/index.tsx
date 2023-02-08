import React from 'react';
import classNames from 'classnames';
import './label.scss';

const Label = ({ forInputId, text, className, children }: Props) => {
  return (
    <label className={classNames('label', className)} htmlFor={forInputId}>
      {text}
      {children && <span className="label__child">{children}</span>}
    </label>
  );
};

type Props = {
  forInputId: string;
  text: string;
  className?: string;
  children?: JSX.Element;
};

export default Label;
