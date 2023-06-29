import { React, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../store/actions/cartAction";
import { selectUser } from "../store/features/authSlicer";
import { selectOrder, selectCartLoading } from "../store/features/cartSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import NoProducts from "../components/cart/NoProducts";
import { RiBillFill } from "react-icons/ri";
import TableBody from "../components/order/TableBody";
import TbSkeleton from "../components/skeleton/TbSkeleton";

function Order() {
  const orders = useSelector(selectOrder);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectCartLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
    getOrders(dispatch, user);
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
        <>
          {isLoading ? (
            <TbSkeleton />
          ) : (
            <NoProducts text={"Products added to the Order"}>
              <RiBillFill />
            </NoProducts>
          )}
        </>
      )}
    </>
  );
}

export default Order;
