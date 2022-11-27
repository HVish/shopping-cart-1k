import styled from '@emotion/styled';
import { MouseEventHandler, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setPaymentInfo } from '../store/cart';
import Button from './Button';
import _CartSummary from './CartSummary';
import PaymentInfo, { PaymentInfoInstance } from './PaymentInfo';

const Root = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: '"title title" "billing summary" "shipping summary"',
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

const CartSummary = styled(_CartSummary)(() => ({
  gridArea: 'summary',
}));

const Actions = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  justifyContent: 'flex-end',
}));

interface Props {
  className?: string;
  onBack: MouseEventHandler;
  onNext: MouseEventHandler;
}

const PaymentStep = ({ className, onBack, onNext }: Props) => {
  const dispatch = useDispatch();
  const paymentInfoRef = useRef<PaymentInfoInstance>(null);

  const handleNext: MouseEventHandler = e => {
    const paymentInfo = paymentInfoRef.current;
    if (!paymentInfo) return;
    dispatch(setPaymentInfo(paymentInfo.getValue()));
    onNext(e);
  };

  return (
    <Root className={className}>
      <Title>Payment info</Title>
      <PaymentInfo>
        <Actions>
          <Button color="grey" variant="outlined" onClick={onBack}>
            Back to shipping
          </Button>
          <Button onClick={handleNext}>Checkout</Button>
        </Actions>
      </PaymentInfo>
      <CartSummary showCartItems />
    </Root>
  );
};

export default PaymentStep;
