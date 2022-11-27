import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import {
  ChangeEvent,
  Fragment,
  MouseEventHandler,
  useMemo,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

import { formatCurrency } from '../shared/utils';
import { selectCartProducts } from '../store/selectors';
import Button from './Button';
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
  onNext: MouseEventHandler;
}

const ShoppingSummary = ({ className, onNext }: Props) => {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState('');
  const products = useSelector(selectCartProducts);

  const total = useMemo(
    () => products.reduce((sum, p) => sum + p.price * p.count, 0),
    [products]
  );

  const handlePromoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const handleBackToShopping = () => {
    router.push('/');
  };

  return (
    <Root className={className}>
      <Title>Summary</Title>
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
      <Button onClick={onNext}>Checkout</Button>
      <Button color="grey" variant="outlined" onClick={handleBackToShopping}>
        Back to shopping
      </Button>
    </Root>
  );
};

export default ShoppingSummary;
