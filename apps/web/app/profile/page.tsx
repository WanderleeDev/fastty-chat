import ActiveRooms from "@/features/room/components/ActiveRooms";
import { Flex, Heading } from "@chakra-ui/react";

export default function ProfilePage() {
  return (
    <Flex direction={"column"} gap={4} as="section">
      <Heading as="h3" fontSize="xl" fontWeight="bold">
        Active Rooms
      </Heading>
      <ActiveRooms />
    </Flex>
  );
}
