import Layout from "@/components/Layout";
import MuiLocalizationProvider from "@/lib/utils/muiLocalizationProvider";
import MuiThemeProvider from "@/lib/utils/muiThemeProvider";
import ReactQueryProvider from "@/lib/utils/reactQueryProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ReactQueryProvider>
        <MuiLocalizationProvider>
          <MuiThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MuiThemeProvider>
        </MuiLocalizationProvider>
      </ReactQueryProvider>
    </RecoilRoot>
  );
}

export default appWithTranslation(App);
