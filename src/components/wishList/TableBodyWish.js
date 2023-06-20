import React from "react";
import {
  Tbody,
  Tr,
  Box,
  Td,
  Image,
  NumberInput,
  NumberInputField,
  Button,
  useToast,
} from "@chakra-ui/react";
import Procect from "../cart/Procect";
import DleteBtn from "../cart/DleteBtn";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCartItem } from "../../store/actions/cartAction";
import { deleteWishListItem } from "../../store/actions/wishListAction";
import { selectUser } from "../../store/features/authSlicer";

function TableBodyWish({ data }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const toast = useToast();

  return (
    <Tbody>
      {data.map((item) => (
        <Tr key={item.id}>
          {console.log(item.Item?.size)}
          <Procect
            image={item.Item?.image[0]}
            title={item.Item?.title}
            id={item.id}
          />
          <Td>$ {item.Item?.price}</Td>
          <Td>{item.Item?.size?.map((size) => size + " / ")}</Td>
          <Td>
            <Button
              leftIcon={<AiOutlineShoppingCart />}
              variant="outline"
              w="80%"
              rounded="lg"
              onClick={() => {
                addToCart(
                  dispatch,
                  {
                    userId: user.id,
                    itemId: item.Item.id,
                    quantity: 1,
                    color: item.Item.color[0],
                    size: item.size[0],
                    // size: item.Item.size
                  },
                  toast
                );
                deleteWishListItem(dispatch, item.id, toast);
                console.log(item.Item);
              }}
            >
              Add to cart
            </Button>
          </Td>
          <Td>
            <DleteBtn
              handleDelete={() => {
                deleteWishListItem(dispatch, item.id, toast);
              }}
            />
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
}

export default TableBodyWish;
