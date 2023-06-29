import React from "react";
import { Tbody, Tr, Box, Td, useToast, Flex } from "@chakra-ui/react";
import Procect from "../../cart/Product";
import { useDispatch, useSelector } from "react-redux";
import DleteBtn from "../../cart/DeleteBtn";
import { deleteItem } from "../../../store/actions/adminAction";
import { selectToken } from "../../../store/features/authSlicer";
import EditModal from "./EditModal";

function TableBodyAllItems({ data }) {
  const dispach = useDispatch();
  const toast = useToast();
  const token = useSelector(selectToken);

  return (
    <Tbody>
      {data.map((item) => (
        <Tr key={item.id}>
          <Procect image={item.image[0]} title={item.title} id={item.id} />
          <Td>{item.category}</Td>
          <Td>
            <Flex alignItems="center" gap={2}>
              {item.color?.map((color) => (
                <Box w="20px" h="20px" borderRadius="50%" bg={color}></Box>
              ))}
            </Flex>
          </Td>
          <Td>{item.size?.map((size) => size + " / ")}</Td>

          <Td>{item.clothesGender}</Td>
          <Td>{item.price}</Td>
          <Td>
            <Flex alignItems="center" gap={2}>
              <EditModal item={item} />
              <DleteBtn
                handleDelete={() => {
                  deleteItem(
                    dispach,
                    {
                      id: item.id,
                      token: token,
                    },
                    toast
                  );
                }}
              />
            </Flex>
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
}

export default TableBodyAllItems;
