import { Stack, For, Flex } from "@chakra-ui/react";
import { RoomInfo } from "../interfaces/RoomInfo.interface";
import ChatRoomCard from "./ChatRoomCard";
import CreateChatDialog from "@/features/chat/components/CreateChatDialog";
import JoinChatDialog from "@/features/chat/components/JoinChatDialog";
import EmptySection from "./EmptySection";

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
] as const;

export default function ActiveRooms() {
  return (
    <Stack spaceY="3">
      <For
        each={ACTIVE_ROOMS}
        fallback={
          <EmptySection
            title="No active rooms"
            description="You don't have any active rooms, start a new one."
          >
            <Flex gap={4} flexWrap={"wrap"}>
              <CreateChatDialog />
              <JoinChatDialog />
            </Flex>
          </EmptySection>
        }
      >
        {(room) => <ChatRoomCard key={room.id} {...room} />}
      </For>
    </Stack>
  );
}
