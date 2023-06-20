import React from "react";
import { Image, Grid } from "@chakra-ui/react";
import puma from "../../assets/images/puma.png";
import nike from "../../assets/images/nike.png";
import adidas from "../../assets/images/adidas.png";
import jordan from "../../assets/images/jordan.png";
function Partner() {
  return (
    <Grid
      templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
      mb={16}
    >
      <Image src={puma} alt="puma" maxH={"200px"} maxW={"200px"} />
      <Image src={nike} alt="nike" maxH={"200px"} maxW={"200px"} />
      <Image src={adidas} alt="adidas" maxH={"200px"} maxW={"200px"} />
      <Image src={jordan} alt="jordan" maxH={"200px"} maxW={"200px"} />
    </Grid>
  );
}

export default Partner;
