import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import EmblaWrapper from "../../../components/shared/EmblaWrapper";
import Link from "next/link";
import { FeaturedRoom } from "../interfaces/FeaturedRoom.interface";

const FEATURED_ROOMS: FeaturedRoom[] = [
  {
    id: 1,
    title: "Gaming Zone",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    category: "gaming",
    participants: 156,
  },
  {
    id: 2,
    title: "Música en Vivo",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    category: "music",
    participants: 89,
  },
  {
    id: 3,
    title: "Tech Talks",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    category: "tech",
    participants: 124,
  },
  {
    id: 4,
    title: "Arte Digital",
    image: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg",
    category: "art",
    participants: 67,
  },
  {
    id: 5,
    title: "Book Club",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    category: "book",
    participants: 92,
  },
  {
    id: 6,
    title: "Fitness & Wellness",
    image: "https://images.pexels.com/photos/1316295/pexels-photo-1316295.jpeg",
    category: "fitness",
    participants: 145,
  },
  {
    id: 7,
    title: "Cooking Corner",
    image: "https://images.pexels.com/photos/1316366/pexels-photo-1316366.jpeg",
    category: "cooking",
    participants: 78,
  },
  {
    id: 8,
    title: "Language Exchange",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "language",
    participants: 112,
  },
  {
    id: 9,
    title: "Film Discussion",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    category: "film",
    participants: 84,
  },
];

export default function FeaturedRooms() {
  return (
    <Box>
      <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
        Salas Destacadas
      </Heading>

      <EmblaWrapper gap={4} md={{ gap: 8 }} lg={{ gap: 10 }}>
        {FEATURED_ROOMS.map(({ id, image, participants, title, category }) => (
          <Link
            key={id}
            href={{
              pathname: "/chat/category",
              query: {
                category,
                room: id,
              },
            }}
          >
            <Box
              className="embla__slide"
              borderRadius="lg"
              overflow="hidden"
              bg="gray.100"
              position="relative"
              transition="transform 0.2s"
              flexShrink={0}
              w="200px"
              md={{ w: "300px" }}
              lg={{ w: "350px" }}
            >
              <Box
                position="relative"
                h="130px"
                md={{ h: "170px" }}
                lg={{ h: "220px" }}
              >
                <Image
                  src={image}
                  alt={title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  bg="rgba(0,0,0,0.6)"
                  p="2"
                >
                  <Text color="white" fontWeight="medium" fontSize="sm">
                    {title}
                  </Text>
                </Box>
              </Box>
              <Flex
                alignItems="center"
                p="2"
                position="absolute"
                top="2"
                right="2"
                bg="rgba(0,0,0,0.6)"
                borderRadius="full"
                px="2"
              >
                <BiUser size={12} color="white" />
                <Text color="white" fontSize="xs" fontWeight="medium" ml="1">
                  {participants}
                </Text>
              </Flex>
            </Box>
          </Link>
        ))}
      </EmblaWrapper>
    </Box>
  );
}
