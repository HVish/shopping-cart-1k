import { RootState } from '../shared/types';
import { productsAdapter } from './adapters';

export const selectProducts = (state: RootState) =>
  productsAdapter.getSelectors().selectAll(state.products);

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectIsProductAddedToCart =
  (productId: string) => (state: RootState) =>
    state.cart.items.some(item => item.productId === productId);
