import React from "react";
import { Heading } from "@chakra-ui/react";

function SectionTitle({ children }) {
  return (
    <>
      <hr />
      <Heading as="h6" size="md" m={2}>
        {children}
      </Heading>
    </>
  );
}

export default SectionTitle;
