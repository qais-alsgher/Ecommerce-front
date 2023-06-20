import React from "react";
import { Avatar, Flex, FormLabel, Input, useToast } from "@chakra-ui/react";
import { IoAddCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectPreviewImage } from "../../store/features/authSlicer";
import { useDispatch } from "react-redux";
import {
  signUp,
  uploadImage,
  validateImage,
} from "../../store/actions/authAction";

export default function UserImgInput() {
  const previewImage = useSelector(selectPreviewImage);
  const dispatch = useDispatch();
  const toast = useToast();

  return (
    <Flex justify="center" align="end">
      <Avatar
        size="2xl"
        src={previewImage}
        boxShadow={{ base: "none", sm: "0 0 60px rgba(0, 0, 0, 0.5)" }}
      />
      <FormLabel htmlFor="image" mb="10" ml="-5">
        <IoAddCircle
          style={{
            width: "25px",
            height: "25px",
            cursor: "pointer",
            position: "absolute",
          }}
        />
      </FormLabel>
      <Input
        type="file"
        id="image"
        name="image"
        hidden
        accept="image/png, image/jpeg"
        //   onChange={(e) => validateImage(e, dispatch, toast)}

        onChange={(e) => {
          validateImage(dispatch, e, toast);
        }}
      />
    </Flex>
  );
}
