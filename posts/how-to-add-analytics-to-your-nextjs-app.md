---
layout: post
author: [Helmut]
tags:
  - Analytics
  - Tools
title: "How to Add Analytics to Your NextJS App"
date: "2021-02-10"
image: 'add-analytics.jpg'
image_credit: mjessier
---

During the development of your app or landing page at one time or another you will have the desire know where your traffic is coming from. You have different options when it comes to  analytics providers, however, we know that the leader for analytics is Google and that is what we will be implementing on this short tutorial. In order for you to be able to successfully track your users we need to make sure two items are taken care of. 

Note: If you already have a google Analytics account and also a custom Document file please skip the two links below.

Google Analytics account:

You just have a tracking ID to implement google analytics and for that you can follow this tutorial: [https://support.google.com/analytics/answer/1008015?hl=en](https://support.google.com/analytics/answer/1008015?hl=en)

Custom Document File for NextJS:

To create a custom Document file follow this steps: [https://nextjs.org/docs/advanced-features/custom-document](https://nextjs.org/docs/advanced-features/custom-document)

Once you have created a custom Google Analytics account you look for your tracking Id within the documentation, you may also be given a snippet like the one below. Go ahead and replace "YOUR_TRACKING_ID" with the one provided by Google.

```jsx
<script async src="https://www.googletagmanager.com/gtag/js?id=${YOUR_TRACKING_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', ${YOUR_TRACKING_ID});
</script>
```

Your custom Document file should look like the one below, if you have been working on it for a while it may be slightly different but the structure should be the same.

```jsx
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
        </body>
      </Html>)
  }
}

export default MyDocument
```

Finally your custom document with Analytics should look like something below:

```jsx
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
          <script async src="https://www.googletagmanager.com/gtag/js?id=${YOUR_TRACKING_ID}"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${YOUR_TRACKING_ID});
          </script>
        </body>
      </Html>)
  }
}

export default MyDocument
```

That is all there is to it, once you have both pieces of code in place you should be able to start seeing traffic on your site.
