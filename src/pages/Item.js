import { React, useEffect, useState } from "react";
import {
  Image,
  Text,
  Flex,
  Button,
  Container,
  useToast,
  useColorMode,
  Icon,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/features/authSlicer";
import { addToCart } from "../store/actions/cartAction";
import { addToWishList } from "../store/actions/wishListAction";
import Rating from "../components/items/cardItem/Rating";
import { getItemById } from "../store/actions/itemAction";
import { selectOneItem } from "../store/features/itemSlicer";
import { useParams } from "react-router-dom";
import Selecttor from "../components/item/Selecttor";
import InputCounter from "../components/cart/InputCounter";
import { StarRating } from "../components/item/StarRating";
import { addReview } from "../store/actions/itemAction";
import ReviewRead from "../components/item/ReviewRead";

function Item() {
  const user = useSelector(selectUser);
  const item = useSelector(selectOneItem);
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const toast = useToast();

  const toastError = (title) => {
    toast({
      title: title,
      status: "error",
      position: "top-right",
      isClosable: true,
    });
  };

  const handleClick = (index) => {
    setRating(index);
  };

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "You must login first",
        status: "error",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    if (!color || !size) {
      toastError("You must select color and size");
      return;
    }
    const data = {
      userId: user.id,
      itemId: item.id,
      quantity: quantity,
      color: color,
      size: size,
    };
    addToCart(dispatch, data, user.token, toast);
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

  useEffect(() => {
    getItemById(dispatch, id);
  }, [dispatch, id]);

  useEffect(() => {
    setImage(item?.image[0]);
  }, [item]);

  return (
    <Container maxW="container.xl">
      <Flex
        py={10}
        minH={`calc(100vh - 200px)`}
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap={12}
        mt={10}
      >
        <Flex flexBasis={{ base: "100%", md: "50%" }}>
          <Flex
            flexDir={{ base: "column-reverse", lg: "row" }}
            overflow={"hidden"}
            gap={5}
          >
            <Flex flexDir={{ base: "row", lg: "column" }} gap={5}>
              {item?.image?.map((img) => {
                return (
                  <Image
                    cursor="pointer"
                    w="100px"
                    h="100px"
                    filter={image === img ? "none" : "brightness(0.5)"}
                    src={img}
                    onClick={() => {
                      setImage(img);
                    }}
                  />
                );
              })}
            </Flex>
            <Image w={{ base: "100%", lg: "80%" }} h="100%" src={image} />
          </Flex>
        </Flex>
        <Flex gap={5} flexBasis={{ base: "100%", md: "50%" }} flexDir="column">
          <Heading>{item?.title}</Heading>
          <Rating rating={item?.Reviews} justifyContent="flex-start" />
          <Text fontSize="2xl">$ {item?.price}</Text>
          <Text fontSize="xl">{item?.description}</Text>
          <Selecttor
            data={item?.color}
            isColor={true}
            title="Color"
            handleClick={(value) => setColor(value)}
            w="20px"
            h="20px"
            borderRadius="100%"
          />
          <Selecttor
            data={item?.size}
            title="Size"
            handleClick={(value) => setSize(value)}
          />
          <Flex alignItems={"center"} gap={5}>
            <Text fontSize="xl">Quantity :</Text>
            <InputCounter
              quantity={quantity}
              handleClick={(value) => setQuantity(value)}
            />
          </Flex>
          <Flex gap={5} mt={5}>
            <Button
              p={6}
              leftIcon={<Icon as={AiOutlineShoppingCart} />}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
            <Button
              p={6}
              leftIcon={<Icon as={AiFillHeart} />}
              onClick={handleAddToWishlist}
            >
              Add to wish list
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* read reviews and create reviews */}
      <Flex flexDir="column" py={10} mb={10}>
        <Heading> Reviews</Heading>
        <Flex
          flexDir="column"
          gap={5}
          p={10}
          bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.300"}
          borderRadius={10}
        >
          <ReviewRead
            review={item?.Reviews}
            handleClick={handleClick}
            rating={rating}
          />

          <form
            onSubmit={(e) => {
              addReview(
                dispatch,
                {
                  e,
                  data: {
                    userId: user.id,
                    itemId: item.id,
                    rating: rating ? rating : 0,
                  },
                  token: user.token,
                },
                toast
              );
            }}
          >
            <Flex flexDir="column" gap={5} pt={5}>
              <Heading>Write a review</Heading>
              <Flex flexDir="column" gap={5}>
                <Flex justifyContent="flex-start" alignItems="center" gap={5}>
                  <Text fontSize="xl">Your rating</Text>
                  <StarRating handleClick={handleClick} rating={rating} />
                </Flex>
                <Textarea
                  placeholder="Write your review here"
                  name="review"
                  size="lg"
                  resize="none"
                  h="200px"
                />
                <Button type="submit" colorScheme="green" size="lg">
                  Submit
                </Button>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Item;
