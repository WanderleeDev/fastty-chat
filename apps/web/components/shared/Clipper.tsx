"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

export default function Clipper({ text }: Props) {
  const [textShort, setTextShort] = useState<string>(text);

  return <Box>tex</Box>;
}
