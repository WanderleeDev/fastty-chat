"use client";

import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.css";
import { Box, BoxProps } from "@chakra-ui/react";

interface Props extends BoxProps {
  children: React.ReactNode;
}

export default function EmblaWrapper({ children, ...props }: Props) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    dragThreshold: 0.3,
  });

  return (
    <Box className={styles.embla} {...props}>
      <Box className={styles.embla__viewport} ref={emblaRef}>
        <Box
          cursor="grab"
          _active={{ cursor: "grabbing" }}
          className={styles.embla__container}
          {...props}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
