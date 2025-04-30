"use client";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import EmblaWrapper from "../../../components/shared/EmblaWrapper";
import Link from "next/link";
import Picture from "@/components/shared/Picture";
import { useSuspenseQuery } from "@tanstack/react-query";
import { roomsOptions } from "../services";
import AlertCustom from "@/components/shared/AlertCustom";
import User from "@/components/icons/User";

export default function FeaturedRooms() {
  const {
    data: { data, error, isSuccess },
    refetch,
  } = useSuspenseQuery(
    roomsOptions(["rooms-highlighted"], "/rooms/highlights")
  );

  if (!isSuccess || error) {
    return (
      <AlertCustom
        alertTitle="Failed to obtain the top rooms"
        status="error"
        alertMessage={error}
      >
        <Button onClick={() => refetch()}>Retry</Button>
      </AlertCustom>
    );
  }

  if (!data || data.length === 0) return null;

  return (
    <Box>
      <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
        Featured Rooms
      </Heading>

      <EmblaWrapper gap={4} md={{ gap: 8 }} lg={{ gap: 10 }}>
        {data.map(({ id, image, participants, title, category }) => (
          <Link
            key={id}
            aria-label={`go to room ${title}`}
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
                <Picture
                  sources={[
                    { mediaWidth: 768, srcSet: image },
                    { mediaWidth: 1024, srcSet: image },
                  ]}
                  alt={title}
                  src={image}
                  width="100%"
                  height="100%"
                  loading="lazy"
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
              >
                <Icon size={"sm"} color="white" display="block">
                  <User />
                </Icon>
                <Text color="white" fontSize="xs" fontWeight="medium">
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
