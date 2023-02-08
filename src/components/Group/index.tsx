import React from 'react';
import classnames from 'classnames';
import './group.scss';

const Group = ({ title, children, className }: Props) => {
  return (
    <section className={classnames('group', className)}>
      <h2 className="group__title">{title}</h2>
      {children}
    </section>
  );
};

type Props = {
  title: string;
  children: JSX.Element;
  className?: string;
};

export default Group;
