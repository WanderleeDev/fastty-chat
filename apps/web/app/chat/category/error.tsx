"use client";

import { Heading, Button, Flex, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import LightningSlash from "@/components/icons/LightningSlash";

export default function Error({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      h="full"
      alignContent={"center"}
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      <Icon boxSize={"10rem"}>
        <LightningSlash />
      </Icon>
      <Heading
        textAlign={"center"}
        color="red.500"
        fontSize="2xl"
        md={{ fontSize: "4xl" }}
      >
        Something went wrong!
      </Heading>

      <Text>The page you are trying to access does not exist</Text>
      <Button
        variant="surface"
        colorPalette={"teal"}
        onClick={() => router.push("/")}
      >
        Back to home
      </Button>
    </Flex>
  );
}
