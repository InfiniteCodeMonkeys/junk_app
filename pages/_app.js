import "../styles/globals.css";

import { ThemeProvider } from "utils/theme.js";
import DefaultLayout from "../layouts/default";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
