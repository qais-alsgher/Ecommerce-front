import React from "react";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

function StatsCard({ title, stat, icon, handleClick }) {
  const { colorMode } = useColorMode();
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
      _hover={{
        transform: "translateY(-5px)",
        bg: colorMode === "light" ? "lightBlue.200" : "darkBlue.300",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onClick={handleClick}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default StatsCard;
