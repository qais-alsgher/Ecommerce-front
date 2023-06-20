import React from "react";
import { Tbody, Tr, Box, Td, Flex, Text } from "@chakra-ui/react";
import Procect from "../cart/Procect";

function TableBody({ data }) {
  return (
    <Tbody>
      {data.map((item) => (
        <Tr key={item.id}>
          {console.log(item)}
          <Procect
            image={item.Item?.image[0]}
            title={item.Item?.title}
            id={item.id}
          />
          <Td>$ {item.Item?.price}</Td>
          <Td>{item.size}</Td>
          <Td>
            <Flex alignItems="center" gap={2}>
              <Box w="20px" h="20px" borderRadius="50%" bg={item.color}></Box>
              <Text>{item?.color?.toUpperCase()}</Text>
            </Flex>
          </Td>
          <Td>{item.quantity}</Td>
          <Td>$ {item.Item?.price * item.quantity}</Td>
        </Tr>
      ))}
    </Tbody>
  );
}

export default TableBody;
