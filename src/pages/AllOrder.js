import { React, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/features/authSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import { RiBillFill } from "react-icons/ri";
import TableBody from "../components/order/TableBody";
import { getAllOrders } from "../store/actions/adminAction";
import { selectAllOrders } from "../store/features/adminSlicer";

function AllOrder() {
  const token = useSelector(selectToken);
  const order = useSelector(selectAllOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllOrders(dispatch, token);
  }, []);

  return (
    <>
      {order.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.order} title={"All Order"}>
            <TableBody data={order} />
          </TableCom>
        </Container>
      ) : (
        <NoProducts text={"added to the Order"}>
          <RiBillFill />
        </NoProducts>
      )}
    </>
  );
}

export default AllOrder;
