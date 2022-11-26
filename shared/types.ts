import { EntityState } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  title: string;
  code: string;
  price: string;
  image: string;
}

export interface CartItem {
  productId: string;
  count: number;
}

export interface CartState {
  items: CartItem[];
}

export type ProductsState = EntityState<Product>;

export interface RootState {
  products: ProductsState;
  cart: CartState;
}
