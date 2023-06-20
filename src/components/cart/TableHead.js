import React from "react";
import { Thead, Tr, Th } from "@chakra-ui/react";

function TableHead({ data }) {
  return (
    <Thead>
      <Tr>
        {data?.map((item) => (
          <Th key={item}>{item}</Th>
        ))}
      </Tr>
    </Thead>
  );
}

export default TableHead;
