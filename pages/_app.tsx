import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';

import Layout from '../components/Layout';
import { ReduxWrapper } from '../store';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = ReduxWrapper.useWrappedStore(rest);
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </ReduxProvider>
  );
}
