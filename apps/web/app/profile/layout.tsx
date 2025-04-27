import EditProfileDialog from "@/features/profile/components/EditProfileDialog";
import NavigationProfile from "@/features/profile/components/NavigationProfile";
import {
  Box,
  VStack,
  Avatar,
  Text,
  Flex,
  VisuallyHidden,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

export default function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <Box mt="4" md={{ shadow: "lg" }} as="section">
      <VisuallyHidden as="h2">Profile of Alex Johnson</VisuallyHidden>
      <VStack spaceY="6" align="stretch">
        <VStack
          spaceY="2"
          py="8"
          px="4"
          align="center"
          borderTopRadius={"xl"}
          background="linear-gradient(135deg, #7EF7D6 0%, #63C9FF 100%)"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            gap="2"
            direction="column"
          >
            <Avatar.Root size="2xl" borderWidth="4px" shadow="sm">
              <Avatar.Image
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Alex Johnson"
              />
            </Avatar.Root>
            <Text fontSize="xl" color="gray.900">
              Alex Johnson
            </Text>
            <Text color="gray.600">@alexj</Text>
            <Text color="gray.500" fontSize="sm">
              Desarrollador de software con 10 años de experiencia
            </Text>
          </Flex>
          <EditProfileDialog
            profile={{
              name: "Alex Johnson",
              email: "alexj@example.com",
              bio: "Desarrollador de software con 10 años de experiencia",
            }}
          />
        </VStack>
        <Flex
          direction="column"
          py="12"
          gap="16"
          maxW={"5xl"}
          w="full"
          mx="auto"
          md={{ px: "8" }}
        >
          <NavigationProfile />

          {children}
        </Flex>
      </VStack>
    </Box>
  );
}
