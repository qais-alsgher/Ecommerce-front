import { React, useEffect, useState } from "react";
import {
  Avatar,
  Heading,
  Text,
  Container,
  Input,
  Button,
  IconButton,
  useColorMode,
  Grid,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectIsLoading } from "../store/features/authSlicer";
import UserImgInput from "../components/auth/UserImgInput";
import { BsPencilFill } from "react-icons/bs";
import { editUserProfileInfo } from "../store/actions/authAction";
import { editUserAddress } from "../store/actions/authAction";

function submitBtn(isLoading) {
  return isLoading ? <Spinner size="sm" /> : <Text fontWeight={800}>Save</Text>;
}

function Settinges() {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const [addressData, setAddressData] = useState([]);
  const [showEditInfo, setShowEditInfo] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const { colorMode } = useColorMode();

  useEffect(() => {
    const address = user?.address?.split("/");
    setAddressData(address);
  }, [user]);

  const handleSubmite = async (e) => {
    e.preventDefault();

    const userName = e.target.userName?.value || user?.userName;
    const email = e.target.email?.value || user?.email;
    const phoneNumber = e.target.phoneNumber?.value || user?.phoneNumber;
    const birthDate = e.target.birthDate?.value || user?.birthDate;

    const updatedData = {
      userName,
      email,
      phoneNumber,
      birthDate,
    };

    editUserProfileInfo(dispatch, updatedData, user, toast);
  };

  // await setTimeout(() => {
  // }, 4000);
  return (
    <Container maxW="container.xl" py={10}>
      <form
        onSubmit={(e) => {
          handleSubmite(e);
        }}
      >
        <Grid
          templateColumns="repeat(2, auto)"
          gap={10}
          justifyContent={"space-around"}
          alignItems={"center"}
          my={10}
        >
          <Heading textAlign={"center"}>User Info</Heading>
          <IconButton
            aria-label="Search database"
            icon={<BsPencilFill />}
            size="lg"
            variant="ghost"
            color={colorMode === "dark" ? "lightBlue.300" : "lightBlue.500"}
            onClick={() => setShowEditInfo(!showEditInfo)}
          />
          {showEditInfo ? (
            <UserImgInput />
          ) : (
            <Avatar size="2xl" name={user?.userName} src={user?.image} />
          )}
          <Text>
            User Name :{" "}
            {showEditInfo ? (
              <Input
                type="text"
                placeholder={user?.userName}
                variant="flushed"
                name="userName"
              />
            ) : (
              user?.userName
            )}
          </Text>
          <Text>
            Email :{" "}
            {showEditInfo ? (
              <Input
                type="text"
                placeholder={user?.email}
                variant="flushed"
                name="email"
              />
            ) : (
              user?.email
            )}
          </Text>
          <Text>
            Phone Number :{" "}
            {showEditInfo ? (
              <Input
                type="text"
                placeholder={user?.phoneNumber}
                name="phoneNumber"
                variant="flushed"
              />
            ) : (
              user?.phoneNumber
            )}
          </Text>
          <Text>
            Birth Date :
            {showEditInfo ? (
              <Input
                type="date"
                placeholder={user?.birthDate.slice(0, 10)}
                name="birthDate"
                variant="flushed"
              />
            ) : (
              user?.birthDate?.slice(0, 10)
            )}
          </Text>
          {showEditInfo && (
            <Button type="submit" isDisabled={isLoading}>
              {submitBtn(isLoading)}
            </Button>
          )}
        </Grid>
      </form>
      <hr />
      <form
        onSubmit={(e) => {
          editUserAddress(dispatch, e, user, toast);
        }}
      >
        <Grid
          templateColumns="repeat(2, auto)"
          gap={10}
          justifyContent={"space-around"}
          alignItems={"center"}
          my={10}
        >
          <Heading textAlign={"center"}>Address</Heading>
          <IconButton
            aria-label="Search database"
            icon={<BsPencilFill />}
            size="lg"
            variant="ghost"
            color={colorMode === "dark" ? "lightBlue.300" : "lightBlue.500"}
            onClick={() => setShowEditAddress(!showEditAddress)}
          />
          <Text>
            Country :{" "}
            {showEditAddress ? (
              <Input
                type="text"
                placeholder={addressData[0]}
                name="country"
                variant="flushed"
              />
            ) : (
              addressData[0]
            )}
          </Text>
          <Text>
            City :{" "}
            {showEditAddress ? (
              <Input
                type="text"
                placeholder={addressData[1]}
                name="city"
                variant="flushed"
              />
            ) : (
              addressData[1]
            )}
          </Text>
          <Text>
            Street :{" "}
            {showEditAddress ? (
              <Input
                type="text"
                placeholder={addressData[2]}
                name="street"
                variant="flushed"
              />
            ) : (
              addressData[2]
            )}
          </Text>
          <Text>
            Zip Code :{" "}
            {showEditAddress ? (
              <Input
                type="text"
                placeholder={addressData[3]}
                name="zipCode"
                variant="flushed"
              />
            ) : (
              addressData[3]
            )}
          </Text>
          <Text></Text>
          {showEditAddress && (
            <Button type="submit" isDisabled={isLoading}>
              {submitBtn(isLoading)}
            </Button>
          )}
        </Grid>
      </form>
    </Container>
  );
}

export default Settinges;
