import React from "react";
import { Tbody, Tr, Box, Td, Flex, Text } from "@chakra-ui/react";
import Product from "../cart/Product";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TableBody({ data }) {
  const { tab } = useParams();

  return (
    <Tbody>
      {data.map((item) => (
        <Tr key={item.id}>
          <Product
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
          {tab === "All-Order" && (
            <>
              <Td>{item.User?.userName}</Td>
              <Td>
                <Link to={`mailto:${item.User?.email}`}>
                  {item.User?.email}
                </Link>
              </Td>
              <Td>
                <Link to={`tel:${item.User?.phoneNumber}`}>
                  {item.User?.phoneNumber}
                </Link>
              </Td>
              <Td>{item.User?.address}</Td>
            </>
          )}
        </Tr>
      ))}
    </Tbody>
  );
}

export default TableBody;
