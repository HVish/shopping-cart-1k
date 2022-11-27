import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { selectProduct } from '../store/selectors';

const Root = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas:
    '"product-image product-title" "product-image product-code" "product-image product-count"',
  gridTemplateColumns: '200px 1fr',
  gap: theme.spacing(3),
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

interface Props {
  className?: string;
  productId: string;
  count: number;
}

const ShoppingItem = ({ className, productId, count }: Props) => {
  const product = useSelector(selectProduct(productId));
  if (!product) return null;
  return (
    <Root className={className}>
      <Image src={product.image} alt={`${product.title} image`} />
      <Title>{product.title}</Title>
      <Code>Code: {product.code}</Code>
    </Root>
  );
};

export default ShoppingItem;
