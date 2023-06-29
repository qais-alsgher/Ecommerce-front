import React from "react";
import {
  Skeleton,
  Container,
  Flex,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function SkeletonItems() {
  return (
    <Container maxW="container.xl" py={20}>
      <Grid
        w={"100%"}
        gap={10}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {Array(6)
          .fill("")
          .map((_, i) => (
            <GridItem key={i}>
              <Flex
                border={"1px solid #e2e8f0"}
                boxShadow={"md"}
                w={"100%"}
                h={"450px"}
                rounded={"xl"}
              >
                <Box w="100%">
                  <Skeleton height="100%" />
                </Box>
              </Flex>
            </GridItem>
          ))}
      </Grid>
    </Container>
  );
}

export default SkeletonItems;
