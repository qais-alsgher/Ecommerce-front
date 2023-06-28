import React from "react";
import { Grid, Box, Text, Flex } from "@chakra-ui/react";
import filterData from "../../assets/data/filterData.json";
import { Link } from "react-router-dom";
function Categories() {
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
            bgImg={`url(https://source.unsplash.com/800x450?${
              item === "Other" ? "sport" : item
            })`}
            // filter={"brightness(0.6)"}
            transition={"0.3s"}
            _hover={{
              filter: "brightness(0.7)",
            }}
          >
            <Text fontWeight={800} fontSize={"3xl"} p={4} color={"white"}>
              {item}
            </Text>
          </Box>
        </Link>
      ))}
    </Grid>
  );
}

export default Categories;
