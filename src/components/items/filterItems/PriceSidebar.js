import React from "react";
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SliderMark,
} from "@chakra-ui/react";
function PriceSidebar({ sliderValue, setSliderValue }) {
  // const [sliderValue, setSliderValue] = useState(1000);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
    px: "-5",
    color: "teal.500",
  };

  return (
    <Box pt={6} pb={2} px={8}>
      <Slider
        aria-label="slider-ex-6"
        min={1}
        max={1000}
        step={1}
        onChange={(val) => setSliderValue(val)}
      >
        <SliderMark value={0} {...labelStyles}>
          1$
        </SliderMark>
        <SliderMark value={1000} {...labelStyles}>
          1000$
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="teal.500"
          borderRadius="full"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}$
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack bg="teal.500" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}

export default PriceSidebar;
