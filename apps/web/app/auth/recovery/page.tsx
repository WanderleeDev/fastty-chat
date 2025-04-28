import ArrowRight from "@/components/icons/ArrowRight";
import ChakraLink from "@/components/shared/ChakraLink";
import RecoveryForm from "@/features/auth/components/RecoveryForm";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";

export default function page() {
  return (
    <Flex direction={"column"} gap={8} maxW={"lg"} mx="auto">
      <Box textAlign={"center"}>
        <Heading mb={4} fontSize={"xl"} md={{ fontSize: "3xl" }}>
          Recover Password
        </Heading>
        <Text fontSize={"xs"}>Enter your email to retrieve your password</Text>
      </Box>
      <Box>
        <RecoveryForm />
        <ChakraLink
          href="/auth/login"
          fontWeight={"600"}
          color="teal.500"
          mt={6}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Icon boxSize={"1.5rem"}>
            <ArrowRight />
          </Icon>
          Back to login
        </ChakraLink>
      </Box>
    </Flex>
  );
}
