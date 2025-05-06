import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { PropsWithChildren, useState } from "react";

interface Props {
  message: string;
  timestamp: string;
}

interface GlobeProps extends PropsWithChildren {
  message: string;
  timestamp: string;
}

const RANGE = 150;

export function GlobeTextWithState({ message, timestamp }: Props) {
  const [text, setText] = useState(truncateText(message));
  const hasTruncate = message.trim().length > RANGE;
  const truncateToggle = () => {
    console.log(text);

    if (!hasTruncate) return;

    setText(() => truncateText(message));
  };

  if (!hasTruncate) {
    return <GlobeText message={message} timestamp={timestamp} />;
  }

  return (
    <GlobeText message={text} timestamp={timestamp}>
      <Button
        mt={1}
        colorPalette={"teal"}
        h={"auto"}
        variant={"solid"}
        padding={".03rem .3rem"}
        borderRadius={"lg"}
        onClick={truncateToggle}
        aria-label={hasTruncate ? "show more" : "show less"}
      >
        {/* {hasTruncate ? <BiDotsHorizontalRounded /> : <BiChevronsUp />} */}
      </Button>
    </GlobeText>
  );
}

export function GlobeText({ message, timestamp, children }: GlobeProps) {
  return (
    <Box position={"relative"} w={"100%"}>
      <Box
        p="3"
        borderRadius="lg"
        shadow="sm"
        bgColor={"teal.100"}
        _dark={{ bgColor: "bg.emphasized" }}
      >
        {message}
      </Box>
      <Flex gap={2} justifyContent={"space-between"}>
        <Text fontSize="xs" color="gray.500" mt="1">
          {timestamp}
        </Text>
        {children}
      </Flex>
    </Box>
  );
}

function truncateText(words: string) {
  const textFormat = words.trim();

  console.log({
    a: textFormat.length,
  });

  if (textFormat.length > RANGE) {
    return `${textFormat.slice(0, RANGE)} ...`;
  }

  return textFormat;
}
