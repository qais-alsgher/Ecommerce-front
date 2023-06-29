import React from "react";
import { useDispatch } from "react-redux";
import { Flex, Box, Text, useColorMode, useToast } from "@chakra-ui/react";
import InputForm from "../components/auth/InputForm";
import SubmitBtn from "../components/auth/SubmitBtn";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { verifyUser } from "../store/actions/authAction";

function Verification() {
  const { id } = useParams();
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const toast = useToast();
  console.log(id);
  return (
    <Flex justify={"center"} align={"center"} h={"100vh"} w={"100%"}>
      <Box
        w={{ base: "90%", md: "60%", lg: "40%" }}
        bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}
        boxShadow={"lg"}
        rounded={"lg"}
        p={16}
      >
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          textAlign={"center"}
          mt={4}
          pb={10}
        >
          Please Login to erify your account
        </Text>
        <form
          onSubmit={(e) => {
            verifyUser(dispatch, { e, id }, toast);
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <InputForm
            type={"text"}
            placeholder={"Username Or Email"}
            name={"email"}
          >
            <FaUserAlt />
          </InputForm>

          <InputForm
            type={"password"}
            placeholder={"Password"}
            name={"password"}
          >
            <FaLock />
          </InputForm>

          <SubmitBtn>Login</SubmitBtn>
        </form>
      </Box>
    </Flex>
  );
}

export default Verification;
