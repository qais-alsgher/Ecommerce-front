import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Flex, Box } from "@chakra-ui/react";
import AddItems from "./AddItems";
import { AiFillDashboard } from "react-icons/ai";
import { SiAddthis } from "react-icons/si";
import { BsPerson, BsPersonSlash } from "react-icons/bs";
import { RiBillFill } from "react-icons/ri";
import { FiServer } from "react-icons/fi";
import BlockedUsers from "./BlockedUsers";
import AllItems from "./AllItems";
import AllUsers from "./AllUsers";
import AllOrder from "./AllOrder";

function Admin() {
  const { tab } = useParams();
  const renderTab = () => {
    switch (tab) {
      case "Dashboard":
        return <Dashboard />;
      case "Add-Item":
        return <AddItems />;
      case "All-Item":
        return <AllItems />;
      case "All-User":
        return <AllUsers />;
      case "Blocked-Users":
        return <BlockedUsers />;
      case "All-Order":
        return <AllOrder />;
      default:
        return <Dashboard />;
    }
  };

  const LinkItems = [
    { name: "Dashboard", icon: AiFillDashboard },
    { name: "Add-Item", icon: SiAddthis },
    { name: "All-Item", icon: FiServer },
    { name: "All-User", icon: BsPerson },
    { name: "Blocked-Users", icon: BsPersonSlash },
    { name: "All-Order", icon: RiBillFill },
  ];
  const urlRouter = "admin";

  return (
    <Flex
      gap={5}
      direction={{ base: "column", lg: "row" }}
      w={"full"}
      overflow={"auto"}
    >
      <Sidebar urlRouter={urlRouter} navLinks={LinkItems} />
      <Box w={"full"} h={"90vh"}>
        {renderTab()}
      </Box>
    </Flex>
  );
}

export default Admin;
