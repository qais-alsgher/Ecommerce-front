import React from "react";
import InputForm from "./InputForm";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authAction";
import { Link } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import LogoW from "../../assets/logo/logoWhite.png";
import LogoB from "../../assets/logo/logoBlack.png";
import {
  Box,
  Flex,
  Image,
  HStack,
  useColorMode,
  Checkbox,
  useToast,
} from "@chakra-ui/react";

export default function LoginForm() {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const toast = useToast();

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
      w={"100%"}
    >
      <Image
        src={colorMode === "light" ? LogoB : LogoW}
        alt={"logo"}
        maxW={"200px"}
        maxH={"150px"}
        mb={{
          base: "10",
          md: "20",
        }}
      />

      <form
        onSubmit={(e) => {
          login(dispatch, e, toast);
        }}
        style={{
          width: "60%",
        }}
      >
        <Flex
          gap={10}
          w={"100%"}
          justifyItems={"center"}
          alignItems={"center"}
          direction={"column"}
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
          <HStack w={"100%"} justify={"space-between"} alignItems={"center"}>
            <Checkbox
              colorScheme={
                colorMode === "light" ? "lightBlue.300" : "darkBlue.100"
              }
              iconColor={
                colorMode === "light" ? "lightBlue.500" : "darkBlue.100"
              }
              bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}
            >
              Remember
            </Checkbox>
            <Box
              transition={"0.3s"}
              fontSize={"16"}
              fontWeight={"bold"}
              _hover={{
                color: colorMode === "light" ? "lightBlue.500" : "darkBlue.100",
              }}
            >
              <Link style={{ textDecoration: "none" }} to={"/register"}>
                Forgot Password ?
              </Link>
            </Box>
          </HStack>
          <SubmitBtn>Login</SubmitBtn>

          <Box
            transition={"0.3s"}
            fontSize={"16"}
            fontWeight={"bold"}
            mb={10}
            _hover={{
              color: colorMode === "light" ? "lightBlue.500" : "darkBlue.100",
            }}
          >
            <Link style={{ textDecoration: "none" }} to={"/sign-up"}>
              Create Account !
            </Link>
          </Box>
        </Flex>
      </form>
    </Flex>
  );
}
