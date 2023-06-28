import { React, useEffect } from "react";
import { Container, Button, useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../store/actions/cartAction";
import { selectUser } from "../store/features/authSlicer";
import { selectCartItems, selectQuintity } from "../store/features/cartSlicer";
import TableCom from "../components/cart/TableCom";
import tableData from "../assets/data/tableData.json";
import { checkoutCart } from "../store/actions/cartAction";
import NoProducts from "../components/cart/NoProducts";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TableBody from "../components/cart/TableBody";

function Cart() {
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);
  const quintity = useSelector(selectQuintity);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
    getCartItems(dispatch, user.id);
  }, []);

  return (
    <>
      {cartItems.length > 0 ? (
        <Container maxW="container.xl" py={10}>
          <TableCom tableHeadData={tableData?.cart} title={"Cart"}>
            <TableBody data={cartItems} />
            <Button
              m={6}
              fontSize="lg"
              onClick={() =>
                checkoutCart(dispatch, { cartItems, quintity }, toast)
              }
            >
              checkout
            </Button>
          </TableCom>
        </Container>
      ) : (
        <NoProducts text={"added to the cart"}>
          <AiOutlineShoppingCart />
        </NoProducts>
      )}
    </>
  );
}

export default Cart;
