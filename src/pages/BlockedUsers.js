import { React, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/features/authSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import { AiFillHeart } from "react-icons/ai";
import { getBlockUser } from "../store/actions/adminAction";
import { selectBlockedUsers } from "../store/features/adminSlicer";
import TableBodyBlockedUser from "../components/admin/blockedUser/TableBodyBlockedUser";

function BlockedUsers() {
  const token = useSelector(selectToken);
  const blockedUsers = useSelector(selectBlockedUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    getBlockUser(dispatch, token);
  }, []);

  return (
    <>
      {blockedUsers.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.wishlist} title={"WishList"}>
            <TableBodyBlockedUser data={blockedUsers} />
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

export default BlockedUsers;
