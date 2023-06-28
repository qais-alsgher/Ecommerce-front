import React from "react";
import { Tbody, Tr, Td, useToast } from "@chakra-ui/react";
import DleteBtn from "./DleteBtn";
import Procect from "./Product";
import { deleteCartItem } from "../../store/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { addQuintityToCart } from "../../store/actions/cartAction";
import { selectQuintity } from "../../store/features/cartSlicer";
import InputCounter from "./InputCounter";

function TableBody({ data }) {
  const quintity = useSelector(selectQuintity);
  const dispatch = useDispatch();
  const toast = useToast();

  return (
    <Tbody>
      {data.map((item) => (
        <Tr key={item.id}>
          <Procect
            image={item.Item?.image[0]}
            title={item.Item?.title}
            id={item.Item?.id}
          />
          <Td>$ {item.Item?.price}</Td>
          <Td>
            <InputCounter
              quantity={quintity[item.id] ? quintity[item.id] : item.quantity}
              handleClick={(value) =>
                addQuintityToCart(dispatch, {
                  id: item.id,
                  value,
                })
              }
            />
          </Td>
          <Td>
            ${" "}
            {(quintity[item.id] ? quintity[item.id] : item.quantity) *
              item.Item?.price}
          </Td>
          <Td>
            <DleteBtn
              handleDelete={() => {
                deleteCartItem(dispatch, item.id, toast);
              }}
            />
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
}

export default TableBody;
