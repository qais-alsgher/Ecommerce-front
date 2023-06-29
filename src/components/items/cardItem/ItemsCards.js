import React from "react";
import { useSelector } from "react-redux";
import {
  selectItems,
  selectIsLoading,
} from "../../../store/features/itemSlicer";
import Card from "./Card";
import { Box, Flex } from "@chakra-ui/react";
import SkeletonItems from "../../skeleton/SkeletonItems";

function ItemsCards() {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <SkeletonItems />
      ) : (
        <Flex
          gap={8}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="flex-start"
          pt={10}
        >
          {items.length > 0 ? (
            items.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <Box
              transform={"translateY(50%)"}
              fontSize={["md", "lg", "xl", "2xl"]}
              h="70vh"
            >
              No products matching your selection.
            </Box>
          )}
        </Flex>
      )}
    </>
  );
}

export default ItemsCards;
