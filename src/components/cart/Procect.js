import React from "react";
import { Td, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Procect({ image, title, id }) {
  return (
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
  );
}

export default Procect;
