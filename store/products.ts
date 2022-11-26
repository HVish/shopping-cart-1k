import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { Product, RootState } from '../shared/types';
import { productsAdapter } from './adapters';

const initialState = productsAdapter.getInitialState();

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async (origin: string = '') => {
    try {
      const getProducts = await fetch(`${origin}/api/products`);
      return (await getProducts.json()) as Product[];
    } catch (error) {
      console.log(error);
    }
    return [];
  }
);

export const productSlice = createSlice({
  name: 'products',

  initialState,

  reducers: {},

  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<RootState>) => {
      return {
        ...state,
        ...action.payload.products,
      };
    },
    [fetchProducts.pending.toString()]: state => {
      productsAdapter.setAll(state, []);
    },
    [fetchProducts.fulfilled.toString()]: (
      state,
      action: PayloadAction<Product[]>
    ) => {
      productsAdapter.addMany(state, action.payload);
    },
  },
});
