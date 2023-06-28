import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun, FaDoorOpen, FaUserAlt } from "react-icons/fa";
import {
  AiFillDashboard,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import {
  selectIsAuthenticated,
  selectUser,
} from "../../store/features/authSlicer";
import MenuUser from "../home/MenuUser";
import { logout } from "../../store/actions/authAction";
import LogoW from "../../assets/logo/logoWhite.png";
import LogoB from "../../assets/logo/logoBlack.png";
import NavIcon from "../home/NavIcon";
import NavLink from "./NavLink";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Container,
  useColorMode,
  MenuDivider,
  Image,
} from "@chakra-ui/react";

const Links = ["Home", "Shop", "About", "Contact"];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isAuth = useSelector(selectIsAuthenticated);
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <Box
        bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.500"}
        px={4}
        position={"sticky"}
        top={0}
        zIndex={100}
        boxShadow={"sm"}
      >
        <Container maxW="container.xl">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={4} alignItems={"center"}>
              <Box>
                <Link to={"/"}>
                  <Image
                    src={colorMode === "light" ? LogoB : LogoW}
                    alt={"logo"}
                    width={"100px"}
                    height={"50px"}
                    mr={4}
                  />
                </Link>
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                // zIndex={100}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              {!isAuth ? (
                <HStack>
                  <Button
                    as={Link}
                    to={"/sign-up"}
                    variant={"solid"}
                    colorScheme={"teal"}
                    size={"sm"}
                    mr={4}
                  >
                    SignUp
                  </Button>
                  <Button
                    as={Link}
                    to={"/login"}
                    variant={"solid"}
                    colorScheme={"teal"}
                    size={"sm"}
                    mr={4}
                  >
                    Login
                  </Button>
                </HStack>
              ) : (
                <HStack gap={3}>
                  <NavIcon href={"/wish-list"}>
                    <AiFillHeart />
                  </NavIcon>
                  <NavIcon href={"/cart"}>
                    <AiOutlineShoppingCart />
                  </NavIcon>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Avatar size={"sm"} src={userData?.image} />
                    </MenuButton>
                    <MenuList>
                      <Link to={`/profile/${userData?.id}`}>
                        <MenuUser>
                          <FaUserAlt />
                          Profile
                        </MenuUser>
                      </Link>
                      {userData?.role === "Admin" && (
                        <Link to={"/admin"}>
                          <MenuUser>
                            <AiFillDashboard />
                            Dashboard
                          </MenuUser>
                        </Link>
                      )}
                      <MenuItem onClick={toggleColorMode}>
                        {colorMode === "light" ? (
                          <Flex
                            Flex
                            gap={5}
                            alignItems={"center"}
                            fontSize={18}
                          >
                            <FaMoon />
                            Dark
                          </Flex>
                        ) : (
                          <Flex
                            Flex
                            gap={5}
                            alignItems={"center"}
                            fontSize={18}
                          >
                            <FaSun color="yellow" />
                            Light
                          </Flex>
                        )}
                      </MenuItem>
                      <MenuDivider />
                      <Box
                        onClick={() => {
                          logout(dispatch);
                        }}
                      >
                        <MenuUser>
                          <FaDoorOpen />
                          Logout
                        </MenuUser>
                      </Box>
                    </MenuList>
                  </Menu>
                </HStack>
              )}
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}
