import axios from "axios";

export interface FetcherResponse<T> {
  content: T | null;
  error: string | null;
  isSuccess: boolean;
}

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FASTTY_CHAT_BACKEND_URL,
  timeout: 1000,
});

export const axiosFetcher = async <T>(url: string) => {
  let fetcherResponse: FetcherResponse<T> = {
    content: null,
    error: null,
    isSuccess: false,
  };

  try {
    const response = await instance.get<T>(url);

    fetcherResponse = {
      ...fetcherResponse,
      content: response.data,
      isSuccess: true,
    };
  } catch (error) {
    fetcherResponse = {
      ...fetcherResponse,
      error: error instanceof Error ? error.message : "Unknown error",
      isSuccess: false,
    };
  }

  return fetcherResponse;
};
