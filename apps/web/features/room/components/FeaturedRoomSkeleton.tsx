import { Box, Skeleton } from "@chakra-ui/react";

export default function FeaturedRoomSkeleton() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={7}>
      <Skeleton w={200} h={5} />
      <Box
        overflow={"hidden"}
        width={"100dvw"}
        position={"relative"}
        w={"100%"}
        h={"130px"}
        md={{ h: "170px" }}
        lg={{ h: "210px" }}
      >
        <Box
          display={"flex"}
          gap={4}
          md={{ gap: 8 }}
          lg={{ gap: 10 }}
          position={"absolute"}
          top={0}
          left={0}
          height={"100%"}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              w="200px"
              md={{ w: "300px" }}
              lg={{ w: "350px" }}
              h={"100%"}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
