import "@/styles/globals.css";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <SessionProvider session={pageProps.session}>
        {getLayout(
          <main className={`${poppins.className}`}>
            <Component {...pageProps} />
          </main>
        )}
      </SessionProvider>
    </>
  );
}
