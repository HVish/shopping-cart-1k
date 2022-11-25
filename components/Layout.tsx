import styled from '@emotion/styled';
import { ReactNode } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  overflow: 'auto',
  minHeight: '100vh',
  padding: theme.spacing(0, 4),
  maxWidth: theme.variables.mainContentWidth,
  margin: 'auto',
}));

const Main = styled('main')(({ theme }) => ({
  flex: 1,
  overflow: 'auto',
  padding: theme.spacing(4, 0),
}));

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Root>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Root>
  );
};

export default Layout;
