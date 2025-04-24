import { queryOptions } from "@tanstack/react-query";
import { FeaturedRoom } from "../interfaces/FeaturedRoom.interface";
import { axiosFetcher } from "@/lib/axiosFetcher";

export const roomsOptions = queryOptions({
  queryKey: ["rooms-highlighted"],
  queryFn: async () => {
    const response = await axiosFetcher<FeaturedRoom[]>("/rooms/highlights");

    return response;
  },
});
