import React from "react";
import "../styles/globals.css";
import firebase from "utils/firebase";
import { ThemeProvider } from "utils/theme.js";
import DefaultLayout from "../layouts/default";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  if (typeof window != undefined) {
    firebase.analytics();
  }
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
