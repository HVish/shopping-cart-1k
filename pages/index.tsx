import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import ProductCard from '../components/ProductCard';
import { ReduxWrapper } from '../store';
import { fetchProducts } from '../store/products';
import { selectProducts } from '../store/selectors';

const Root = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  maxWidth: theme.variables.mainContentWidth,
  margin: 'auto',
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

export const getServerSideProps = ReduxWrapper.getServerSideProps(
  store =>
    async ({ req }) => {
      const protocol = req.headers['x-forwarded-proto'] || 'http';
      const origin = req ? `${protocol}://${req.headers.host}` : '';
      await store.dispatch(fetchProducts(origin));
      return {
        props: {},
      };
    }
);

export default Products;
