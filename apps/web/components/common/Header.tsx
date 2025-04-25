import { Flex, FlexProps, Heading } from "@chakra-ui/react";
import MainLogo from "../shared/MainLogo";
import DrawerMenu from "./DrawerMenu";
import Link from "next/link";
import ButtonThemeMode from "@/components/shared/ButtonThemeMode";

export default function Header({ ...props }: FlexProps) {
  return (
    <Flex
      py="3"
      px="4"
      alignItems="center"
      justifyContent="space-between"
      bgColor="teal.400"
      color="white"
      position="sticky"
      top="0"
      zIndex="10"
      md={{ py: "6", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
      {...props}
    >
      <Heading as={"h1"}>
        <Link href="/" aria-label="View home page">
          <MainLogo colorPalette={"white"} md={{ fontSize: "3xl" }} />
        </Link>
      </Heading>
      <Flex gap="2">
        <ButtonThemeMode />
        <DrawerMenu />
      </Flex>
    </Flex>
  );
}
