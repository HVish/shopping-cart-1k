import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { CartState, RootState } from '../shared/types';

const initialState: CartState = {
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
    removeItem(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload;
      const found = state.items.find(i => i.productId === productId);
      if (!found) return;
      found.count--;
      if (!found.count) {
        state.items = state.items.filter(item => item.productId !== productId);
      }
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<RootState>) => {
      return {
        ...state,
        ...action.payload.cart,
      };
    },
  },
});

export const addToCart = cartSlice.actions.addItem;
export const removeFromCart = cartSlice.actions.removeItem;
