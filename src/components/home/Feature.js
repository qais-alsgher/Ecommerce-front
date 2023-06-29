import React from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Flex
        w={16}
        h={16}
        alignItems={"center"}
        justifyContent={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontSize={["lg", "xl", "2xl"]} fontWeight={600}>
        {title}
      </Text>
      <Text
        fontSize={["md", "lg", "xl"]}
        lineHeight={"1.5"}
        textAlign={"center"}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} pb={8}>
      <SimpleGrid
        justifyContent={"center"}
        columns={{ base: 1, md: 3 }}
        spacing={10}
      >
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Lifetime Support"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Unlimited Savings"}
          text={
            "Unmatched Lifetime Support: Expert assistance, guidance, and solutions, ensuring your satisfaction always. Shop with confidence! 🛒💯"
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Instant Delivery"}
          text={
            "Instant Delivery: Get your orders in seconds! Experience lightning-fast shipping and receive your products in record time. Shop now"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
