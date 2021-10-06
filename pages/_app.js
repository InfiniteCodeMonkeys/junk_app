import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as fbq from "utils/pixel";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import firebase from "utils/firebase";
const CrispWithNoSSR = dynamic(() => import("utils/crisp"), { ssr: false });
import { ThemeProvider } from "utils/theme.js";
import DefaultLayout from "../layouts/default";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Layout = Component.Layout || DefaultLayout;

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      firebase.analytics();
    }
  }, []);

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CrispWithNoSSR />
    </ThemeProvider>
  );
}

export default MyApp;
