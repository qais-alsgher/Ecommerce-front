import React from "react";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

function BoxCard({ children, title, text, styleCard }) {
  return (
    <Box px={{ base: "4", md: "8" }} py={{ md: "0", lg: styleCard }} mb="10">
      <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        zIndex="10"
        as={Flex}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        shadow="base"
        rounded="lg"
        overflow="hidden"
        p="50px 24px"
        w="100%"
        h={{ base: "auto", md: "25rem" }}
      >
        {children}
        <Text
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="xl"
          fontWeight="bold"
          p="6"
        >
          {title}
        </Text>
        <Box p="6" flex="1 1 auto">
          <Text
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize="md"
            textAlign="center"
          >
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default BoxCard;
