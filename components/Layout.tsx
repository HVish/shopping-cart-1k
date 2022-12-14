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
}));

const Main = styled('main')(({ theme }) => ({
  flex: 1,
  overflow: 'auto',
  width: '100%',
  maxWidth: theme.variables.mainContentWidth,
  margin: 'auto',
  padding: theme.spacing(4),
  paddingTop: theme.variables.navHeight + 16,
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
