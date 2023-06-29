import React from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Icon,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { GoReport } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/features/authSlicer";
import { createReport } from "../../store/actions/adminAction";
// import {}

function ReportModal({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const toast = useToast();

  const handleSubmit = (e, item) => {
    e.preventDefault();
    const data = {
      userId: user.id,
      itemId: item.id,
      reason: e.target?.resonForReporting?.value,
      reportMasseage: e.target?.reportMasseage?.value,
    };
    createReport(dispatch, { data, token: user.token }, toast);

    onClose();
  };

  return (
    <>
      <Icon
        as={GoReport}
        boxSize={6}
        cursor="pointer"
        _hover={{ color: "lightblue" }}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={colorMode === "light" ? "lightBlue.50" : "darkBlue.300"}
        >
          <ModalHeader>Report User</ModalHeader>
          <ModalCloseButton />
          <form
            onSubmit={(e) => {
              handleSubmit(e, item);
            }}
          >
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Reson for reporting</FormLabel>
                <Input
                  placeholder="Reson for reporting"
                  name="resonForReporting"
                  variant={"filled"}
                  rounded={"md"}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Report Masseage</FormLabel>
                <Textarea
                  variant={"filled"}
                  placeholder="Report Masseage"
                  name="reportMasseage"
                  rounded={"md"}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" mr={3}>
                Report
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ReportModal;
