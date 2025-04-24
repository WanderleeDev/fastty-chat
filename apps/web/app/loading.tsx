import { Box, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function loading() {
  return (
    <Box
      h="100dvh"
      w="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={6}
    >
      <Spinner colorPalette={"teal"} size={"lg"} color={"teal"} scale={2} />
      <Text>Loading...</Text>
    </Box>
  );
}
