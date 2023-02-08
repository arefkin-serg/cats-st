import React from 'react';
import './checkout-page.scss';

import Header from '../../components/Header';
import Group from '../../components/Group';
import TextInput from '../../components/TextInput';
import PhoneInput from '../../components/PhoneInput';
import Textarea from '../../components/Textarea';
import RadioButton from '../../components/RadioButton';
import RecommendedItem from '../../components/RecommendedItem';
import Cart from '../../components/Cart';
import Panel from '../../components/Panel';
import SecuredEncrypted from '../../components/SecuredEncrypted';
import Payment from '../../components/Payment';
import CouponInput from '../../components/CouponInput';
import CartTotal from '../../components/CartTotal';
import DropdownCountry from '../../components/DropdownCountry';

import { formatPrice } from '../../shared/utils/formatPrice';

const CheckoutPage = () => {
  const countryData = [{ value: 'Australia' }, { value: 'New Zealand' }];

  // TODO Move it to fake data
  const shippingData = [
    { value: 'Free Shipping', cost: 0, checked: false },
    { value: 'Standard Shipping', cost: 1000, checked: false },
    { value: 'Express Shipping', cost: 2530, checked: false },
  ];

  return (
    <main className="checkout-page">
      <Header />
      <div className="container">
        <div className="checkout-page__form">
          <div className="checkout-page__form-content">
            <Group title="Your Details">
              <>
                <TextInput
                  name="email"
                  type="email"
                  labelText="your email"
                  value="trevor@test.com.au"
                  className="checkout-page__form-elem"
                />
                <div className="checkout-page__form-row checkout-page__form-row--two-cols">
                  <PhoneInput name="phone" value="0489878399" className="checkout-page__form-elem" />
                  <p className="checkout-page__form-text checkout-page__form-elem">
                    Your phone number is required for delivery&nbsp;& shipping updates.
                  </p>
                </div>
                <div className="checkout-page__form-row checkout-page__form-row--two-cols">
                  <TextInput
                    name="first-name"
                    type="text"
                    labelText="first name"
                    value="Trevor"
                    className="checkout-page__form-elem"
                  />
                  <TextInput
                    name="last-name"
                    type="text"
                    labelText="last name"
                    value="Samaali"
                    className="checkout-page__form-elem"
                  />
                </div>
              </>
            </Group>
            <Group title="Delivery Details" className="group--delivery">
              <>
                <div className="checkout-page__form-row checkout-page__form-row--two-cols checkout-page__form-row--country-dropdown">
                  <DropdownCountry data={countryData} name="country" labelText="country" />
                </div>
                <div className="checkout-page__form-row checkout-page__form-row--address">
                  <Textarea
                    name="address"
                    labelText="delivery address"
                    value="Unit 56, 20 Campbell Parade, Bondi Beach, Whatever unit block, NSW, 2026 goes over 2 lines if it’s long address"
                  />
                </div>
                <div className="checkout-page__shipping-block">
                  {shippingData.map((radio) => (
                    <RadioButton
                      key={radio.value}
                      name="shipping"
                      labelText={radio.value}
                      cost={formatPrice(radio.cost)}
                    />
                  ))}
                  <div className="checkout-page__shipping-action">
                    <button className="action-button" type="button">
                      about shipping
                    </button>
                  </div>
                </div>
              </>
            </Group>
            <Group title="Payment Details" className="group--payment">
              <Payment />
            </Group>
          </div>
          <Group title="Your order" className="checkout-page__order-group">
            <>
              <Panel>
                <>
                  <Cart />
                  <CouponInput />
                  <CartTotal />
                </>
              </Panel>
              <button className="button button--primary checkout-page__submit" type="button">
                Pay now
              </button>
              <RecommendedItem />
            </>
          </Group>
        </div>
        <SecuredEncrypted />
      </div>
    </main>
  );
};

export default CheckoutPage;
