import FeaturedRooms from "@/features/room/components/FeaturedRooms";
import Overview from "@/components/common/Overview";
import { Stack } from "@chakra-ui/react";
import CategoryTabs from "@/features/categories/components/CategoryTabs";
import { defineMetadata } from "../utils/defineMetada";
import { getQueryClient } from "@/lib/getQueryClient";
import { roomsOptions } from "@/features/room/services";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";
import FeaturedRoomSkeleton from "@/features/room/components/FeaturedRoomSkeleton";
import WhyChooseUs from "@/components/common/WhyChooseUs";

export const metadata = defineMetadata({
  titlePage: "Chat App",
});

export default async function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(roomsOptions);

  return (
    <Stack
      md={{ spaceY: 6 }}
      display={"flex"}
      flexDirection={"column"}
      gap="max(2rem,5vw)"
      userSelect={"none"}
    >
      <CategoryTabs />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<FeaturedRoomSkeleton />}>
          <FeaturedRooms />
        </Suspense>
      </HydrationBoundary>

      <Overview />

      <WhyChooseUs />
    </Stack>
  );
}
