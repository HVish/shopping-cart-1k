import { RootState } from '../shared/types';
import { productsAdapter } from './adapters';

function notEmpty<T>(item: T | undefined): item is T {
  return Boolean(item);
}

export const selectProduct = (productId: string) => (state: RootState) =>
  productsAdapter.getSelectors().selectById(state.products, productId);

export const selectProducts = (state: RootState) =>
  productsAdapter.getSelectors().selectAll(state.products);

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartProducts = (state: RootState) => {
  return state.cart.items
    .map(item => {
      if (!item) return;
      const product = selectProduct(item.productId)(state);
      if (!product) return;
      return { ...product, count: item.count };
    })
    .filter(notEmpty);
};

export const selectIsProductAddedToCart =
  (productId: string) => (state: RootState) =>
    state.cart.items.some(item => item.productId === productId);

export const selectShippingInfo = (state: RootState) => state.cart.shipping;
