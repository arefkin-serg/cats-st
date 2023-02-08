import React from 'react';
import classNames from 'classnames';
import './textarea.scss';
import Label from '../Label';

const Textarea = ({ name, value, labelText, className }: Props) => {
  return (
    <div className={classNames('textarea', className)}>
      <textarea name={name} id={name} className="textarea__field" defaultValue={value} />
      <Label forInputId={name} text={labelText}>
        <button className="textarea__action-change action-button" type="button">
          change
        </button>
      </Label>
    </div>
  );
};

type Props = {
  name: string;
  value?: string;
  labelText: string;
  className?: string;
};

export default Textarea;
