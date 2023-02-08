import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from '../../shared/models/cartItem';
import { CouponDetails } from '../../shared/models/couponDetails';
import { initialCartState } from '../../shared/dummy-data/initialCartState';

type AppState = {
  isCartPanelOpened: boolean;
  cart: readonly CartItem[];
  coupons: readonly CouponDetails[];
  shippingCost: number;
};

const initialState: AppState = {
  isCartPanelOpened: false,
  cart: initialCartState,
  coupons: [],
  shippingCost: 1000,
};

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showCartPanel: (state) => {
      return {
        ...state,
        isCartPanelOpened: true,
      };
    },

    closeCartPanel: (state) => {
      return {
        ...state,
        isCartPanelOpened: false,
      };
    },

    updateCart: (state, action: PayloadAction<readonly CartItem[]>) => {
      return {
        ...state,
        cart: action.payload,
      };
    },

    addCoupon: (state, action: PayloadAction<string>) => {
      const DISCOUNT_MAX = 5000;
      return {
        ...state,
        coupons: [...state.coupons, { discountValue: Math.floor(Math.random() * DISCOUNT_MAX), id: action.payload }],
      };
    },

    removeCoupon: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        coupons: state.coupons.filter((c) => c.id !== action.payload),
      };
    },
  },
});

export const { showCartPanel, closeCartPanel, updateCart, addCoupon, removeCoupon } = appReducer.actions;

export default appReducer.reducer;
