import { createEntityAdapter } from '@reduxjs/toolkit';

import { Product } from '../shared/types';

export const productsAdapter = createEntityAdapter<Product>({
  selectId: product => product.id,
});
