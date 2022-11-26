import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { CartState, RootState, ShippingInfo } from '../shared/types';

const initialState: CartState = {
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
  },

  extraReducers: builder => {
    builder.addCase(
      HYDRATE.toString(),
      (state, action: PayloadAction<RootState>) => {
        return {
          ...state,
          ...action.payload.cart,
        };
      }
    );
  },
});

export const addToCart = cartSlice.actions.addItem;
export const removeFromCart = cartSlice.actions.removeItem;
