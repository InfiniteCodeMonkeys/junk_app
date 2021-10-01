import React, { useEffect } from "react";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import firebase from "utils/firebase";
const CrispWithNoSSR = dynamic(() => import("utils/crisp"), { ssr: false });
import { ThemeProvider } from "utils/theme.js";
import DefaultLayout from "../layouts/default";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      firebase.analytics();
    }
  }, []);
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CrispWithNoSSR />
    </ThemeProvider>
  );
}

export default MyApp;
