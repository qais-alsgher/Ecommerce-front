import React from "react";
import { Text } from "@chakra-ui/react";

function TitleSection({ title }) {
  return (
    <Text
      fontSize={["xl", "2xl", "3xl"]}
      fontWeight="bolder"
      textAlign={"center"}
      py={12}
    >
      {title}
    </Text>
  );
}

export default TitleSection;
