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
  zipCode: string;
  address: string;
  country: string;
}

export enum PaymentMode {
  CASH = 'cash',
  CREDIT_CARD = 'credit_card',
}
export interface PaymentInfo {
  mode: PaymentMode;
  cardNumber: string;
  name: string;
  expiry: string;
  securityCode: string;
}

export interface CartState {
  payment: PaymentInfo | null;
  shipping: ShippingInfo | null;
  items: CartItem[];
}

export type ProductsState = EntityState<Product>;

export interface RootState {
  products: ProductsState;
  cart: CartState;
}
