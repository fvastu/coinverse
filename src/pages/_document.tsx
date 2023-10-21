/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <title>Coinverse - Master your money</title>
          <meta
            name="description"
            content="Take control of your finances effortlessly with Coinverse. Simplify expense management, visualize insights, and conquer your goals. Sign up now to unlock your financial potential!"
          />
          <meta
            name="keywords"
            content="Coinverse, finance, expense management, visualization, financial goals"
          />
          <meta name="author" content="Francesco Vasturzo" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="canonical" href="https://coinverse.netlify.app/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
