import styled from '@emotion/styled';
import { Fragment, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../store/selectors';
import Paper from './Paper';
import ShoppingItem from './ShoppingItem';
import ShoppingSummary from './ShoppingSummary';

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

const Items = styled(Paper)(({ theme }) => ({
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

interface Props {
  className?: string;
  onNext: MouseEventHandler;
}

const ShoppingStep = ({ className, onNext }: Props) => {
  const cartItems = useSelector(selectCartItems);

  return (
    <Root className={className}>
      <Title>Shopping cart</Title>
      <Items>
        {cartItems.map((item, index) => (
          <Fragment key={item.productId}>
            <ShoppingItem {...item} />
            {index + 1 !== cartItems.length && <Separator />}
          </Fragment>
        ))}
      </Items>
      <ShoppingSummary onNext={onNext} />
    </Root>
  );
};

export default ShoppingStep;
