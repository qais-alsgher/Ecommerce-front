import { Box, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

export const StarRating = ({ rating, handleClick }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const renderStars = () => {
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      const fill =
        i <= (hoverRating || rating) ? "lightBlue.300" : "barkBlue.100";

      stars.push(
        <Icon
          key={i}
          as={i <= (hoverRating || rating) ? BsStarFill : BsStar}
          fontSize={"10px"}
          boxSize={6}
          color={fill}
          cursor="pointer"
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        />
      );
    }

    return stars;
  };

  return (
    <Box>
      <Box>{renderStars()}</Box>
    </Box>
  );
};
