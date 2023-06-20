import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

function DleteBtn({ handleDelete }) {
  return (
    <Icon
      as={AiFillDelete}
      boxSize={6}
      cursor="pointer"
      onClick={handleDelete}
      _hover={{ color: "red.600" }}
    />
  );
}

export default DleteBtn;
