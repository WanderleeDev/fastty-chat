import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import { defineMetadata } from "./utils/defineMetada";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = defineMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Box
            mx="auto"
            h="100dvh"
            position="relative"
            overflowX="hidden"
            display="grid"
            gridTemplateRows={"auto 1fr auto"}
          >
            <Header />
            <Box
              flex="1"
              px="4"
              pt="2"
              pb="20"
              md={{ px: "8" }}
              xl={{ px: "10" }}
              as={"main"}
            >
              {children}
            </Box>
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
