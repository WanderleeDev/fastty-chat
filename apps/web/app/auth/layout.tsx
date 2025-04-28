import TextGradient from "@/components/shared/TextGradient";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Grid h="100%" gap={8} pt={12} lg={{ gridTemplateColumns: "1fr 1fr" }}>
      <Flex
        direction={"column"}
        alignItems={"center"}
        display="none"
        lg={{
          display: "flex",
          gridArea: "1 / 1 / 2 / 2",
        }}
        textAlign={"center"}
      >
        <TextGradient lg={{ maxW: "md", lineHeight: "1" }}>
          Join our community
        </TextGradient>
        <Text py={4}>Connect, share, and grow with like-minded people</Text>
        <Image
          unoptimized
          src={
            "https://www.dropbox.com/scl/fi/d4vrd1agou9jah18et141/join-comunity-bg.webp?rlkey=y78ry5jpime0z2w81u9rjuyog&st=gmtw930z&raw=1"
          }
          alt="Join community"
          width={350}
          height={350}
        />
      </Flex>
      <Box lg={{ gridArea: "1 / 2 / 2 / 3" }} alignContent={"center"}>
        {children}
      </Box>
    </Grid>
  );
}
