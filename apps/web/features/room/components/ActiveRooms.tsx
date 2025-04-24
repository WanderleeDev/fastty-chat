import { Box, Heading, Stack, For } from "@chakra-ui/react";
import { RoomInfo } from "../interfaces/RoomInfo.interface";
import ChatRoomCard from "./ChatRoomCard";

const ACTIVE_ROOMS: RoomInfo[] = [
  {
    id: 1,
    title: "Gamers Unite",
    lastMessage: "¡Nueva partida comenzando!",
    avatar: "",
    time: "12:30",
    unreadCount: 3,
  },
  {
    id: 2,
    title: "Música y Más",
    lastMessage: "Compartiendo playlist del día",
    avatar: "",
    time: "11:45",
    unreadCount: 1,
  },
  {
    id: 3,
    title: "Tech Talk",
    lastMessage: "¿Alguien probó el nuevo iOS?",
    avatar: "",
    time: "10:20",
    unreadCount: 0,
  },
];

export default function ActiveRooms() {
  return (
    <Box>
      <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
        Active Rooms
      </Heading>

      <Stack spaceY="3">
        <For each={ACTIVE_ROOMS}>
          {(room) => <ChatRoomCard key={room.id} {...room} />}
        </For>
      </Stack>
    </Box>
  );
}
