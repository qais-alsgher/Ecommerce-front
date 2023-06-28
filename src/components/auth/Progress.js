import { React } from "react";
import {
  Stack,
  Text,
  Box,
  Stepper,
  Step,
  StepIcon,
  StepSeparator,
  StepStatus,
  StepIndicator,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

export default function Progress({ activeStep }) {
  const activeStepText = steps[activeStep]?.description;

  return (
    <Stack w={"60%"}>
      <Stepper size="sm" index={activeStep} gap="0">
        {steps.map((step, index) => (
          <Step key={index} gap="0">
            <StepIndicator>
              <StepStatus
                isCompleted={index < activeStep}
                complete={<StepIcon />}
              />
            </StepIndicator>
            <StepSeparator _horizontal={{ ml: "0" }} />
          </Step>
        ))}
      </Stepper>
      <Text>
        Step {activeStep + 1}: <b>{activeStepText}</b>
      </Text>
    </Stack>
  );
}
