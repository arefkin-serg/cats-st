import React from 'react';
import './secured-encrypted.scss';

const SecuredEncrypted = () => {
  return (
    <section className="secured-encrypted">
      <h2 className="secured-encrypted__title">Secured & Encrypted Checkout</h2>
      <div className="secured-encrypted__grid">
        <img src="images/secured.svg" alt="Secured" className="secured-encrypted__image" />
        <img src="images/encrypted.svg" alt="Encrypted" className="secured-encrypted__image" />
      </div>
    </section>
  );
};

export default SecuredEncrypted;
