import React from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NoProducts({ children, text }) {
  return (
    <VStack
      justify={"center"}
      align={"center"}
      gap={5}
      transform={"translateY(50%)"}
      w={"100%"}
      maxH={"500px"}
    >
      <Box fontSize={["4xl", "5xl", "9xl"]}>{children}</Box>
      <Text fontSize={{ base: "1rem", md: "1.5rem" }} fontWeight="bold">
        No Products {text}
      </Text>
      <Button
        as={Link}
        to="/Shop"
        p={6}
        fontSize={{ base: "1rem", md: "1.5rem" }}
        variant={"solid"}
      >
        Go to Shop
      </Button>
    </VStack>
  );
}

export default NoProducts;
