import { Router } from "next/router";
import NProgress from "nprogress";
import Header from "../features/core/components/Header";
import { Analytics } from '@vercel/analytics/react';

import "../styles/globals.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
