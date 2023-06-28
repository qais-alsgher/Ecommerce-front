import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Flex,
  Heading,
  HStack,
  Container,
  Input,
  Grid,
  useToast,
  Image,
  FormLabel,
  FormControl,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import EditBtn from "./EditBtn";
import { useSelector, useDispatch } from "react-redux";
import { FcAddImage } from "react-icons/fc";
import { Select, chakraComponents } from "chakra-react-select";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { validateItemImages } from "../../../store/actions/itemAction";
import { selectUpdatePreviewImage } from "../../../store/features/itemSlicer";
import { selectUser } from "../../..//store/features/authSlicer";
import filterData from "../../../assets/data/filterData.json";
import { updateItem } from "../../../store/actions/itemAction";

function EditModal({ item }) {
  const toast = useToast();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const previewImage = useSelector(selectUpdatePreviewImage);

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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();

    const size = multiyOption(e.target?.size);
    const colors = multiyOption(e.target?.colors);
    const data = {
      title: e.target?.title?.value ? e.target?.title?.value : item.title,
      description: e.target?.description?.value
        ? e.target?.description?.value
        : item.description,

      image: previewImage ? previewImage : item.image,
      category: e.target?.category?.value
        ? e.target?.category?.value
        : item.category,
      price: e.target?.price?.value ? e.target?.price?.value : item.price,
      color: colors[0] ? colors : item.color,
      size: size[0] ? size : item.size,
      clothesGender: e.target?.gender?.value
        ? e.target?.gender?.value
        : item.clothesGender,
    };

    updateItem(dispatch, { data, id: item.id, token: user.token }, toast);
    onClose();
  };

  return (
    <>
      <EditBtn
        hadleClick={() => {
          onOpen();
        }}
      />
      <Modal onClose={onClose} size={"4xl"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <Container maxW="container.xl" pt={10}>
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
                    placeholder={item.title}
                    type="text"
                    variant="flushed"
                    name="title"
                    p={4}
                    fontSize={"lg"}
                  />
                  <Input
                    placeholder={item.price}
                    variant="flushed"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    name="price"
                    fontSize={"lg"}
                  />
                  <Select
                    placeholder={item.category}
                    variant="flushed"
                    name="category"
                    options={option(filterData.category)}
                    size={"lg"}
                  />

                  <Select
                    placeholder={item.clothesGender}
                    variant="flushed"
                    name="gender"
                    options={option(filterData.genders)}
                    size={"lg"}
                  />
                  <FormControl w="100%" h="300px">
                    <Select
                      placeholder={item.size?.map((size) => size + " / ")}
                      variant="flushed"
                      isMulti
                      name="size"
                      options={option(filterData.size)}
                      closeMenuOnSelect={false}
                      components={components}
                      size={"lg"}
                    />
                  </FormControl>

                  <FormControl
                    w="100%"
                    h="300px"
                    mt={{ base: "-250px", md: "0" }}
                  >
                    <Select
                      variant="flushed"
                      w="100%"
                      h="100%"
                      isMulti
                      name="colors"
                      options={option(filterData.colors)}
                      placeholder={item.color?.map((color) => color + " / ")}
                      closeMenuOnSelect={false}
                      components={components}
                      size={"lg"}
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
                        validateItemImages(dispatch, e, false, toast);
                      }}
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
                              key={item}
                            />
                          );
                        })
                      : item.image?.map((item) => {
                          return (
                            <Image
                              maxW={"100px"}
                              maxH={"100px"}
                              src={item}
                              boxShadow={"md"}
                              key={item}
                            />
                          );
                        })}
                  </Flex>
                </Grid>
                <Textarea
                  placeholder={item.description}
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
                  <Button type="submit" size="lg">
                    Submit
                  </Button>
                </HStack>
              </form>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditModal;
