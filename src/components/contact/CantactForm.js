import React from "react";
import InputForm from "../auth/InputForm";
import SubmitBtn from "../auth/SubmitBtn";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function CantactForm() {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "light" ? "lightBlue.50" : "darkBlue.300"}
      borderRadius="lg"
    >
      <Box
        m={8}
        color={colorMode === "light" ? "darkBlue.300" : "lightBlue.100"}
      >
        <VStack gap={10}>
          <InputForm
            name={"userName"}
            type={"text"}
            placeholder="Enter your name"
          >
            <BsPerson />
          </InputForm>

          <InputForm
            name={"email"}
            type={"email"}
            placeholder="Enter your email"
          >
            <MdOutlineEmail />
          </InputForm>
          <FormControl id="name">
            <FormLabel>Message</FormLabel>
            <Textarea
              borderColor="gray.300"
              _hover={{
                borderRadius: "gray.300",
              }}
              placeholder="message"
            />
          </FormControl>
          <FormControl id="name" float="right">
            <SubmitBtn>Send Message</SubmitBtn>
          </FormControl>
        </VStack>
      </Box>
    </Box>
  );
}

export default CantactForm;
