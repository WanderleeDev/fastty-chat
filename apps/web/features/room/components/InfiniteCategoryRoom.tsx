"use client";

import { Button, Spinner } from "@chakra-ui/react";
import { categoryInfiniteQueryOptions } from "../services";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import AlertCustom from "@/components/shared/AlertCustom";
import TriggerObserver from "@/components/shared/TriggerObserver";
import DebuggerInfiniteScroll from "@/utils/DebuggerInfiniteScroll";

interface Props {
  limit: number;
  queryKeys: string[];
  endpoint: string;
}

export default function InfiniteCategoryRoom({
  limit,
  endpoint,
  queryKeys,
}: Props) {
  const {
    data: { pages },
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  } = useSuspenseInfiniteQuery(
    categoryInfiniteQueryOptions(queryKeys, endpoint, limit)
  );

  if (pages.at(-1)?.error || isError) {
    return (
      <AlertCustom
        status="error"
        alertTitle="Error"
        alertMessage={"Failed to load categories"}
      >
        <Button onClick={() => refetch()}>Retry</Button>
      </AlertCustom>
    );
  }

  return (
    <>
      <ul>
        {pages
          .flatMap((page) => page.data?.content || [])
          .map(({ id, name }) => (
            <li style={{ height: "80dvh" }} key={id}>
              {name}
            </li>
          ))}
        <DebuggerInfiniteScroll
          currentPage={pages.at(-1)?.data?.current_page}
          totalPages={pages.at(-1)?.data?.total_pages}
          totalItems={pages.at(-1)?.data?.total_items}
          limit={pages.at(-1)?.data?.limit}
          offset={pages.at(-1)?.data?.offset}
          hasPrev={`${pages.at(-1)?.data?.has_prev}`}
          hasNext={`${pages.at(-1)?.data?.has_next}`}
          currentItems={pages.reduce(
            (prev, curr) => prev + (curr.data?.content ?? []).length,
            0
          )}
        />
        {hasNextPage ? (
          <TriggerObserver
            display={"grid"}
            placeContent={"center"}
            py={8}
            bg="gray.200"
            fn={fetchNextPage}
            options={{
              rootMargin: "100px",
            }}
          >
            {(isFetching || isLoading) && <Spinner size="lg" />}
          </TriggerObserver>
        ) : (
          <div>End of categories</div>
        )}
      </ul>
    </>
  );
}
