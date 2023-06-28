import { React, useEffect } from "react";
import { Container, Button, useToast, useColorMode } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../store/actions/cartAction";
import { selectUser } from "../store/features/authSlicer";
import { selectOrder } from "../store/features/cartSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import { RiBillFill } from "react-icons/ri";
import TableBody from "../components/order/TableBody";
import { getAllOrders } from "../store/actions/adminAction";
import { selectAllOrders } from "../store/features/adminSlicer";

function Order() {
  const user = useSelector(selectUser);
  const orders = useSelector(selectAllOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllOrders(dispatch);
  }, []);

  return (
    <>
      {orders.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.order} title={"Orders"}>
            <TableBody data={orders} />
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

export default Order;
