import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Stepper from '../components/Stepper';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import { selectCartItems } from '../store/selectors';

const BackToShopping = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
}));

const Cart = () => {
  const [activeStep, setActiveStep] = useState(0);

  const cartItems = useSelector(selectCartItems);

  return (
    <>
      <BackToShopping href="/">
        <ChevronLeftIcon size={24} />
        Back to shopping
      </BackToShopping>
      <Stepper
        activeStepIndex={activeStep}
        steps={['Cart', 'Shipping', 'Payment', 'Finish']}
        onSelect={step => setActiveStep(step)}
      />
    </>
  );
};

export default Cart;
