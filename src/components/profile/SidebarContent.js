import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import NaveItem from "./NaveItem";

const LinkItems = [
  { name: "Orders", icon: FiTrendingUp },
  { name: "Cart", icon: FiStar },
  { name: "Wish-list", icon: FiCompass },
  { name: "Settings", icon: FiHome },
];

function SidebarContent({ onClose, ...rest }) {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 80 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NaveItem key={link.name} icon={link.icon}>
          {link.name}
        </NaveItem>
      ))}
    </Box>
  );
}

export default SidebarContent;
