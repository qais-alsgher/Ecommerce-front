import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../store/actions/itemAction";
import {
  selectPage,
  selectFilterData,
  selectItems,
} from "../../../store/features/itemSlicer";
// FaArrowRight
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function SliderPage() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const filterData = useSelector(selectFilterData);
  const items = useSelector(selectItems);

  const handleNextPage = () => {
    getItems(dispatch, { ...filterData, page: page + 1 });
  };
  const handlePreviousPage = () => {
    getItems(dispatch, { ...filterData, page: page - 1 });
  };
  const handlePage = (page) => {
    getItems(dispatch, { ...filterData, page: parseInt(page) });
  };

  return (
    <Flex align="center" justify="center" py={10}>
      <Button
        d="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        onClick={() => {
          handlePreviousPage();
          window.scrollTo(0, 0);
        }}
        isDisabled={page === 1}
      >
        <FaArrowLeft />
        Prev
      </Button>
      <Button
        variant={"outline"}
        display={page === 1 ? "none" : "block"}
        onClick={() => {
          handlePage(page - 1);
          window.scrollTo(0, 0);
        }}
        mx={4}
      >
        {page - 1}
      </Button>
      <Button mx={4}>{page}</Button>
      <Button
        onClick={() => {
          handlePage(page + 1);
          window.scrollTo(0, 0);
        }}
        isDisabled={items.length < 12}
        variant={"outline"}
        mx={4}
      >
        {page + 1}
      </Button>

      <Button
        d="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        onClick={() => {
          handleNextPage();
          window.scrollTo(0, 0);
        }}
        isDisabled={items.length < 12}
      >
        Next
        <FaArrowRight />
      </Button>
    </Flex>
  );
}

export default SliderPage;
