import "../styles/globals.css";
import { AuthProvider } from "utils/auth.js";
import { ThemeProvider } from "utils/theme.js";
import DefaultLayout from "../layouts/default";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
