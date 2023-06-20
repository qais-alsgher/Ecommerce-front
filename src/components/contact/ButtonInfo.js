import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
function ButtonInfo({ children, icon, onClick }) {
  const { colorMode } = useColorMode();
  return (
    <Button
      size="md"
      height="48px"
      width="200px"
      variant="ghost"
      textAlign="start"
      color={colorMode === "light" ? "darkBlue.500" : "lightBlue.50"}
      _hover={{
        border: "2px solid",
        borderColor: colorMode === "light" ? "lightBlue.500" : "lightBlue.50",
      }}
      leftIcon={icon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonInfo;
