import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import logoBlack from "../../assets/logo/logoBlack.png";
import logoWhite from "../../assets/logo/logoWhite.png";
import { Link } from "react-router-dom";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={Link}
      onTouchStart={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Link to={"/"}>
          <Image
            src={colorMode === "light" ? logoBlack : logoWhite}
            alt="logo"
            maxW="200px"
            maxH="200px"
          />
        </Link>
        <Text fontSize={["xs", "sm", "md", "lg"]}>
          © 2023 Powered By Qais Alsgher. All rights reserved
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"FaLinkedinIn"} href={"#"}>
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
