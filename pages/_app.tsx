import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps)=>{
  return <ChakraProvider>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default App
