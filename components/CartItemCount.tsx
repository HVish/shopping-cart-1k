import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import AddCircleIcon from '../icons/AddCircleIcon';
import CancelCircleIcon from '../icons/CancelCircleIcon';
import RemoveCircleIcon from '../icons/RemoveCircleIcon';
import { formatCurrency } from '../shared/utils';
import { addToCart, removeFromCart } from '../store/cart';
import { selectProduct } from '../store/selectors';

const Root = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.grey.main}`,
  padding: theme.spacing(0, 3),
  color: theme.palette.text.primary,
  borderRadius: 100,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const AddRemoveControl = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: 80,
}));

const RoundButton = styled('button')(() => ({
  border: 'none',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',

  '&:not(:disabled)': {
    cursor: 'pointer',
  },

  '&:disabled': {
    opacity: 0.75,
  },
}));

const Count = styled('span')(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

interface Props {
  className?: string;
  count: number;
  productId: string;
}

const CartItemCount = ({ className, count, productId }: Props) => {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct(productId));

  const handleAddMore = () => dispatch(addToCart({ productId }));
  const handleRemove = () => dispatch(removeFromCart({ productId }));
  const handleRemoveAll = () => dispatch(removeFromCart({ productId, count }));

  if (!product) return null;

  return (
    <Root className={className}>
      <AddRemoveControl>
        <RoundButton disabled={count < 2} onClick={handleRemove}>
          <RemoveCircleIcon size={20} />
        </RoundButton>
        <Count>{count}</Count>
        <RoundButton onClick={handleAddMore}>
          <AddCircleIcon size={20} />
        </RoundButton>
      </AddRemoveControl>
      <div>{formatCurrency(count * product.price)}</div>
      <RoundButton onClick={handleRemoveAll}>
        <CancelCircleIcon size={20} />
      </RoundButton>
    </Root>
  );
};

export default CartItemCount;
