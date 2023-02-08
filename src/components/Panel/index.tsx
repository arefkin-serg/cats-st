import React from 'react';
import './panel.scss';
import classNames from 'classnames';

const Panel = ({ className = '', children, isYellow = false, onPanel = false }: Props) => {
  return (
    <div className={classNames('panel', className, { 'panel--yellow': isYellow, 'panel--index': onPanel })}>
      {children}
    </div>
  );
};

type Props = {
  children: JSX.Element;
  className?: string;
  isYellow?: boolean;
  onPanel?: boolean;
};

export default Panel;
