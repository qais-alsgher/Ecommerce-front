import React from "react";
import {
  Flex,
  Heading,
  HStack,
  Container,
  Input,
  Button,
  Grid,
  useToast,
  Image,
  FormLabel,
  FormControl,
  Textarea,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { FcAddImage } from "react-icons/fc";
import filterData from "../assets/data/filterData.json";
import { Select, chakraComponents } from "chakra-react-select";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { validateItemImages, addItem } from "../store/actions/itemAction";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPreviewImage,
  selectIsLoading,
} from "../store/features/itemSlicer";
import { selectUser } from "../store/features/authSlicer";

function AddItems() {
  const toast = useToast();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const previewImage = useSelector(selectPreviewImage);

  const option = (data) => {
    let optionData = [];
    data?.forEach((item) => {
      optionData.push({ value: item, label: item });
    });
    return optionData;
  };

  const createUrl = (data) => {
    let urlData = [];
    data?.forEach((item) => {
      urlData.push(URL.createObjectURL(item));
    });
    return urlData;
  };

  const components = {
    ClearIndicator: (props) => (
      <chakraComponents.ClearIndicator {...props}>
        <Icon as={IoMdCloseCircleOutline} w={4} h={4} />
      </chakraComponents.ClearIndicator>
    ),
    DropdownIndicator: (props) => (
      <chakraComponents.DropdownIndicator {...props}>
        <Icon as={AiFillCaretDown} />
      </chakraComponents.DropdownIndicator>
    ),
  };

  const multiyOption = (data) => {
    let dataOption = [];
    if (typeof data === "object" && data.length > 0) {
      data.forEach((item) => {
        dataOption.push(item.value);
      });
      return dataOption;
    }
    return [data.value];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const size = multiyOption(e.target?.size);
    const colors = multiyOption(e.target?.colors);
    if (previewImage.length === 0)
      return toast({
        title: "Error",
        description: "Please add image",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

    const data = {
      userId: user?.id,
      title: e.target?.title?.value,
      description: e.target?.description?.value,
      image: previewImage,
      category: e.target?.category?.value,
      price: e.target?.price?.value,
      color: colors,
      size: size,
      clothesGender: e.target?.gender?.value,
    };

    addItem(dispatch, { data, token: user.token }, toast);

    e.target.reset();
  };

  return (
    <Container maxW="container.lg" pt={10}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Heading size="lg" textAlign={"center"} mb={10}>
          Add Items
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={12}
          my={10}
        >
          <Input
            placeholder="Item Name"
            type="text"
            variant="flushed"
            name="title"
            p={4}
            fontSize={"lg"}
            required
          />
          <Input
            placeholder="Item Price"
            variant="flushed"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            name="price"
            fontSize={"lg"}
            required
          />
          <Select
            placeholder="Select Category"
            variant="flushed"
            name="category"
            options={option(filterData.category)}
            size={"lg"}
            required
          />

          <Select
            placeholder="Slect clothes type"
            variant="flushed"
            name="gender"
            options={option(filterData.genders)}
            size={"lg"}
            required
          />
          <FormControl w="100%" h="300px">
            <Select
              placeholder="Select Size"
              variant="flushed"
              isMulti
              name="size"
              options={option(filterData.size)}
              closeMenuOnSelect={false}
              components={components}
              size={"lg"}
              required
            />
          </FormControl>

          <FormControl w="100%" h="300px" mt={{ base: "-250px", md: "0" }}>
            <Select
              variant="flushed"
              w="100%"
              h="100%"
              isMulti
              name="colors"
              options={option(filterData.colors)}
              placeholder="Select some colors..."
              closeMenuOnSelect={false}
              components={components}
              size={"lg"}
              required
            />
          </FormControl>
          <FormControl mt={"-280px"}>
            <FormLabel
              htmlFor="image"
              position={"absolute"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <Icon as={FcAddImage} w={20} h={20} />
              Upload Image
            </FormLabel>
            <Input
              type="file"
              multiple
              variant="flushed"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              hidden
              onChange={(e) => {
                validateItemImages(dispatch, e, true, toast);
              }}
              required
            />
          </FormControl>
          <Flex mt={{ base: "-200px", md: "-280px" }} gap={5}>
            {previewImage
              ? createUrl(previewImage).map((item) => {
                  return (
                    <Image
                      maxW={"100px"}
                      maxH={"100px"}
                      src={item}
                      boxShadow={"md"}
                    />
                  );
                })
              : null}
          </Flex>
        </Grid>
        <Textarea
          placeholder="Item Description"
          name="description"
          p={4}
          mt={{ base: "-100px", md: "-200px" }}
          size="lg"
          resize="none"
          h="150px"
          boxShadow={"md"}
          fontSize={"lg"}
        />
        <HStack flexDir={"row-reverse"}>
          <Button
            type="submit"
            size="lg"
            mt={"-80px"}
            w={"30%"}
            disabled={isLoading}
          >
            {isLoading ? <Spinner size="md" /> : "Submit"}
          </Button>
        </HStack>
      </form>
    </Container>
  );
}

export default AddItems;
