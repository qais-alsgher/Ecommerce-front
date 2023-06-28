import React from "react";

function OptionSelect({ optionData }) {
  return (
    <>
      {optionData?.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </>
  );
}

export default OptionSelect;
