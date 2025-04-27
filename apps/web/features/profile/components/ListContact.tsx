import { Box, Flex, For, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { Profile } from "../schemas";
import Picture from "@/components/shared/Picture";
import EmptySection from "@/features/room/components/EmptySection";

const contacts: Profile[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bio: "",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bio: "",
  },
  {
    id: "3",
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bio: "",
  },
];

export default function ListContact() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(auto-fit, minmax(200px, 1fr))",
        lg: "repeat(4, 1fr)",
      }}
      gap={8}
    >
      <For
        each={contacts}
        fallback={
          <EmptySection
            gridColumn={"1 / -1"}
            title="No Contacts"
            description="You have no contacts"
          />
        }
      >
        {(contact) => (
          <Box
            className="group"
            key={contact.id}
            borderRadius="md"
            overflow="hidden"
            boxShadow="sm"
            position="relative"
            w={"fit-content"}
          >
            <Picture
              src={contact.image}
              alt={contact.name}
              sources={[]}
              aspectRatio={"16/9"}
              height="280px"
              transition={"0.3s ease-in-out"}
              _groupHover={{ transform: "scale(1.1)" }}
            />

            <Flex
              position="absolute"
              zIndex={1}
              bottom={0}
              p={2}
              background={
                "linear-gradient(180deg, transparent, rgba(0, 0, 0, 1))"
              }
              color="white"
              direction={"column"}
              justifyContent={"end"}
              height="50%"
              width="100%"
            >
              <Text fontWeight="semibold">{contact.name}</Text>
              <Text fontSize={"xs"}>{contact.email}</Text>
            </Flex>
          </Box>
        )}
      </For>
    </Grid>
  );
}
