"use client";

import { BiMoon, BiSun } from "react-icons/bi";
import { useColorMode } from "../ui/color-mode";
import { IconButton } from "@chakra-ui/react";

export default function ButtonDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle dark mode"
      variant="ghost"
      color="white"
      _hover={{ bg: colorMode === "dark" ? "gray.700" : "brand.600" }}
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? <BiSun size={20} /> : <BiMoon size={20} />}
    </IconButton>
  );
}
