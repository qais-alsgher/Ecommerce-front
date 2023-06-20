import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
function Selecttor({ data, isColor, title, handleClick, ...rest }) {
  return (
    <Flex gap={2} flexDir="row" alignItems={"center"}>
      <Text fontSize="xl">{title} :</Text>
      {data?.map((ele) => {
        return (
          <Box
            $
            {...rest}
            bg={isColor && ele}
            cursor="pointer"
            key={ele}
            onClick={() => handleClick(ele)}
          >
            {!isColor && ele}
          </Box>
        );
      })}
    </Flex>
  );
}

export default Selecttor;
