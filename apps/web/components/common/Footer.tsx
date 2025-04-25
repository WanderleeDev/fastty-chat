import {
  ClientOnly,
  Flex,
  HStack,
  Icon,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import MobileNavigation from "./MobileNavigation";
import MainLogo from "../shared/MainLogo";
import Link from "next/link";
import { BiLogoFacebookCircle, BiLogoInstagram, BiX } from "react-icons/bi";

interface SocialMedia {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const FOOTER_LINKS: SocialMedia[] = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <BiLogoFacebookCircle />,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <BiLogoInstagram />,
  },
  {
    label: "Twitter",
    href: "https://x.com/X.",
    icon: <BiX />,
  },
];

export default function Footer() {
  return (
    <footer>
      <MobileNavigation md={{ display: "none" }} />
      <Flex
        padding={4}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        backgroundColor={"gray.solid"}
        color="white"
        display={{ base: "none", md: "flex" }}
      >
        <Flex direction="row" align="center" spaceX="2">
          <MainLogo />
          <ClientOnly fallback={<Skeleton h={4} w={50} />}>
            <Text textStyle="xs">{new Date().getFullYear()} ©</Text>
          </ClientOnly>
        </Flex>
        <HStack spaceX={4} pt={{ base: 2, md: 0 }}>
          {FOOTER_LINKS.map(({ href, label, icon }) => (
            <Link key={label} href={href} aria-label={`go to ${label}`}>
              <Icon size="lg">{icon}</Icon>
            </Link>
          ))}
        </HStack>
      </Flex>
    </footer>
  );
}
