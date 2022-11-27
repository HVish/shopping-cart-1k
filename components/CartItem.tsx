import styled from '@emotion/styled';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { selectProduct } from '../store/selectors';
import { prefixedClassNames } from '../styles/utils';
import _CartItemCount from './CartItemCount';

export const cartItemClasses = prefixedClassNames('CartItem', [
  'root',
  'compact',
]);

const Root = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas:
    '"product-image product-title" "product-image product-code" "product-image product-count"',
  gridTemplateColumns: '200px 1fr',
  gap: theme.spacing(3),

  [`&.${cartItemClasses.compact}`]: {
    gridTemplateAreas:
      '"product-image product-title" "product-image product-code" "product-count product-count"',
    gridTemplateColumns: '150px 1fr',
    gridTemplateRows: 'auto 1fr auto',
  },
}));

const Title = styled('div')(({ theme }) => ({
  gridArea: 'product-title',
  fontSize: 24,
  color: theme.palette.text.primary,
}));

const Image = styled('img')(() => ({
  gridArea: 'product-image',
  justifySelf: 'center',
  height: 200,
}));

const Code = styled('div')(({ theme }) => ({
  gridArea: 'product-code',
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

const CartItemCount = styled(_CartItemCount)(() => ({
  gridArea: 'product-count',
}));

interface Props {
  className?: string;
  /** @default false */
  compact?: boolean;
  count: number;
  productId: string;
}

const CartItem = ({ className, compact = false, count, productId }: Props) => {
  const product = useSelector(selectProduct(productId));
  if (!product) return null;
  return (
    <Root
      className={clsx(className, cartItemClasses.root, {
        [cartItemClasses.compact]: compact,
      })}
    >
      <Image src={product.image} alt={`${product.title} image`} />
      <Title>{product.title}</Title>
      <Code>Code: {product.code}</Code>
      <CartItemCount productId={product.id} count={count} />
    </Root>
  );
};

export default CartItem;
