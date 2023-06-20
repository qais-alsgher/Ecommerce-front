import React from "react";
import { Box, Container, useColorMode } from "@chakra-ui/react";

function BgContainer({ children }) {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}>
      <Container maxW="container.xl">{children}</Container>
    </Box>
  );
}

export default BgContainer;
