import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CheckIcon from '../icons/CheckIcon';
import { clearCart } from '../store/cart';
import Button from './Button';
import Paper from './Paper';

const Root = styled(Paper)(({ theme }) => ({
  display: 'grid',
  placeContent: 'center',
  justifyItems: 'center',
  gap: theme.spacing(8),
  borderRadius: 6,
  padding: theme.spacing(8),
}));

const DoneCircle = styled('div')(({ theme }) => ({
  borderRadius: '50%',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
  width: 176,
  height: 176,
  display: 'grid',
  placeContent: 'center',
}));

const Heading = styled('div')(({ theme }) => ({
  fontSize: 32,
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));

const Message = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: 340,
  lineHeight: 1.75,
  textAlign: 'center',
}));

const BackButton = styled(Button)(() => ({
  height: 55,
}));

interface Props {
  className?: string;
}

const FinishStep = ({ className }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleBackToShopping = () => {
    router.push('/');
  };

  useEffect(
    function clearCartItems() {
      dispatch(clearCart());
    },
    [dispatch]
  );

  return (
    <Root className={className}>
      <DoneCircle>
        <CheckIcon size={76} />
      </DoneCircle>
      <Heading>Successfully ordered!</Heading>
      <Message>
        Thank you for your order, you should receive an e-mail confirmation very
        soon :)
      </Message>
      <BackButton onClick={handleBackToShopping}>Back to shopping</BackButton>
    </Root>
  );
};

export default FinishStep;
