import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from '@apollo/react-hooks';
import config from 'config';
import LayoutApp from 'layouts/new/App';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { UseWalletProvider } from 'use-wallet';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'assets/scss/main.scss';

import { useApollo } from 'lib/apollo/client';

type NextPageWithLayout = NextPage;

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const router = useRouter();

  React.useEffect(() => {
    const routeChangeStart = () => {
      NProgress.start();
    };
    const routeChangeComplete = () => {
      NProgress.done();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
    const routeChangeError = (e: Error) => {
      console.error('routeChangeError', e);
      NProgress.done();
    };
    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeComplete);
    router.events.on('routeChangeError', routeChangeError);
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      router.events.off('routeChangeComplete', routeChangeComplete);
      router.events.off('routeChangeError', routeChangeError);
    };
  }, [router]);

  const configWallet = {
    injected: {
      chainId: [config.chainId],
    },
  };

  return (
    <ApolloProvider client={apolloClient}>
      <UseWalletProvider connectors={configWallet}>
        <LayoutApp>
          <Component {...pageProps} />
        </LayoutApp>
      </UseWalletProvider>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </ApolloProvider>
  );
}
