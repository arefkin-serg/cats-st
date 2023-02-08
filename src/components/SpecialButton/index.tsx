import React from 'react';
import classNames from 'classnames';
import './special-button.scss';

const SpecialButton = ({ children, className, type = 'button', onClick }: Props) => {
  const handleClick = (e: React.SyntheticEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classNames('special-button', className)} type={type} onClick={handleClick}>
      <span className="special-button__text">{children}</span>
      <svg className="special-button__decor" viewBox="0 0 17 38.6" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.00170898 37.5949H1.37061C1.85188 37.5949 2.31127 37.3044 2.61024 36.8069L2.60659 36.8035L14.8861 19.2925C15.2106 18.8316 15.1923 18.2339 14.8423 17.7898L2.03782 1.561C1.81542 1.20703 1.48364 1 1.12999 1H0.00170898V37.5949Z"
          className="special-button__decor-background"
        />
        <path
          d="M1.60035 38.5949H0.00170898V36.5949H1.60035C1.64162 36.5949 1.74297 36.5749 1.85749 36.4577L13.6884 19.5863L13.6895 19.5848L14.2971 18.7183L14.2982 18.7167C14.3657 18.6209 14.3656 18.5089 14.2867 18.4088L1.44932 2.13836L1.42083 2.09302C1.38468 2.03549 1.35323 2.00937 1.33951 2H0.00170898V0H1.35973C2.10696 0 2.7142 0.424609 3.08141 0.978055L15.8571 17.1704C16.4778 17.958 16.5149 19.041 15.9346 19.8666L13.6895 19.5848L13.6884 19.5863L15.9334 19.8682L3.71483 37.2925L3.69713 37.3219C3.2592 38.0507 2.50689 38.5949 1.60035 38.5949Z"
          className="special-button__decor-border"
        />
      </svg>
    </button>
  );
};

type Props = {
  children: string;
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
};

export default SpecialButton;
