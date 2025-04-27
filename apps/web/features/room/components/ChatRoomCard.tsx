import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RoomInfo } from "../interfaces/RoomInfo.interface";

export default function ChatRoomCard({
  id,
  avatar,
  title,
  lastMessage,
  time,
  unreadCount,
}: RoomInfo) {
  return (
    <Flex
      key={id}
      alignItems="center"
      p="3"
      borderRadius="lg"
      bg="white"
      shadow="sm"
      borderWidth="1px"
      borderColor="gray.100"
      transition="all 0.2s"
      _hover={{
        shadow: "md",
        borderColor: "gray.200",
      }}
    >
      <Avatar.Root size="md" mr="3">
        {avatar && (
          <Avatar.Image src={avatar} alt={`Cover of the room:  ${title}`} />
        )}
        <Avatar.Fallback name={title} />
      </Avatar.Root>

      <Box flex="1">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="semibold" fontSize="md" color="gray.900">
            {title}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {time}
          </Text>
        </Flex>

        <Text fontSize="sm" color="gray.600" mt="0.5">
          {lastMessage}
        </Text>
      </Box>

      {unreadCount > 0 && (
        <Badge
          borderRadius="full"
          minW="5"
          textAlign="center"
          py="0.5"
          colorPalette="green"
        >
          {unreadCount}
        </Badge>
      )}
    </Flex>
  );
}
