import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "../styles/theme.ts/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme} resetCSS cssVarsRoot="body">
      <title>Julio Cesar</title>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
