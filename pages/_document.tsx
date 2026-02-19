import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="JQsDBF1Wsjzx9NR-hdJGAAuU5SqZOl4Z5AFMtFf2Hww" />
          <link rel="icon" href="/static/logos/almostcode.svg" type="image/svg+xml" />
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
