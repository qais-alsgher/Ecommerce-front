import React from "react";
import { Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { AiTwotoneSetting } from "react-icons/ai";

export default function MobileNav({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 8, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<AiTwotoneSetting />}
      />

      <Text fontSize="2xl" ml="8" fontWeight="bold">
        Filter
      </Text>
    </Flex>
  );
}
