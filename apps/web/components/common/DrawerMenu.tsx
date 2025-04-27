import {
  Drawer,
  Portal,
  CloseButton,
  IconButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { RiMenuUnfold2Line } from "react-icons/ri";
import MainLogo from "../shared/MainLogo";
import { BiBell, BiMessageSquare, BiUser, BiHome } from "react-icons/bi";
import ButtonThemeMode from "../shared/ButtonThemeMode";
import Link from "next/link";

const NAV_ITEMS = [
  {
    name: "Home",
    icon: BiHome,
    path: "/",
  },
  {
    name: "Chats",
    icon: BiMessageSquare,
    path: "/",
  },
  {
    name: "Alertas",
    icon: BiBell,
    path: "/alerts",
  },
  {
    name: "Perfil",
    icon: BiUser,
    path: "/profile",
  },
];

export default function DrawerMenu() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <IconButton aria-label="Open menu" variant="ghost">
          <RiMenuUnfold2Line size={20} />
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
                      // color={item.path === pathname ? "brand.500" : "gray.500"}
                      transition="all 0.2s"
                    >
                      <IconComponent />
                      <Text
                        fontSize="xs"
                        // fontWeight={item.path === pathname ? "medium" : "normal"}
                        mt="1"
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  </Link>
                );
              })}
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
