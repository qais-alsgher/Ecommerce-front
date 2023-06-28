import React from "react";
import { useColorMode, Radio } from "@chakra-ui/react";

function NavItem({ children, ...rest }) {
  return (
    <Radio
      px="6"
      py="2"
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
