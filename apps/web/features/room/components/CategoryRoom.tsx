import ArrowDown from "@/components/icons/ArrowDown";
import ChakraLink from "@/components/shared/ChakraLink";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import FeaturedRooms from "./FeaturedRooms";

interface CategoryRoomProps {
  title: string;
  category: string;
}

export default function CategoryRoom({ title, category }: CategoryRoomProps) {
  return (
    <Box>
      <Heading
        as="h2"
        fontSize="xl"
        fontWeight="bold"
        mb="4"
        textTransform={"capitalize"}
        letterSpacing={".1rem"}
      >
        {title}
      </Heading>

      <FeaturedRooms />

      <Flex
        direction={"row"}
        alignItems={"center"}
        flexWrap={"nowrap"}
        gap={2}
        py={6}
      >
        <Box h={"1px"} bg="bg.emphasized" flex={"1 1 0"} />
        <ChakraLink
          href={`/room/${category}`}
          fontSize={"xs"}
          display={"flex"}
          alignItems={"center"}
          fontWeight={"600"}
          color="teal.500"
        >
          Show more
          <Icon boxSize={"14px"}>
            <ArrowDown />
          </Icon>
        </ChakraLink>
        <Box h={"1px"} bg="bg.emphasized" flex={"1 1 0"} />
      </Flex>
    </Box>
  );
}
