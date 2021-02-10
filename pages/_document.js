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

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-318590-1"></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-318590-1');`
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument