import React from "react";
import InputForm from "./InputForm";
import SubmitBtn from "./SubmitBtn";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import UserImgInput from "./UserImgInput";
import { signup, uploadImage } from "../../store/actions/authAction";
import { selectStep } from "../../store/features/authSlicer";
import Progress from "./Progress";
import {
  Box,
  Flex,
  Center,
  Avatar,
  Image,
  HStack,
  Input,
  VStack,
  Button,
  useColorMode,
  Toast,
  Checkbox,
  useToast,
  AvatarBadge,
  InputGroup,
  InputRightElement,
  IconButton,
  useSteps,
  Select,
  Stack,
  InputLeftAddon,
  FormLabel,
  FormControl,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

export default function SignUpFrom() {
  const step = useSelector(selectStep);

  const { activeStep, setActiveStep } = useSteps({
    index: step - 1,
    count: 3,
  });

  const dispatch = useDispatch();
  const toast = useToast();
  const date = new Date();

  return (
    <VStack w={"100%"}>
      <Progress activeStep={activeStep} />
      <form
        onSubmit={(e) => {
          signup(dispatch, e, step, toast);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }}
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {step === 1 && (
          <VStack
            gap={5}
            w={"100%"}
            justify="center"
            align="center"
            direction={"column"}
            id={step}
          >
            <UserImgInput />
            <InputForm type={"text"} placeholder={"Username"} name={"username"}>
              <FaUserAlt />
            </InputForm>
            <InputForm type={"email"} placeholder={"Email"} name={"email"}>
              <FaUserAlt />
            </InputForm>
            <InputForm
              type={"password"}
              placeholder={"Password"}
              name={"password"}
            >
              <FaLock />
            </InputForm>
            <InputForm
              type={"password"}
              placeholder={"Confirm Password"}
              name={"confirmPassword"}
            >
              <FaLock />
            </InputForm>
          </VStack>
        )}
        {step === 2 && (
          <VStack w="100%" gap={10} mb={5} mt={5} id={step}>
            <InputForm
              type={"text"}
              placeholder={"Phone Number"}
              name={"phoneNumber"}
            >
              <FaUserAlt />
            </InputForm>
            <InputForm
              type={"text"}
              placeholder={"Mobile Number"}
              name={"mobileNumber"}
            >
              <FaUserAlt />
            </InputForm>
            {/* <Select variant="flushed" placeholder="Flushed" /> */}
            <Select
              name="gender"
              variant="flushed"
              placeholder="Select Gender"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            <FormControl id="birthDate">
              <FormLabel>Birth Date</FormLabel>
              <Input
                variant="flushed"
                placeholder="Birth Date"
                name="birthDate"
                size="md"
                type="date"
                // min value muste be 18 years old dinmicly calculate date of birth
                min={`${date.getFullYear() - 18}-${
                  date.getMonth() + 1
                }-${date.getDate()}`}
                required
              />
            </FormControl>
          </VStack>
        )}
        {step === 3 && (
          <VStack w="100%" gap={10} mb={5} mt={5} id={step}>
            <InputForm type={"text"} placeholder={"Country"} name={"country"}>
              <FaUserAlt />
            </InputForm>
            <InputForm type={"text"} placeholder={"City"} name={"city"}>
              <FaUserAlt />
            </InputForm>
            <InputForm type={"text"} placeholder={"Street"} name={"street"}>
              <FaUserAlt />
            </InputForm>
            <InputForm type={"text"} placeholder={"Zip Code"} name={"zipCode"}>
              <FaUserAlt />
            </InputForm>
          </VStack>
        )}

        <SubmitBtn>{step !== 3 ? "Next" : "Sign Up"}</SubmitBtn>
      </form>
    </VStack>
  );
}
