import { React, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/features/authSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import { getAllItems } from "../store/actions/adminAction";
import {
  selectAllItems,
  selectAdminLoading,
} from "../store/features/adminSlicer";
import { FiServer } from "react-icons/fi";
import TableBodyAllItems from "../components/admin/allItems/TableBodyAllItems";
import TbSkeleton from "../components/skeleton/TbSkeleton";

function AllItems() {
  const token = useSelector(selectToken);
  const allItems = useSelector(selectAllItems);
  const isLoading = useSelector(selectAdminLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllItems(dispatch, token);
  }, []);

  return (
    <>
      {allItems.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.allProducts} title={"All Items"}>
            <TableBodyAllItems data={allItems} />
          </TableCom>
        </Container>
      ) : isLoading ? (
        <TbSkeleton />
      ) : (
        <NoProducts text={"Products added"}>
          <FiServer />
        </NoProducts>
      )}
    </>
  );
}

export default AllItems;
