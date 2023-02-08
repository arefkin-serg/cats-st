import React from 'react';
import './payment.scss';

import Picture from '../Picture';

const Payment = () => {
  const data = [
    { image: 'payment-card', name: 'card' },
    { image: 'payment-paypal', name: 'paypal' },
  ];

  return (
    <ul className="payment">
      {data.map((method) => (
        <li className="payment__method" key={method.name}>
          <Picture imageName={method.image} className="payment__method-image" />
        </li>
      ))}
    </ul>
  );
};

export default Payment;
