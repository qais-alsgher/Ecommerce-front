import React, { useState } from "react";
import MobileNav from "./MobileNav";
import FilterSidebarContent from "./FilterSidebarContent";
import { Box, Drawer, DrawerContent, VStack } from "@chakra-ui/react";
import SliderPage from "./SliderPage";

export default function FilterSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
      <Box minW={60}>
        <FilterSidebarContent
          onClose={onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
        >
          <DrawerContent>
            <FilterSidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      </Box>
      <VStack w="full" p={4} ml={{ md: 6, lg: 12 }}>
        {children}
        <SliderPage />
      </VStack>
    </Box>
  );
}
