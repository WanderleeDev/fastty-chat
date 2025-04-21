import ActiveRooms from "@/features/Room/components/ActiveRooms";
import FeaturedRooms from "@/features/Room/components/FeaturedRooms";
import Overview from "@/components/shared/Overview";
import { Stack } from "@chakra-ui/react";
import CategoryTabs from "@/features/categories/components/CategoryTabs";
import { defineMetadata } from "./utils/defineMetada";

export const metadata = defineMetadata({
  titlePage: "Chat App",
});

export default function Home() {
  return (
    <Stack
      md={{ spaceY: 6 }}
      display={"flex"}
      flexDirection={"column"}
      gap="max(2rem,5vw)"
      userSelect={"none"}
    >
      <CategoryTabs md={{ display: "none" }} />
      <FeaturedRooms />
      <Overview />
      <ActiveRooms />
    </Stack>
  );
}
