import styled from '@emotion/styled';
import { MouseEventHandler, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setShippingInfo } from '../store/cart';
import _BillingInfo, { BillingInfoInstance } from './BillingInfo';
import Button from './Button';
import _CartSummary from './CartSummary';

const Root = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: '"title title" "billing summary"',
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

const BillingInfo = styled(_BillingInfo)(() => ({
  gridArea: 'billing',
}));

const CartSummary = styled(_CartSummary)(() => ({
  gridArea: 'summary',
}));

interface Props {
  className?: string;
  onBack: MouseEventHandler;
  onNext: MouseEventHandler;
}

const ShippingStep = ({ className, onBack, onNext }: Props) => {
  const dispatch = useDispatch();
  const billingInfoRef = useRef<BillingInfoInstance>(null);

  const handleNext: MouseEventHandler = e => {
    const billingInfo = billingInfoRef.current;
    if (!billingInfo) return;
    dispatch(setShippingInfo(billingInfo.getValue()));
    onNext(e);
  };

  return (
    <Root className={className}>
      <Title>Billing address</Title>
      <BillingInfo ref={billingInfoRef} />
      <CartSummary showCartItems>
        <Button onClick={handleNext}>Payment</Button>
        <Button color="grey" variant="outlined" onClick={onBack}>
          Back to cart
        </Button>
      </CartSummary>
    </Root>
  );
};

export default ShippingStep;
