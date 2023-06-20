import React, { useState } from "react";
import MobileNav from "./MobileNav";
import FilterSliderContent from "./FilterSliderContent";
import {
  Box,
  Drawer,
  DrawerContent,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import SliderPage from "./SliderPage";

export default function FilterSlider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
      <Box minW={80}>
        <FilterSliderContent
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
            <FilterSliderContent onClose={onClose} />
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
