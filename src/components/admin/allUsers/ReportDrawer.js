import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  Text,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { Button, useDisclosure } from "@chakra-ui/react";

function ReportDrawer({ reports }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode } = useColorMode();

  return (
    <>
      <Button ref={btnRef} variant={"outline"} onClick={onOpen}>
        {reports.length} Reports
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={colorMode === "light" ? "lightBlue.50" : "darkBlue.300"}
        >
          <DrawerCloseButton />
          <DrawerHeader>Reports</DrawerHeader>

          <DrawerBody>
            {reports.map((report) => {
              return (
                <Flex
                  key={report.id}
                  flexDir={"column"}
                  gap={5}
                  py={2}
                  border={"1px solid #ccc"}
                  borderRadius={"10px"}
                  p={3}
                  bg={colorMode === "light" ? "lightBlue.100" : "darkBlue.400"}
                >
                  <Flex key={report.id} alignItems="center">
                    <Avatar
                      src={report.User.image}
                      size="sm"
                      name={report.User.userName}
                    />
                    <Text ml={3}>{report.User.userName}</Text>
                  </Flex>
                  <Heading size={"md"}>{report.reason}</Heading>
                  <Text>{report.reportMessage}</Text>
                </Flex>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ReportDrawer;
