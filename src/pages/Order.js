import { React, useEffect } from "react";
import { Container, Button, useToast, useColorMode } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../store/actions/cartAction";
import { selectUser } from "../store/features/authSlicer";
import { selectOrder } from "../store/features/cartSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TableBody from "../components/order/TableBody";

function Order() {
  const user = useSelector(selectUser);
  const order = useSelector(selectOrder);
  const colorMode = useColorMode();
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    getOrders(dispatch, user.id);
  }, []);

  return (
    <>
      {order.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.order} title={"Orders"}>
            <TableBody data={order} />
          </TableCom>
        </Container>
      ) : (
        <NoProducts text={"added to the Order"}>
          <AiOutlineShoppingCart />
        </NoProducts>
      )}
    </>
  );
}

export default Order;
