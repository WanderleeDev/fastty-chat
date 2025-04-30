import { queryOptions, infiniteQueryOptions } from "@tanstack/react-query";
import { FeaturedRoom } from "../interfaces/FeaturedRoom.interface";
import { axiosFetcher, FetcherResponse } from "../../../app/_lib/axiosFetcher";
import { CategoryPaginated } from "../interfaces/Category.interface";

export const roomsOptions = (queryKeys: string[], endpoint: string) => {
  return queryOptions({
    queryKey: queryKeys,
    retry: 3,
    queryFn: async () => {
      const response = await axiosFetcher<FeaturedRoom[]>(endpoint);

      return response;
    },
  });
};

export const categoryInfiniteQueryOptions = (
  queryKeys: string[],
  endpoint: string,
  limit: number = 4
) => {
  return infiniteQueryOptions({
    queryKey: queryKeys,
    initialPageParam: 0,
    retry: 3,
    queryFn: async ({ pageParam = 0 }) => {
      const fullEndpoint = `${endpoint}?offset=${pageParam}&limit=${limit}`;
      const response = await axiosFetcher<CategoryPaginated>(fullEndpoint);

      return response;
    },
    getNextPageParam: (page: FetcherResponse<CategoryPaginated>) => {
      if (!page.isSuccess || page.error || !page.data) {
        return undefined;
      }

      return page.data.has_next
        ? page.data.offset + page.data.limit
        : undefined;
    },
    getPreviousPageParam: (page: FetcherResponse<CategoryPaginated>) => {
      if (!page.isSuccess || page.error || !page.data) {
        return undefined;
      }

      return page.data.has_prev
        ? page.data.offset - page.data.limit
        : undefined;
    },
  });
};
