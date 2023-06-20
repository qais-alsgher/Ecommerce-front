import { React, useEffect } from "react";
import {
  Container,
  Button,
  useToast,
  Flex,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../store/actions/cartAction";
import { selectUser } from "../store/features/authSlicer";
import { selectWishList } from "../store/features/wishListSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import { checkoutCart } from "../store/actions/cartAction";
import NoProducts from "../components/cart/NoProducts";
import { getWishList } from "../store/actions/wishListAction";
import { AiFillHeart } from "react-icons/ai";
import TableBodyWish from "../components/wishList/TableBodyWish";

function WishList() {
  const user = useSelector(selectUser);
  const wishListItems = useSelector(selectWishList);
  //   const quintity = useSelector(selectQuintity);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
    getWishList(dispatch, user.id);
  }, [dispatch]);

  return (
    <>
      {wishListItems.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.wishlist} title={"WishList"}>
            <TableBodyWish data={wishListItems} />
          </TableCom>
        </Container>
      ) : (
        <NoProducts text={"added to the wishlist"}>
          <AiFillHeart />
        </NoProducts>
      )}
    </>
  );
}

export default WishList;
