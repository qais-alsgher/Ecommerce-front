import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import NaveItem from "./NaveItem";

function SidebarContent({ onClose, navLinks, urlRouter, ...rest }) {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", lg: 80 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", lg: "none" }} onClick={onClose} />
      </Flex>
      {navLinks.map((link) => (
        <NaveItem key={link.name} icon={link.icon} urlRouter={urlRouter}>
          {link.name}
        </NaveItem>
      ))}
    </Box>
  );
}

export default SidebarContent;
