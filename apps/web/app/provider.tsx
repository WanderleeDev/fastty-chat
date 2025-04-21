"use client";

import { ChakraProvider, ClientOnly, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ClientOnly>
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {props.children}
        </ThemeProvider>
      </ChakraProvider>
    </ClientOnly>
  );
}
