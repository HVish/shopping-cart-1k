import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import ProductCard from '../components/ProductCard';
import { ReduxWrapper } from '../store';
import { initProducts } from '../store/products';
import { selectProducts } from '../store/selectors';
import { products } from './api/mock-data';

const Root = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  justifyItems: 'center',
}));

const Products = () => {
  const products = useSelector(selectProducts);

  return (
    <Root>
      {products.map(p => (
        <ProductCard key={p.id} {...p} />
      ))}
    </Root>
  );
};

export const getStaticProps = ReduxWrapper.getStaticProps(store => async () => {
  store.dispatch(initProducts(products));
  return { props: {} };
});

export default Products;
