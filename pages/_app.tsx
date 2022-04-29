import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Box, ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps)=>{
  return <ChakraProvider>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap" rel="stylesheet"/>
    <Box fontFamily="'Noto Sans JP', sans-serif;">
      <Component {...pageProps} />
    </Box>
  </ChakraProvider>
}

export default App
