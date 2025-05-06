import { VStack, Flex, Avatar } from "@chakra-ui/react";
import { GlobeTextWithState } from "./GlobeText";

export default function ChatMessageList() {
  return (
    <VStack flex="1" overflowY="auto" p="4">
      {messages.map((message) => (
        <Flex
          key={message.id}
          alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}
          maxW="80%"
          gap="2"
        >
          {message.sender !== "user" && (
            <Avatar.Root size={"sm"} variant="outline">
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src={message.avatar} />
            </Avatar.Root>
          )}
          <GlobeTextWithState
            message={message.text}
            timestamp={message.timestamp}
          />
          {message.sender === "user" && (
            <Avatar.Root size={"sm"} variant="outline">
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src={message.avatar} />
            </Avatar.Root>
          )}
        </Flex>
      ))}
    </VStack>
  );
}
