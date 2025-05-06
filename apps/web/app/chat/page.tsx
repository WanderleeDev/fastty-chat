"use client";

import { GlobeTextWithState } from "@/features/chat/components/GlobeText";
import HeaderChat from "@/features/chat/components/HeaderChat";
import MessageComposer from "@/features/chat/components/MessageComposer";
import { Message } from "@/features/chat/interfaces/Message.interface";
import { VStack, Flex, Avatar, Grid } from "@chakra-ui/react";
import { useState } from "react";

const EXAMPLE_MESSAGES: Message[] = [
  {
    id: 1,
    text: "¡Hola! ¿Alguien para jugar Fortnite?",
    sender: "user",
    timestamp: "10:30",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: 2,
    text: "¡Yo me apunto! ¿Qué nivel tienes?",
    sender: "other",
    timestamp: "10:31",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    id: 3,
    text: "Nivel 75, llevo jugando toda la temporada",
    sender: "user",
    timestamp: "10:32",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: 4,
    text: "¡Genial! Yo estoy en el 80. ¿Jugamos una partida ahora?",
    sender: "other",
    timestamp: "10:33",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(EXAMPLE_MESSAGES);

  return (
    <Grid
      templateRows="auto 1fr auto"
      h="100%"
      bgColor={"teal.50"}
      _dark={{ bgColor: "teal.900" }}
    >
      <HeaderChat category="Gaming" participants={3} />

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

      <MessageComposer />
    </Grid>
  );
}
