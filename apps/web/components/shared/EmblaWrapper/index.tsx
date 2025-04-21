"use client";

import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.css";
import { Box, BoxProps } from "@chakra-ui/react";
import { useMemo } from "react";

interface Props extends BoxProps {
  children: React.ReactNode;
}

export default function EmblaWrapper({ children, ...props }: Props) {
  const options = useMemo(
    () => ({
      loop: false,
      dragFree: true,
      dragThreshold: 0.3,
    }),
    []
  );
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <Box className={styles.embla}>
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
