import { Box, Grid } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Grid h="100%" gap={4} pt={12}>
      <Box
        bg="teal.400"
        display="none"
        md={{
          display: "block",
          gridArea: "1 / 1 / 2 / 2",
        }}
      >
        template
      </Box>
      <Box md={{ gridArea: "1 / 2 / 2 / 3" }} alignContent={"center"}>
        {children}
      </Box>
    </Grid>
  );
}
