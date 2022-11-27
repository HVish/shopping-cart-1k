import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';

import CartStep from '../components/CartStep';
import PaymentStep from '../components/PaymentStep';
import ShippingStep from '../components/ShippingStep';
import _Stepper from '../components/Stepper';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';

enum Step {
  CART,
  SHIPPING,
  PAYMENT,
  FINISH,
}

const BackToShopping = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  gap: theme.spacing(2),
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

const Stepper = styled(_Stepper)(({ theme }) => ({
  margin: theme.spacing(8, 0),
}));

const Cart = () => {
  const [activeStep, setActiveStep] = useState(Step.CART);

  const goToCartStep = () => setActiveStep(Step.CART);
  const goToShippingStep = () => setActiveStep(Step.SHIPPING);
  const goToPaymentStep = () => setActiveStep(Step.PAYMENT);
  const goToFinishStep = () => setActiveStep(Step.FINISH);

  return (
    <>
      <BackToShopping href="/">
        <ChevronLeftIcon size={16} />
        <span>Back to shopping</span>
      </BackToShopping>
      <Stepper
        activeStepIndex={activeStep}
        steps={['Cart', 'Shipping', 'Payment', 'Finish']}
        onSelect={step => setActiveStep(step)}
      />
      {activeStep === Step.CART && <CartStep onNext={goToShippingStep} />}
      {activeStep === Step.SHIPPING && (
        <ShippingStep onNext={goToPaymentStep} onBack={goToCartStep} />
      )}
      {activeStep === Step.PAYMENT && (
        <PaymentStep onNext={goToFinishStep} onBack={goToShippingStep} />
      )}
    </>
  );
};

export default Cart;
