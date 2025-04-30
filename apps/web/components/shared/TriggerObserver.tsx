"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import { useEffect, useMemo, useRef } from "react";

interface Props extends BoxProps {
  fn: VoidFunction;
  options?: IntersectionObserverInit;
}

export default function TriggerObserver({
  children,
  fn,
  options = {},
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const memoizedOptions = useMemo(() => {
    return {
      root: options.root ?? null,
      rootMargin: options.rootMargin ?? "0px",
      threshold: options.threshold ?? 0,
    };
  }, [options.root, options.rootMargin, options.threshold]);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || fn) fn();
      });
    }, memoizedOptions);

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
      console.log("observer disconnected");
    };
  }, [fn, memoizedOptions]);

  return (
    <Box {...rest} as="div" ref={ref}>
      {children}
    </Box>
  );
}
