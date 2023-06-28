import { React, useState} from "react";
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  CloseButton,
  RadioGroup,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import filterData from "../../../assets/data/filterData";
import PriceSlider from "./PriceSlider";
import NavItem from "./NavItem";
import SectionTitle from "./SectionTitle";
import { getItems } from "../../../store/actions/itemAction";
import { useDispatch } from "react-redux";
function FilterSliderContent({ onClose, ...rest }) {
  const [sliderValue, setSliderValue] = useState(1000);
  const [categoryValue, setCategoryValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60, lg: 80 }}
      pos="fixed"
      h="full"
      {...rest}
      zIndex={999}
    >
      <Flex h="20" alignItems="center" mx="4" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="semibold">
          Filter
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          onClick={() => {
            setSliderValue(1000);
            setCategoryValue("");
            setGenderValue("");
          }}
          _hover={{ cursor: "pointer" }}
        >
          Clean All
        </Text>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <form
        onSubmit={(e) => {
          getItems(dispatch, {
            e,
            category: categoryValue,
            gender: genderValue,
            price: sliderValue,
            page: 1,
          });
        }}
      >
        <SectionTitle>Category</SectionTitle>
        <RadioGroup onChange={setCategoryValue} value={categoryValue}>
          {filterData.category?.map((Radio) => (
            <NavItem key={Radio}>{Radio}</NavItem>
          ))}
        </RadioGroup>
        <SectionTitle>Gender</SectionTitle>
        <RadioGroup onChange={setGenderValue} value={genderValue}>
          {filterData.genders?.map((Radio) => (
            <NavItem key={Radio}>{Radio}</NavItem>
          ))}
        </RadioGroup>
        <SectionTitle>Price</SectionTitle>
        <PriceSlider
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />

        <Button variant={"submitBtn"} my={8} type="submit">
          Apply
        </Button>
      </form>
    </Box>
  );
}

export default FilterSliderContent;
