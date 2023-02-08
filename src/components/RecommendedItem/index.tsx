import React from 'react';
import './recommended-item.scss';
import classNames from 'classnames';

import Panel from '../Panel';
import Picture from '../Picture';
import SpecialButton from '../SpecialButton';

// TODO Move Hardcoded data to the props
const RecommendedItem = ({ isOnCartPanel = false, className }: Props) => {
  return (
    <Panel
      className={classNames('recommended-item', className, { 'recommended-item--panel': isOnCartPanel })}
      isYellow
      onPanel={isOnCartPanel}
    >
      <>
        <h2 className="recommended-item__title">Only For Cool Cats...</h2>
        <div className="recommended-item__content">
          <Picture imageName="product3" className="recommended-item__image" />
          <div className="recommended-item__content-box">
            <p className="recommended-item__text">Add the “Catnip” cover to your order and save 5%</p>
            <div className="recommended-item__price-row">
              <p className="recommended-item__price">$122.55</p>
              <p className="recommended-item__price recommended-item__price--old">$129.00</p>
            </div>
            <SpecialButton>Add now</SpecialButton>
          </div>
        </div>
      </>
    </Panel>
  );
};

export default RecommendedItem;

type Props = {
  isOnCartPanel?: boolean;
  className?: string;
};
