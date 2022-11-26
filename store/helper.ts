import { configureStore } from '@reduxjs/toolkit';

import { RootState } from '../shared/types';
import { cartSlice } from './cart';
import { productSlice } from './products';

export const createStore = () => {
  return configureStore<RootState>({
    devTools: true,
    reducer: {
      [productSlice.name]: productSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
    },
  });
};
