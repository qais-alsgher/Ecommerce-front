import React from "react";
import { Radio } from "@chakra-ui/react";

function NavItem({ children, ...rest }) {
  return (
    <Radio
      px="6"
      py="1"
      w={"full"}
      size="sm"
      colorScheme="teal"
      bg={"gray.400"}
      value={children}
    >
      {children}
    </Radio>
  );
}

export default NavItem;
