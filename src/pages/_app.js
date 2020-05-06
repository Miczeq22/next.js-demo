import React from 'react';
import NextApp from 'next/app';
import { AppProvider } from '../providers/app.provider';
import Head from 'next/head';

import '../../.css/antd.less';

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>Next.js | Demo App</title>
        </Head>
        <AppProvider>
          <Component {...pageProps} key={router.route} />
        </AppProvider>
      </>
    );
  }
}
