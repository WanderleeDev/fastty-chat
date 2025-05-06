import Arrow from "@/components/icons/Arrow";
import { HStack, IconButton, Avatar, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  category: string;
  participants: number;
}

export default function HeaderChat({ category, participants }: Props) {
  return (
    <HStack
      p="4"
      borderBottomWidth="1px"
      backgroundImage="url('https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg')"
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      textShadow="0 0 5px rgba(0,0,0,0.5)"
    >
      <Link href="/">
        <IconButton transform={"rotate(180deg)"} colorPalette={"teal"}>
          <Arrow transform={"rotate(180deg)"} />
        </IconButton>
      </Link>
      <Avatar.Root size={"sm"} variant="outline">
        <Avatar.Fallback />
        <Avatar.Image src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" />
      </Avatar.Root>

      <Box
        flex="1"
        p="2"
        borderRadius="md"
        color="white"
        textShadow="0 0 5px rgba(0,0,0,0.5)"
      >
        <Text fontWeight="bold" color="white">
          {category} Zone
        </Text>
        <Text fontSize="xs" color="white" opacity={0.8}>
          {`${participants} ${
            participants === 1 ? "participant" : "participants"
          }`}
        </Text>
      </Box>
    </HStack>
  );
}
