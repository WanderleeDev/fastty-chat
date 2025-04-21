"use client";

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ButtonThemeMode() {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="ghost" size="md">
        {theme === "light" ? <BiSun size={20} /> : <BiMoon size={20} />}
      </IconButton>
    </ClientOnly>
  );
}
