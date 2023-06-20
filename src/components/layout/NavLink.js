import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function NavLink({ children }) {
  const { colorMode } = useColorMode();
  return (
    <Box
      mx={2}
      fontSize={["md", "lg", "xl"]}
      color={colorMode === "light" ? "darkBlue.500" : "lightBlue.100"}
      _hover={{
        color: colorMode === "dark" ? "darkBlue.200" : "lightBlue.300",
      }}
    >
      <Link to={`/${children}`}>{children}</Link>
    </Box>
  );
}
