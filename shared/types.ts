import { EntityState } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  title: string;
  code: string;
  price: number;
  image: string;
}

export interface CartItem {
  productId: string;
  count: number;
}

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  zipCode: number;
  address: string;
  country: string;
}

export interface CartState {
  shipping: ShippingInfo | null;
  items: CartItem[];
}

export type ProductsState = EntityState<Product>;

export interface RootState {
  products: ProductsState;
  cart: CartState;
}
