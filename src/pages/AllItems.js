import { React, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/features/authSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import { getAllItems } from "../store/actions/adminAction";
import { selectAllItems } from "../store/features/adminSlicer";
import { FiServer } from "react-icons/fi";
import TableBodyAllItems from "../components/admin/allItems/TableBodyAllItems";

function AllItems() {
  const token = useSelector(selectToken);
  const allItems = useSelector(selectAllItems);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllItems(dispatch, token);
  }, []);

  return (
    <>
      {allItems.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.cart} title={"All Items"}>
            <TableBodyAllItems data={allItems} />
          </TableCom>
        </Container>
      ) : (
        <NoProducts text={"added"}>
          <FiServer />
        </NoProducts>
      )}
    </>
  );
}

export default AllItems;
