import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

import SidebarContent from "./SidebarContent";
import MobileNav from "./MobileNav";

export default function Sidebar({ navLinks, urlRouter }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  return (
    <Box maxH="100vh" minW={80}>
      <SidebarContent
        onClose={() => onClose}
        navLinks={navLinks}
        urlRouter={urlRouter}
        display={{ base: "none", lg: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            navLinks={navLinks}
            urlRouter={urlRouter}
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", lg: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, lg: 60 }} p="4">
        {/* {children} */}
      </Box>
    </Box>
  );
}
