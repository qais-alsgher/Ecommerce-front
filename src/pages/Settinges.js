import { React, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Heading,
  HStack,
  VStack,
  Text,
  Container,
  Input,
  Button,
  IconButton,
  useColorMode,
  Grid,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/features/authSlicer";
import UserImgInput from "../components/auth/UserImgInput";
import { BsPencilFill } from "react-icons/bs";

function Settinges() {
  const user = useSelector(selectUser);
  const [addressData, setAddressData] = useState([]);
  const [showEditInfo, setShowEditInfo] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const address = user.address.split("/");
    setAddressData(address);
  }, []);

  return (
    <Container maxW="container.xl" py={10}>
      <form>
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
            <Avatar size="2xl" name={user.userName} src={user.image} />
          )}
          <Text>
            User Name :{" "}
            {showEditInfo ? (
              <Input type="text" value={user.userName} name="userName" />
            ) : (
              user.userName
            )}
          </Text>
          <Text>
            Email :{" "}
            {showEditInfo ? (
              <Input type="text" value={user.email} name="email" />
            ) : (
              user.email
            )}
          </Text>
          <Text>
            Phone Number :{" "}
            {showEditInfo ? (
              <Input type="text" value={user.phoneNumber} name="phoneNumber" />
            ) : (
              user.phoneNumber
            )}
          </Text>
          <Text>
            Birth Date :
            {showEditInfo ? (
              <Input
                type="date"
                value={user.birthDate.slice(0, 10)}
                name="birthDate"
              />
            ) : (
              user.birthDate.slice(0, 10)
            )}
          </Text>
          {showEditInfo && <Button type="submit">Save</Button>}
        </Grid>
        <hr />
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
              <Input type="text" value={addressData[0]} name="country" />
            ) : (
              addressData[0]
            )}
          </Text>
          <Text>
            City :{" "}
            {showEditAddress ? (
              <Input type="text" value={addressData[1]} name="city" />
            ) : (
              addressData[1]
            )}
          </Text>
          <Text>
            Street :{" "}
            {showEditAddress ? (
              <Input type="text" value={addressData[2]} name="street" />
            ) : (
              addressData[2]
            )}
          </Text>
          <Text>
            Zip Code :{" "}
            {showEditAddress ? (
              <Input type="text" value={addressData[3]} name="zipCode" />
            ) : (
              addressData[3]
            )}
          </Text>
          <Text></Text>
          {showEditAddress && <Button type="submit">Save</Button>}
        </Grid>
      </form>
    </Container>
  );
}

export default Settinges;
