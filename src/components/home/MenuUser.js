import React from "react";
import { MenuItem, Flex } from "@chakra-ui/react";

export default function MenuUser({ children, funcPram }) {
  return (
    <MenuItem fuctionality>
      <Flex gap={5} alignItems={"center"} fontSize={18}>
        {children}
      </Flex>
    </MenuItem>
  );
}
