import styled from '@emotion/styled';
import {
  ChangeEvent,
  Fragment,
  MouseEventHandler,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

import { formatCurrency } from '../shared/utils';
import { selectCartItems, selectCartProducts } from '../store/selectors';
import Button from './Button';
import CartItem from './CartItem';
import Paper from './Paper';
import _TextField, { textFieldClasses } from './TextField';

const Root = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  borderRadius: 10,
  padding: theme.spacing(12, 7.5),
}));

const Title = styled('div')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));

const CartItems = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10,
  gap: theme.spacing(4),
}));

const TextField = styled(_TextField)(({ theme }) => ({
  borderColor: theme.palette.background.default,
  backgroundColor: theme.palette.background.default,

  [`& .${textFieldClasses.inputField}`]: {
    backgroundColor: 'transparent',
  },
}));

const ApplyPromoButton = styled(Button)(() => ({
  height: 40,
  marginRight: 3,
}));

const Calculations = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(6),
  marginTop: theme.spacing(2),
  gridTemplateColumns: '1fr auto',
  fontSize: 16,
  color: theme.palette.text.primary,
}));

const Price = styled('span')(() => ({
  textAlign: 'right',
}));

const Separator = styled('div')(({ theme }) => ({
  gridArea: 'separator',
  height: 2,
  backgroundColor: theme.palette.grey.light,
}));

const Total = styled('div')(() => ({
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
}));

interface Props {
  className?: string;
  children?: ReactNode;
  /** @default false */
  showCartItems?: boolean;
}

const CartSummary = ({ className, children, showCartItems }: Props) => {
  const [promoCode, setPromoCode] = useState('');

  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectCartProducts);

  const total = useMemo(
    () => products.reduce((sum, p) => sum + p.price * p.count, 0),
    [products]
  );

  const handlePromoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  return (
    <Root className={className}>
      <Title>Summary</Title>
      {showCartItems && (
        <>
          <Separator />
          <CartItems>
            {cartItems.map((item, index) => (
              <Fragment key={item.productId}>
                <CartItem {...item} compact />
                {index + 1 !== cartItems.length && <Separator />}
              </Fragment>
            ))}
          </CartItems>
          <Separator />
        </>
      )}
      <TextField
        placeholder="Promo code"
        value={promoCode}
        onChange={handlePromoChange}
        icon={<ApplyPromoButton color="grey">Apply</ApplyPromoButton>}
      />
      <Calculations>
        {products.map((product, index) => (
          <Fragment key={product.id}>
            <span>{index === 0 ? 'Subtotal' : ''}</span>
            <Price>{formatCurrency(product.price * product.count)}</Price>
          </Fragment>
        ))}
        <span>Shipping</span>
        <Price>{formatCurrency(0)}</Price>
      </Calculations>
      <Separator />
      <Total>
        <span>TOTAL</span>
        <Price>{formatCurrency(total)}</Price>
      </Total>
      {children}
    </Root>
  );
};

export default CartSummary;
