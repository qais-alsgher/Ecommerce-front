import React from "react";
import { Td, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Product({ image, title, id }) {
  return (
    <>
      {id ? (
        <Link to={`/Shop/${id}`}>
          <Td display="flex" alignItems="center" justify="center" gap={5}>
            <Image
              src={image}
              alt={title}
              boxSize="50px"
              objectFit="cover"
              rounded="lg"
            />
            <Box>{title}</Box>
          </Td>
        </Link>
      ) : (
        <Td display="flex" alignItems="center" justify="center" gap={5}>
          <Image
            src={image}
            alt={title}
            boxSize="50px"
            objectFit="cover"
            rounded="lg"
          />
          <Box>{title}</Box>
        </Td>
      )}
    </>
  );
}

export default Product;
