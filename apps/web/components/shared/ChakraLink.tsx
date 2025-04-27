import { LinkProps, Link as Wrapper } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function ChakraLink({ href, children, ...props }: LinkProps) {
  if (!href) return null;

  return (
    <Wrapper color="gray.900" _dark={{ color: "white" }} asChild {...props}>
      <Link href={href}>{children}</Link>
    </Wrapper>
  );
}
