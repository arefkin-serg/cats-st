import React from 'react';
import classNames from 'classnames';

const Picture = ({ imageName, className, altText = '' }: Props) => {
  return (
    <picture>
      <source srcSet={`images/${imageName}@1x.webp 1x, images/${imageName}@2x.webp 2x`} type="image/webp" />
      <img
        src={`images/${imageName}@1x.png`}
        srcSet={`images/${imageName}@2x.png 2x`}
        alt={altText}
        className={classNames(className)}
      />
    </picture>
  );
};

type Props = {
  imageName: string;
  className?: string;
  altText?: string;
};

export default Picture;
