import { React, useState } from "react";
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  Tooltip,
  VStack,
  Button,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/features/authSlicer";
import { addToCart } from "../../../store/actions/cartAction";
import { addToWishList } from "../../../store/actions/wishListAction";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const dispatch = useDispatch();
  // const history = useHistory();
  const Navigate = useNavigate();
  const user = useSelector(selectUser);
  const [show, setShow] = useState(false);
  const { colorMode } = useColorMode();
  const toast = useToast();

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "You must login first",
        status: "error",
        position: "top-right",
        isClosable: true,
      });
      return;
    }
    const data = {
      userId: user.id,
      itemId: item.id,
      quantity: 1,
      color: item?.color[0],
      size: item?.size[0],
    };
    addToCart(dispatch, data, user?.token, toast);
  };

  const handleAddToWishlist = () => {
    if (!user) {
      toast({
        title: "You must login first",
        status: "error",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    const data = {
      userId: user.id,
      itemId: item.id,
    };
    addToWishList(dispatch, data, user.token, toast);
  };

  const handleSHow = () => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  };

  const handleClose = () => {
    setTimeout(() => {
      setShow(false);
    }, 200);
  };

  return (
    <Flex
      w={{ base: "full", md: "auto" }}
      mt={8}
      alignItems="center"
      justifyContent="center"
      position={"relative"}
      rounded={"xl"}
      _hover={{
        cursor: "pointer",
        transform: "translateY(-10px)",
        transition: "0.3s",
      }}
      onMouseEnter={() => {
        handleSHow();
      }}
      onMouseLeave={() => {
        handleClose();
      }}
    >
      <Box position={"relative"}>
        <Box
          bg={colorMode === "light" ? "lightBlue.50" : "darkBlue.500"}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          onClick={() => {
            Navigate(`/Shop/item/${item.id}`);
          }}
        >
          <Image
            src={item.image[0]}
            alt={`Picture of ${item.title}`}
            roundedTop="lg"
            w="400px"
            h={{ base: "300px", md: "320px" }}
          />
          <Box p="6">
            <Box d="flex" alignItems="baseline"></Box>
            <Flex
              mt="1"
              justifyContent="space-between"
              alignContent="center"
            ></Flex>

            <VStack justifyContent="center" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                w="fit-content"
                textAlign={"center"}
              >
                {item.title}
              </Box>

              <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="xl" pr={1}>
                  $
                </Box>
                {item.price.toFixed(2)}
              </Box>
              <Rating rating={item.Reviews} flexDir="column" />
            </VStack>
          </Box>
        </Box>
        {/* add to wishlist button and add to cart button*/}

        <Tooltip
          label="Add to wishlist"
          bg={colorMode === "light" ? "lightBlue.200" : "gray.700"}
          placement={"left"}
          color={colorMode === "light" ? "black" : "white"}
          fontSize={"1.2em"}
          rounded="full"
        >
          <Button
            position="absolute"
            top={"10px"}
            right={show ? "10px" : "20px"}
            variant={"submitBtn"}
            w="fit-content"
            rounded="100%"
            transition={"0.3s"}
            opacity={show ? 1 : 0}
            fontSize={"1.2em"}
            onClick={() => {
              handleAddToWishlist();
            }}
          >
            <Icon as={FiHeart} />
          </Button>
        </Tooltip>

        <Tooltip
          label="Add to cart"
          bg={colorMode === "light" ? "lightBlue.200" : "gray.700"}
          placement={"top"}
          color={colorMode === "light" ? "black" : "white"}
          fontSize={"1.2em"}
          rounded="full"
        >
          <Button
            position="absolute"
            top={show ? "290px" : "350px"}
            right={0}
            variant={"submitBtn"}
            w="full"
            rounded="0"
            opacity={show ? 1 : 0}
            onClick={() => {
              handleAddToCart();
            }}
          >
            <Icon as={FiShoppingCart} />
          </Button>
        </Tooltip>
      </Box>
    </Flex>
  );
}

export default Card;
