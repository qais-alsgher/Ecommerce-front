import React from "react";
import {
  Box,
  Input,
  HStack,
  FormControl,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

export default function InputForm({ children, type, placeholder, name }) {
  const style = {
    all: "unset",
    width: "100%",

    borderBottom: "4px solid #395B64",

    padding: "10px 10px 10px 40px",
    _hover: {
      boxShadow: "0 0 0 2px #395B64",
    },

    "&:focus": {
      boxShadow: "none",
      borderBottom: "4px solid #395B64",
    },
  };
  return (
    <FormControl
      w={"100%"}
      as={HStack}
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" fontSize={"20px"}>
          <children.type />
        </InputLeftElement>
        <Input
          name={name}
          placeholder={placeholder}
          type={type}
          css={style}
          required
          // variant="flushed"
        />
      </InputGroup>
    </FormControl>
  );
}
