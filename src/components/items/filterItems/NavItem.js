import React from "react";
import { useColorMode, Radio } from "@chakra-ui/react";

function NavItem({ children, ...rest }) {
  const { colorMode } = useColorMode();
  return (
    <Radio
      px="6"
      py="3"
      w={"full"}
      size="md"
      colorScheme="teal"
      bg={"gray.400"}
      value={children}
      _hover={{
        bg: "teal.200",
        color: "white",
      }}
    >
      {children}
    </Radio>
  );
}

export default NavItem;
