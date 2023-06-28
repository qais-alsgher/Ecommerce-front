import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../items/cardItem/Card";

function TopSellingCarousel({ items }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      pb={10}
    >
      <Box width="100%" maxWidth="1200px">
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay
          autoPlaySpeed={20000}
          keyBoardControl
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {items?.map((item) => (
            <Box key={item.id} p={5}>
              <Card item={item?.Item} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
}

export default TopSellingCarousel;
