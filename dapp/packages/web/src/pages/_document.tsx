import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import GlobalHead from 'components/helpers/GlobalHead';
export default class AppDocument extends Document {
  static getInitialProps(ctx: any) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <GlobalHead />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
