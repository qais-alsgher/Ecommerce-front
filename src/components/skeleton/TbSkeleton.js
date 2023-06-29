import React from "react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Container,
  HStack,
} from "@chakra-ui/react";

function TbSkeleton() {
  return (
    <Container maxW="container.xl" py={20}>
      <Stack
        spacing={5}
        border={"1px solid #e2e8f0"}
        boxShadow={"md"}
        p={4}
        rounded={"xl"}
      >
        {Array(10)
          .fill("")
          .map((_, i) => (
            <Skeleton height="40px" />
          ))}
      </Stack>
    </Container>
  );
}

export default TbSkeleton;
