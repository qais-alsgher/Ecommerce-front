import { React, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import TableBodyAllUser from "../components/admin/allUsers/TableBodyAllUser";
import { getAllUsers } from "../store/actions/adminAction";
import { selectAllUsers } from "../store/features/adminSlicer";
import { selectToken } from "../store/features/authSlicer";
import { BsPerson } from "react-icons/bs";

function AllUsers() {
  const token = useSelector(selectToken);
  const allUsers = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers(dispatch, token);
  }, []);

  return (
    <>
      {allUsers.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.wishlist} title={"All Users"}>
            <TableBodyAllUser data={allUsers} />
          </TableCom>
        </Container>
      ) : (
        <NoProducts text={"added to the wishlist"}>
          <BsPerson />
        </NoProducts>
      )}
    </>
  );
}

export default AllUsers;
