import Layout from "@/components/Layout";
import MuiLocalizationProvider from "@/lib/utils/muiLocalizationProvider";
import MuiThemeProvider from "@/lib/utils/muiThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiLocalizationProvider>
      <MuiThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiThemeProvider>
    </MuiLocalizationProvider>
  );
}
