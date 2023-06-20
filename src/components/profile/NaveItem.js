import React from "react";
import { Flex, Icon, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NaveItem({ icon, children, ...rest }) {
  const { colorMode } = useColorMode();
  return (
    <Link
      to={`/profile/${children}`}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        fontSize="22"
        _hover={{
          color: colorMode === "dark" ? "darkBlue.200" : "lightBlue.300",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="22"
            _groupHover={{
              color: colorMode === "dark" ? "darkBlue.200" : "lightBlue.300",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
}

export default NaveItem;
