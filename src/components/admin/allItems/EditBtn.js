import React from "react";
import { HiPencil } from "react-icons/hi";
import { Icon } from "@chakra-ui/react";

function EditBtn({ hadleClick }) {
  return (
    <Icon
      as={HiPencil}
      boxSize={6}
      cursor="pointer"
      _hover={{ color: "lightblue" }}
      onClick={() => hadleClick()}
    />
  );
}

export default EditBtn;
