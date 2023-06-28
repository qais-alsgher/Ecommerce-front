import React from "react";
import { BiUserCheck } from "react-icons/bi";
import { IconButton, Tooltip, useColorMode, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { activeUser } from "../../../store/actions/adminAction";
import { selectToken } from "../../../store/features/authSlicer";

function ActiveUserBtn({ id }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const { colorMode } = useColorMode();
  const token = useSelector(selectToken);

  return (
    <Tooltip
      label="Remove block"
      bg={colorMode === "light" ? "lightBlue.200" : "gray.700"}
      placement={"top"}
      color={colorMode === "light" ? "black" : "white"}
      fontSize={"1.2em"}
      rounded="full"
    >
      <IconButton
        aria-label="Active User"
        icon={<BiUserCheck />}
        variant="outline"
        size="md"
        onClick={() => {
          activeUser(
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

export default ActiveUserBtn;
