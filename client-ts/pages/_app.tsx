import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout.jsx";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>AxieDex</title>
        <meta
          name="description"
          content="You will know all about Axie Infinity: Origin. Let's dive into it."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
