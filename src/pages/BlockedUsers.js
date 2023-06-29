import { React, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/features/authSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import { BsPersonSlash } from "react-icons/bs";
import { getBlockUser } from "../store/actions/adminAction";
import {
  selectBlockedUsers,
  selectAdminLoading,
} from "../store/features/adminSlicer";
import TableBodyBlockedUser from "../components/admin/blockedUser/TableBodyBlockedUser";
import TbSkeleton from "../components/skeleton/TbSkeleton";

function BlockedUsers() {
  const token = useSelector(selectToken);
  const blockedUsers = useSelector(selectBlockedUsers);
  const isLoading = useSelector(selectAdminLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    getBlockUser(dispatch, token);
  }, []);

  return (
    <>
      {blockedUsers.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.blackList} title={"Black List"}>
            <TableBodyBlockedUser data={blockedUsers} />
          </TableCom>
        </Container>
      ) : isLoading ? (
        <TbSkeleton />
      ) : (
        <NoProducts text={"Users added to the black list"}>
          <BsPersonSlash />
        </NoProducts>
      )}
    </>
  );
}

export default BlockedUsers;
