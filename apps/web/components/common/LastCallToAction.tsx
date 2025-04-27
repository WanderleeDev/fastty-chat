import CreateChatDialog from "@/features/chat/components/CreateChatDialog";
import JoinChatDialog from "@/features/chat/components/JoinChatDialog";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import TextGradient from "../shared/TextGradient";

export default function LastCallToAction() {
  return (
    <Flex flexDirection={"column"} gap={8}>
      <TextGradient as={"h2"}>Ready to get started?</TextGradient>
      <Text fontSize="xl">
        Create your chat room in seconds and start connecting fast
      </Text>
      <Flex gap={4} flexWrap={"wrap"}>
        <CreateChatDialog />
        <JoinChatDialog />
      </Flex>
    </Flex>
  );
}
