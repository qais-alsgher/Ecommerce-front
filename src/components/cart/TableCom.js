import React from "react";
import {
  Table,
  Box,
  Heading,
} from "@chakra-ui/react";
import TableHead from "./TableHead";

function TableCom({ children, tableHeadData, title }) {
  return (
    <Box w="100%" h="100%" boxShadow="lg" rounded="lg" overflow={"auto"} p={6}>
      <Heading textAlign={"center"} as="h3" size={["md", "lg", "xl"]} mb={4}>
        {title}
      </Heading>
      <Table variant="simple">
        <TableHead data={tableHeadData} />
        {children}
      </Table>
    </Box>
  );
}

export default TableCom;
