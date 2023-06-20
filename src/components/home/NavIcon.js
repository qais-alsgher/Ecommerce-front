import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavIcon({ children, href }) {
  const { colorMode } = useColorMode();
  return (
    <Box
      as={Link}
      to={href}
      mx={2}
      fontSize="2xl"
      color={colorMode === "light" ? "darkBlue.500" : "lightBlue.100"}
      _hover={{
        color: colorMode === "dark" ? "darkBlue.200" : "lightBlue.300",
      }}
    >
      {children}
    </Box>
  );
}

export default NavIcon;
