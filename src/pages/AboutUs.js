import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  Grid,
  Center,
  useColorModeValue,
  Spacer,
  Avatar,
  useColorMode,
  Container,
} from "@chakra-ui/react";
import { MdOutlineSecurity } from "react-icons/md";
import { SiFreecodecamp } from "react-icons/si";
import { MdFingerprint } from "react-icons/md";
import BoxCard from "../components/about/BoxCard";

const AboutUs = () => {
  return (
    <>
      <Box>
        <Flex
          direction="column"
          align="center"
          justify="center"
          position="relative"
          h={{ md: "30rem", lg: "35rem" }}
        >
          <Box
            w="100%"
            h="100%"
            position="absolute"
            top="0"
            left="0"
            bgImage="url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
            bgSize="cover"
            bgPosition="center center"
            filter="brightness(0.2)"
            zIndex="-1"
          />

          <Box zIndex="2" w="70%" textAlign="center">
            <Heading as="h1" size="4xl" color="gray.100" fontWeight="semibold">
              About Us
            </Heading>
            <Text
              color="gray.200"
              fontSize="md"
              mixW="60%"
              textAlign="center"
              letterSpacing={1.2}
              lineHeight={1.8}
            >
              eMazad is an online auction website that allows users to bid on
              and sell a wide variety of products in a safe and secure
              environment, it is easy to use and has a simple interface. It
              hosts a huge number of auctions in real time and you can bid on
              any item you want within a minutes.
            </Text>
          </Box>
        </Flex>

        <Center>
          <Box
            pos={{ md: "relative", lg: "absolute" }}
            justifyContent="center"
            top={{ md: "0rem", lg: "30rem" }}
          >
            <Center>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={5}
                maxW="80%"
                margin="auto 0"
                padding={{ base: "4", md: "8" }}
              >
                <BoxCard
                  title="Secure"
                  text="We take security seriously. We use the latest technology to keep your data safe."
                  styleCard="10"
                >
                  <Icon
                    as={MdOutlineSecurity}
                    w={10}
                    h={10}
                    color={useColorModeValue("green.400", "green.200")}
                  />
                </BoxCard>
                <BoxCard
                  title="Free"
                  text="You can create an account and start shopping
                   for free. No hidden fees."
                >
                  <Icon
                    as={SiFreecodecamp}
                    w={10}
                    h={10}
                    color={useColorModeValue("blue.400", "blue.200")}
                  />
                </BoxCard>
                <BoxCard
                  title="Simple Interface"
                  text="Sign up and starting shopping in minutes. We have a simple interface that is easy to use."
                  styleCard="10"
                >
                  <Icon
                    as={MdFingerprint}
                    w={10}
                    h={10}
                    color={useColorModeValue("purple.400", "purple.200")}
                  />
                </BoxCard>
              </Grid>
            </Center>
          </Box>
        </Center>
      </Box>

      <Spacer h={{ md: "10", lg: "400" }} />
      <Container maxW="container.2xl">
        <Flex
          direction="column"
          align="center"
          justify="center"
          mt={{ base: "0", md: "10", lg: "20" }}
        >
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            color={useColorModeValue("gray.800", "gray.200")}
            fontWeight="semibold"
            textAlign="center"
            margin="auto"
            padding="10"
          >
            Meet The Deverper
          </Heading>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            margin="auto"
            padding="10"
            gap={{ base: "5", md: "10", lg: "20" }}
          >
            <Avatar
              size="3xl"
              name="Segun Adebayo"
              src="https://avatars.githubusercontent.com/u/78353639?v=4"
            />

            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              color={useColorModeValue("gray.800", "gray.200")}
              fontWeight="semibold"
              textAlign="center"
              maxW={{ base: "100%", md: "80%", lg: "60%" }}
            >
              I'am a Full Stack Web Developer, I trained at Aspire Academy as a
              Full Stack JavaScript Developer, traind at ASAC as a Full Stack
              Web Developer, and I hold a Bachelor's degree in Software
              Engineering from Al-Balqa Applied University. I have a passion for
              web development and love to create for web and mobile devices.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default AboutUs;
