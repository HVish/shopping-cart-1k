import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartState, PaymentInfo, ShippingInfo } from '../shared/types';

const initialState: CartState = {
  payment: null,
  shipping: null,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    addItem(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload;
      const found = state.items.find(i => i.productId === productId);
      if (found) {
        found.count++;
      } else {
        state.items.push({ productId, count: 1 });
      }
    },
    removeItem(
      state,
      action: PayloadAction<{
        productId: string;
        /** @default 1 */
        count?: number;
      }>
    ) {
      const { productId, count = 1 } = action.payload;
      const found = state.items.find(i => i.productId === productId);
      if (!found) return;
      found.count -= count;
      if (found.count <= 0) {
        state.items = state.items.filter(item => item.productId !== productId);
      }
    },
    setShippingInfo(state, action: PayloadAction<ShippingInfo>) {
      state.shipping = action.payload;
    },
    setPaymentInfo(state, action: PayloadAction<PaymentInfo>) {
      state.payment = action.payload;
    },
  },
});

export const addToCart = cartSlice.actions.addItem;
export const removeFromCart = cartSlice.actions.removeItem;

export const setShippingInfo = cartSlice.actions.setShippingInfo;
export const setPaymentInfo = cartSlice.actions.setPaymentInfo;
