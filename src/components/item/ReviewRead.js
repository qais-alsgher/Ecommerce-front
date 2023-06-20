import React from "react";
import { Avatar, Heading, Flex, Text } from "@chakra-ui/react";
import Rating from "../items/cardItem/Rating";

function ReviewRead({ review }) {
  return (
    <>
      {review?.map((item) => {
        return (
          <Flex gap={5} flexDir="column" key={item?.User?.userName}>
            <Flex gap={5} alignItems="center">
              <Avatar
                size="md"
                name={item?.User?.userName}
                src={item?.User?.image}
              />
              <Text fontSize="xl">{item?.User?.userName}</Text>
              <Rating rating={review} />
            </Flex>
            <Text pl={5} fontSize="xl">
              {item?.reviewMessage}
            </Text>
          </Flex>
        );
      })}
    </>
  );
}

export default ReviewRead;
