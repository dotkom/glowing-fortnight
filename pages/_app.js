import '../styles/base.scss';
import 'isomorphic-fetch';

import Head from 'next/head';
import React from 'react';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Online, linjeforeningen for informatikk ved NTNU</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/splash/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/splash/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/splash/icons/favicon-16x16.png" sizes="16x16" />
        <link rel="manifest" href="/splash/icons/manifest.json" />
        <link rel="mask-icon" href="/splash/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/splash/icons/favicon.ico" />
        <meta name="msapplication-config" content="/splash/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
