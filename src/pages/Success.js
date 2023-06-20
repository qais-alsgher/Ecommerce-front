import { React, useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Box, Text, Button, useColorMode } from "@chakra-ui/react";
import { selectCartItems, selectQuintity } from "../store/features/cartSlicer";
import { payedSuccess } from "../store/actions/cartAction";
import { selectUser } from "../store/features/authSlicer";
import { getCartItems } from "../store/actions/cartAction";

function Success() {
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);
  const quintity = useSelector(selectQuintity);
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  useEffect(() => {
    try {
      if (!user) {
        window.location.href = "/login";
      } else {
        payedSuccess(dispatch, { quintity, userId: user.id });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Flex justify={"center"} align={"center"} h={"100vh"} w={"100%"}>
      <Box
        w={{ base: "90%", md: "70%", lg: "50%" }}
        bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}
        boxShadow={"lg"}
        rounded={"lg"}
        p={8}
        textAlign={"center"}
      >
        <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          Payment Successful
        </Text>
        <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} mt={4}>
          Thank you for your purchase!
        </Text>
        <Button as={"a"} href={"/"} mt={8} w={"full"} variant={"solid"}>
          Go to Home
        </Button>
      </Box>
    </Flex>
  );
}

export default Success;
