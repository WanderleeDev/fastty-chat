"use client";

import { ChakraProvider, ClientOnly, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "../lib/getQueryClient";

export default function RootLayout(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ClientOnly>
        <ChakraProvider value={defaultSystem}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            {props.children}
          </ThemeProvider>
        </ChakraProvider>
      </ClientOnly>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
