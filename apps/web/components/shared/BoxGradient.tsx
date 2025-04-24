import { randomGradientGenerator } from "@/utils/randomGradient";
import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

export default function BoxGradient({ children, ...props }: BoxProps) {
  return (
    <Box
      w="100%"
      h="100%"
      color="white"
      lineHeight="1.2"
      p={2}
      style={randomGradientGenerator()}
      {...props}
    >
      {children}
    </Box>
  );
}
