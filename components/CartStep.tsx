import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { Fragment, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../store/selectors';
import Button from './Button';
import CartItem from './CartItem';
import _CartSummary from './CartSummary';
import Paper from './Paper';

const Root = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: '"title title" "items summary"',
  gridTemplateColumns: '3.5fr 2fr',
  alignItems: 'flex-start',
  gap: theme.spacing(4.5),
}));

const Title = styled('div')(({ theme }) => ({
  gridArea: 'title',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  fontSize: 16,
}));

const CartItems = styled(Paper)(({ theme }) => ({
  gridArea: 'items',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10,
  gap: theme.spacing(4),
  padding: theme.spacing(7.5, 12),
}));

const Separator = styled('div')(({ theme }) => ({
  gridArea: 'separator',
  height: 2,
  marginLeft: 160,
  backgroundColor: theme.palette.grey.light,
}));

const CartSummary = styled(_CartSummary)(() => ({
  gridArea: 'summary',
}));

interface Props {
  className?: string;
  onNext: MouseEventHandler;
}

const CartStep = ({ className, onNext }: Props) => {
  const router = useRouter();
  const cartItems = useSelector(selectCartItems);

  const goToProducts = () => {
    router.push('/');
  };

  return (
    <Root className={className}>
      <Title>Shopping cart</Title>
      <CartItems>
        {cartItems.map((item, index) => (
          <Fragment key={item.productId}>
            <CartItem {...item} />
            {index + 1 !== cartItems.length && <Separator />}
          </Fragment>
        ))}
      </CartItems>
      <CartSummary>
        <Button onClick={onNext}>Checkout</Button>
        <Button color="grey" variant="outlined" onClick={goToProducts}>
          Back to shopping
        </Button>
      </CartSummary>
    </Root>
  );
};

export default CartStep;
