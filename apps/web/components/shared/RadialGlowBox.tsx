import { Box, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function RadialGlowBox({
  children,
  ...props
}: PropsWithChildren & BoxProps) {
  return (
    <Box position="relative" zIndex={-10} {...props}>
      <Box
        pointerEvents={"none"}
        userSelect={"none"}
        style={{
          width: "max(50vw, 400px)",
          height: "max(50vw, 400px)",
          background:
            "radial-gradient(circle, rgba(49, 151, 149, 0.42) 0%, rgba(56, 178, 172, 0.25) 20%, rgba(129, 230, 217, 0.1) 40%, rgba(178,245,234,0.03) 60%, rgba(178,245,234,0) 80%)",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          zIndex: 0,
          filter: "blur(2rem)",
          position: "absolute",
        }}
      />
      {children}
    </Box>
  );
}
