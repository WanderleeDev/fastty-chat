import { TextProps } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";

export default function TextGradient({ children, ...props }: TextProps) {
  return (
    <Text
      fontSize={"3xl"}
      position={"relative"}
      fontWeight={"bold"}
      background={"linear-gradient(to bottom,#a6f8eb,#33a09e,#204a4d)"}
      letterSpacing={"wide"}
      bgClip="text"
      md={{ fontSize: "5xl", maxW: "50vw" }}
      xl={{ fontSize: "6xl" }}
      {...props}
    >
      {children}
    </Text>
  );
}
