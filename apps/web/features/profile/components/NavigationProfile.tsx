"use client";

import ChakraLink from "@/components/shared/ChakraLink";
import { Flex, For, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdContacts } from "react-icons/io";
import { GiCheckboxTree } from "react-icons/gi";
import { FaExclamationCircle } from "react-icons/fa";

const sections = [
  {
    label: "Active Rooms",
    icon: FaExclamationCircle,
    url: "/profile",
  },
  {
    label: "My Rooms",
    icon: GiCheckboxTree,
    url: "/profile/room",
  },
  {
    label: "Contacts",
    icon: IoMdContacts,
    url: "/profile/contact",
  },
] as const;

export default function NavigationProfile() {
  const pathname = usePathname();

  return (
    <Flex
      justify="center"
      gap={{
        base: "1rem",
        md: "2rem",
      }}
      flexWrap="wrap"
    >
      <For each={sections}>
        {({ icon, label, url }) => {
          const IconComponent = icon;
          return (
            <ChakraLink
              href={url}
              fontSize="sm"
              p={{
                base: ".3rem",
                md: 4,
              }}
              w={{
                base: "fit-content",
                md: "150px",
              }}
              aria-label={`go to ${label}`}
              key={label}
              color={pathname === url ? "#1B9A91" : "black"}
              transition="all 0.15s linear"
              variant="underline"
              _hover={{
                base: {
                  color: "teal.600",
                },
              }}
              _dark={{
                color: `${pathname === url ? "#1B9A91" : "white"}`,
              }}
            >
              <IconComponent />
              <Text fontWeight="bold">{label}</Text>
            </ChakraLink>
          );
        }}
      </For>
    </Flex>
  );
}
