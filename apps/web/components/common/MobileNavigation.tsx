"use client";

import { Flex, Box, Text, Icon, BoxProps } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import User from "../icons/User";
import GlobeMessage from "../icons/GlobeMessage";

const NAV_ITEMS = [
  {
    name: "Chats",
    icon: GlobeMessage,
    path: "/",
  },
  {
    name: "Perfil",
    icon: User,
    path: "/profile",
  },
];

export default function BottomNavigation({ ...props }: BoxProps) {
  const pathname = usePathname();

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      mx="auto"
      borderTopWidth="1px"
      borderTopColor="gray.200"
      bg="white"
      py="2"
      zIndex="10"
      {...props}
    >
      <Flex justifyContent="space-around">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link key={item.name} href={item.path}>
              <Flex
                direction="column"
                alignItems="center"
                color={isActive ? "brand.500" : "gray.500"}
                transition="all 0.2s"
              >
                <Icon as={item.icon} boxSize={5} />
                <Text
                  fontSize="xs"
                  fontWeight={isActive ? "medium" : "normal"}
                  mt="1"
                >
                  {item.name}
                </Text>
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
}
