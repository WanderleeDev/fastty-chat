import { getQueryClient } from "../_lib/getQueryClient";
import { categoryInfiniteQueryOptions } from "@/features/room/services";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";
import InfiniteCategoryRoom from "@/features/room/components/InfiniteCategoryRoom";
import FeaturedRoomSkeleton from "@/features/room/components/FeaturedRoomSkeleton";

const LIMIT = 3;
const QUERY_KEYS = ["categories"];
const ENDPOINT = "/categories/paginated";

export default async function page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchInfiniteQuery(
    categoryInfiniteQueryOptions(QUERY_KEYS, ENDPOINT, LIMIT)
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<FeaturedRoomSkeleton />}>
        <InfiniteCategoryRoom
          limit={LIMIT}
          queryKeys={QUERY_KEYS}
          endpoint={ENDPOINT}
        />
      </Suspense>
    </HydrationBoundary>
  );
}
