import React from "react";
import ButtonInfo from "../components/contact/ButtonInfo";
import CantactForm from "../components/contact/CantactForm";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  useColorMode,
} from "@chakra-ui/react";
import { MdPhone, MdFacebook, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsDiscord } from "react-icons/bs";
function ContactUs() {
  const { colorMode } = useColorMode();
  return (
    <Container maxW="container.lg" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg={colorMode === "light" ? "lightBlue.200" : "darkBlue.500"}
          color={colorMode === "light" ? "darkBlue.500" : "lightBlue.50"}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <ButtonInfo
                        icon={<MdPhone color="#5DC9B2" size="20px" />}
                        onClick={() => {
                          window.open("tel:+962-786827252");
                        }}
                      >
                        +962-786827252
                      </ButtonInfo>
                      <ButtonInfo
                        icon={<MdOutlineEmail color="#5DC9B2" size="20px" />}
                        onClick={() => {
                          window.open("mailto:qaisalsgher@gmail.com");
                        }}
                      >
                        qaisalsgher@gmail.com
                      </ButtonInfo>
                      <ButtonInfo
                        icon={<BsGithub color="#5DC9B2" size="20px" />}
                        onClick={() => {
                          window.open(
                            "https://www.google.com/maps/place/Zarqa"
                          );
                        }}
                      >
                        Zarqa, Jordan
                      </ButtonInfo>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{
                        bg: "lightBlue.500",
                      }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{
                        bg: "lightBlue.500",
                      }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{
                        bg: "lightBlue.500",
                      }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <CantactForm />
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default ContactUs;
