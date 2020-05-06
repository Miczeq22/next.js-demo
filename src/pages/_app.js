import React from 'react';
import NextApp from 'next/app';
import { AppProvider } from '../providers/app.provider';

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
        <AppProvider>
          <Component {...pageProps} key={router.route} />
        </AppProvider>
      </>
    );
  }
}
