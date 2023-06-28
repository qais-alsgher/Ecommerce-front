import { React, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/features/authSlicer";
import { selectWishList } from "../store/features/wishListSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import { getWishList } from "../store/actions/wishListAction";
import { AiFillHeart } from "react-icons/ai";
import TableBodyWish from "../components/wishList/TableBodyWish";

function WishList() {
  const user = useSelector(selectUser);
  const wishListItems = useSelector(selectWishList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
    getWishList(dispatch, user.id);
  }, []);

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
