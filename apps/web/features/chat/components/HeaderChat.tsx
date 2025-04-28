import Arrow from "@/components/icons/Arrow";
import { HStack, IconButton, Avatar, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  category: string;
  participants: number;
}

export default function HeaderChat({ category, participants }: Props) {
  return (
    <HStack p="4" borderBottomWidth="1px">
      <Link href="/">
        <IconButton transform={"rotate(180deg)"}>
          <Arrow transform={"rotate(180deg)"} />
        </IconButton>
      </Link>
      <Avatar.Root size={"sm"} variant="outline">
        <Avatar.Fallback />
        <Avatar.Image src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" />
      </Avatar.Root>

      <Box flex="1">
        <Text fontWeight="bold">{category} Zone</Text>
        <Text fontSize="xs" color="gray.500">
          {`${participants} ${
            participants === 1 ? "participant" : "participants"
          }`}
        </Text>
      </Box>
    </HStack>
  );
}
