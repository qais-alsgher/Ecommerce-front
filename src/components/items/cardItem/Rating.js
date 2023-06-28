import React from "react";
import {
  Box,
  HStack,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Rating({ rating, ...rest }) {
  let AvgRating = rating;
  let numReviews = 1;
  if (typeof rating === "object") {
    AvgRating = rating?.reduce((a, b) => a + b.rating, 0) / rating?.length;
    numReviews = rating?.length;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={1}
      {...rest}
    >
      <HStack gap={0.5}>
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(AvgRating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "lightBlue.300" : "barkBlue.100"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
      </HStack>
      <Box as="span" color="barkBlue.500" fontSize="md">
        ( {numReviews} Review{numReviews > 1 && "s"} )
      </Box>
    </Box>
  );
}

export default Rating;
