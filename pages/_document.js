import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/plugins.js"></script>
          <script src="/assets/js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument