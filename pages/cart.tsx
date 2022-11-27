import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';

import ShoppingStep from '../components/ShoppingStep';
import _Stepper from '../components/Stepper';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';

enum Step {
  CART,
  Shipping,
  Payment,
  Finish,
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

  const goToShippingStep = () => setActiveStep(Step.Shipping);

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
      {activeStep === Step.CART && <ShoppingStep onNext={goToShippingStep} />}
    </>
  );
};

export default Cart;
