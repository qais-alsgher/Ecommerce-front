import React from "react";
import { Grid, Box, Text, Flex } from "@chakra-ui/react";
import filterData from "../../assets/data/filterData.json";
import { Link } from "react-router-dom";
import Jacket from "../../assets/images/cat/Jacket.jpg";
import Pajamas from "../../assets/images/cat/Pajamas.jpg";
import Sweatpants from "../../assets/images/cat/Sweatpants.jpg";
import Tshirt from "../../assets/images/cat/T-shirt.jpg";
import Sneakers from "../../assets/images/cat/Sneakers.jpg";
import Other from "../../assets/images/cat/Other.jpg";

function Categories() {
  const bgRender = (item) => {
    switch (item) {
      case "Jacket":
        return `url(${Jacket})`;
      case "Pajamas":
        return `url(${Pajamas})`;
      case "Sweatpants":
        return `url(${Sweatpants})`;
      case "T-shirt":
        return `url(${Tshirt})`;
      case "Sneakers":
        return `url(${Sneakers})`;
      case "Other":
        return `url(${Other})`;
      default:
        return `url(${Other})`;
    }
  };

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={6}
      mb={16}
    >
      {filterData.category.map((item) => (
        <Link to={`/Shop/${item}`}>
          <Box
            key={item.id}
            p={4}
            h={"250px"}
            borderWidth={"1px"}
            borderRadius={"lg"}
            overflow={"hidden"}
            as={Flex}
            alignItems={"center"}
            justifyContent={"center"}
            // give a background image for each category
            bgImage={bgRender(item)}
            bgSize={"cover"}
            // filter={"brightness(0.6)"}
            transition={"0.3s"}
            _hover={{
              filter: "brightness(0.7)",
            }}
          >
            <Text fontWeight={800} fontSize={"3xl"} p={4} color={"black"}>
              {item}
            </Text>
          </Box>
        </Link>
      ))}
    </Grid>
  );
}

export default Categories;
