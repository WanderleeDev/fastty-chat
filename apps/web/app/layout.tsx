import { Box } from "@chakra-ui/react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import { defineMetadata } from "../utils/defineMetada";
import Provider from "./provider";

export const metadata = defineMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
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
