import React from "react";
import { BsPersonSlash } from "react-icons/bs";
import { IconButton, Tooltip, useColorMode, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { blockUser } from "../../../store/actions/adminAction";
import { selectToken } from "../../../store/features/authSlicer";

function AddToBlackListBtn({ id }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const { colorMode } = useColorMode();
  const token = useSelector(selectToken);

  return (
    <Tooltip
      label="Add to blacklist"
      bg={colorMode === "light" ? "lightBlue.200" : "gray.700"}
      placement={"top"}
      color={colorMode === "light" ? "black" : "white"}
      fontSize={"1.2em"}
      rounded="full"
    >
      <IconButton
        aria-label="Active User"
        icon={<BsPersonSlash />}
        variant="outline"
        size="md"
        onClick={() => {
          blockUser(
            dispatch,
            {
              id: id,
              token: token,
            },
            toast
          );
        }}
      />
    </Tooltip>
  );
}

export default AddToBlackListBtn;
