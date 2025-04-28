import {
  Drawer,
  Portal,
  CloseButton,
  IconButton,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import MainLogo from "../shared/MainLogo";
import ButtonThemeMode from "../shared/ButtonThemeMode";
import Link from "next/link";
import ChakraLink from "../shared/ChakraLink";
import HamburgerMenu from "../icons/HamburgerMenu";
import Arrow from "../icons/Arrow";
import Home from "../icons/Home";
import GlobeMessage from "../icons/GlobeMessage";
import User from "../icons/User";

const NAV_ITEMS = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "Chats",
    icon: GlobeMessage,
    path: "/chat",
  },
  {
    name: "Perfil",
    icon: User,
    path: "/profile",
  },
];

export default function DrawerMenu() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <IconButton aria-label="Open menu" variant="ghost">
          <HamburgerMenu />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>
                <MainLogo />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body display={"flex"} flexDirection={"column"} gap={6}>
              {NAV_ITEMS.map((item) => {
                const IconComponent = item.icon;

                return (
                  <Link key={item.name} href={item.path}>
                    <Flex
                      gap={2}
                      alignItems="center"
                      fontSize={"xl"}
                      transition="all 0.2s"
                    >
                      <Icon boxSize={"1.2rem"}>
                        <IconComponent />
                      </Icon>
                      <Text fontSize="xs" mt="1">
                        {item.name}
                      </Text>
                    </Flex>
                  </Link>
                );
              })}
              <Flex gap={2} direction={"column"}>
                <ChakraLink
                  p={4}
                  rounded={"md"}
                  color="gray.800"
                  bg="teal.400"
                  href="/auth/login"
                >
                  <Icon boxSize={"1.2rem"}>
                    <Arrow />
                  </Icon>
                  Login
                </ChakraLink>
                <ChakraLink
                  p={4}
                  rounded={"md"}
                  color="gray.800"
                  bg="red.400"
                  href="/auth/register"
                >
                  <Icon boxSize={"1.2rem"} transform={"rotate(180deg)"}>
                    <Arrow />
                  </Icon>
                  Sign Up
                </ChakraLink>
              </Flex>
            </Drawer.Body>
            <Drawer.Footer display={"flex"} justifyContent={"flex-start"}>
              <ButtonThemeMode />
            </Drawer.Footer>
            <Drawer.CloseTrigger
              asChild
              display={"flex"}
              justifyContent={"start"}
            >
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
