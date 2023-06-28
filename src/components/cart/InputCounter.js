import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function InputCounter({ quantity, handleClick }) {
  return (
    <NumberInput
      size="sm"
      maxW={20}
      defaultValue={quantity}
      min={1}
      onChange={(value) => handleClick(value)}
    >
      <NumberInputField rounded={"lg"} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}

export default InputCounter;
