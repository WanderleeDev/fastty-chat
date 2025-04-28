import ChakraLink from "@/components/shared/ChakraLink";
import ExternalLogin from "@/features/auth/components/ExternalLogin";
import LoginForm from "@/features/auth/components/LoginForm";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function page() {
  return (
    <Flex direction={"column"} gap={4} maxW={"lg"} mx="auto">
      <Heading
        mb={6}
        fontSize={"xl"}
        md={{ fontSize: "3xl" }}
        textAlign={"center"}
      >
        Sign in
      </Heading>

      <LoginForm />

      <Flex
        direction={"row"}
        alignItems={"center"}
        flexWrap={"nowrap"}
        gap={2}
        py={6}
      >
        <Text h={"1px"} bg="bg.emphasized" flex={"1 1 0"} />o
        <Text h={"1px"} bg="bg.emphasized" flex={"1 1 0"} />
      </Flex>

      <ExternalLogin />

      <Text textAlign={"center"} fontSize={"xs"} mt={6}>
        Don&apos;t have an account?{" "}
        <ChakraLink href="/auth/register" fontWeight={"600"} color="teal.500">
          Sign up
        </ChakraLink>
      </Text>
    </Flex>
  );
}
