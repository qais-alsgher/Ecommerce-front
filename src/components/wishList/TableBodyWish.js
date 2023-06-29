import React from "react";
import { Tbody, Tr, Td, Button, useToast } from "@chakra-ui/react";
import Procect from "../cart/Product";
import DleteBtn from "../cart/DeleteBtn";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cartAction";
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
          <Procect
            image={item.Item?.image[0]}
            title={item.Item?.title}
            id={item.Item?.id}
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
                  },
                  user.token,
                  toast
                );
                deleteWishListItem(
                  dispatch,
                  { id: item.id, token: user.token },
                  toast
                );
              }}
            >
              Add to cart
            </Button>
          </Td>
          <Td>
            <DleteBtn
              handleDelete={() => {
                deleteWishListItem(
                  dispatch,
                  { id: item.id, token: user.token },
                  toast
                );
              }}
            />
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
}

export default TableBodyWish;
