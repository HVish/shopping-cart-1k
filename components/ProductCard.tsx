import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from '../shared/types';
import { formatCurrency } from '../shared/utils';
import { addToCart, removeFromCart } from '../store/cart';
import { selectIsProductAddedToCart } from '../store/selectors';
import Button from './Button';
import Paper from './Paper';

const Root = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  gap: theme.spacing(2),
  width: 260,
  height: 420,
  padding: theme.spacing(4),
}));

const Img = styled('img')(() => ({
  alignSelf: 'center',
  height: 200,
}));

const Title = styled('div')(() => ({
  fontWeight: 'bold',
  fontSize: 16,
}));

const Label = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
  marginRight: theme.spacing(2),
  fontWeight: 'bold',
  textDecoration: 'none',
}));

const Code = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: 'uppercase',
}));

interface Props extends Product {
  className?: string;
}

const ProductCard = ({ className, id, code, image, price, title }: Props) => {
  const dispatch = useDispatch();
  const isProductAddedToCart = useSelector(selectIsProductAddedToCart(id));

  const addProductToCart = () => dispatch(addToCart({ productId: id }));

  const removeProductFromCart = () =>
    dispatch(removeFromCart({ productId: id }));

  return (
    <Root className={className}>
      <Img src={image} />
      <Title>{title}</Title>
      <div>
        <Label>Code:</Label> <Code>{code}</Code>
      </div>
      <div>
        <Label>Price:</Label> <span>{formatCurrency(price)}</span>
      </div>

      {isProductAddedToCart ? (
        <Button color="error" onClick={removeProductFromCart}>
          Remove from cart
        </Button>
      ) : (
        <Button onClick={addProductToCart}>Add to cart</Button>
      )}
    </Root>
  );
};
export default ProductCard;
