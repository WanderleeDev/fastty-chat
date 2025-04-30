import { Box } from "@chakra-ui/react";

interface DebuggerInfiniteScrollProps {
  currentPage: number;
  currentItems: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  offset: number;
  hasPrev: string;
  hasNext: string;
}
export default function DebuggerInfiniteScroll({
  currentPage,
  currentItems,
  totalPages,
  totalItems,
  limit,
  offset,
  hasPrev,
  hasNext,
}: Partial<DebuggerInfiniteScrollProps>) {
  return (
    <Box
      position="fixed"
      bottom="20"
      right="0"
      textAlign="center"
      p="2"
      w="fit-content"
      borderRadius="lg"
      bg="gray.200"
      display={"flex"}
      alignItems={"flex-start"}
      gap={2}
      flexDirection={"column"}
    >
      <strong>Infinite Scroll Debugger</strong>
      <span>Current page: {currentPage}</span>
      <span>
        Total pages: {currentPage} / {totalPages}
      </span>
      <span>Current items: {currentItems}</span>
      <span>Total items: {totalItems}</span>
      <span>Limit: {limit}</span>
      <span>Offset: {offset}</span>
      <span>Has prev: {hasPrev}</span>
      <span>Has next: {hasNext}</span>
    </Box>
  );
}
