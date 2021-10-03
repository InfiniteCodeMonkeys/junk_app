import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
//import * as snippet from "@segment/snippet";

// const {
//   // This write key is associated with https://segment.com/nextjs-example/sources/nextjs.
//   ANALYTICS_WRITE_KEY = process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
//   NODE_ENV = "development",
// } = process.env;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  // renderSnippet() {
  //   const opts = {
  //     apiKey: ANALYTICS_WRITE_KEY, //What the fuck is this? Segment?
  //     // note: the page option only covers SSR tracking.
  //     // Page.js is used to track other events using `window.analytics.page()`
  //     page: true,
  //   };

  //   if (NODE_ENV === "development") {
  //     return snippet.max(opts);
  //   }

  //   return snippet.min(opts);
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Inject the Segment snippet into the <head> of the document  */}
          {/* <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} /> */}

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=ISO-8859-1"
          />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-159312647-2"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'UA-159312647-2');
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
