import React from "react";
import { Box, Container, useColorMode } from "@chakra-ui/react";

function BgContainer({ children, ...rest }) {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}>
      <Container maxW="container.xl" {...rest}>
        {children}
      </Container>
    </Box>
  );
}

export default BgContainer;
