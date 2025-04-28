import ChakraLink from "@/components/shared/ChakraLink";
import ExternalRegister from "@/features/auth/components/ExternalRegister";
import RegisterForm from "@/features/auth/components/RegisterForm";
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
        Create Account
      </Heading>

      <RegisterForm />

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

      <ExternalRegister />

      <Text textAlign={"center"} fontSize={"xs"} mt={6}>
        Already have an account?{" "}
        <ChakraLink href="/auth/login" fontWeight={"600"} color="teal.500">
          Sign in
        </ChakraLink>
      </Text>
    </Flex>
  );
}
