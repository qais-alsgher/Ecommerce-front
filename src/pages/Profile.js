import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Cart from "./Cart";
import WishList from "./WishList";
import Order from "./Order";
import { Flex, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Settinges from "./Settinges";
import {
  AiOutlineShoppingCart,
  AiFillHeart,
  AiFillSetting,
} from "react-icons/ai";
import { RiBillFill } from "react-icons/ri";

function Profile() {
  const { tab } = useParams();
  const renderTab = () => {
    switch (tab) {
      case "Cart":
        return <Cart />;
      case "Wish-list":
        return <WishList />;
      case "Orders":
        return <Order />;
      case "Settings":
        return <Settinges />;
      default:
        return <Settinges />;
    }
  };
  const LinkItems = [
    { name: "Settings", icon: AiFillSetting },
    { name: "Orders", icon: RiBillFill },
    { name: "Cart", icon: AiOutlineShoppingCart },
    { name: "Wish-list", icon: AiFillHeart },
  ];
  const urlRouter = "profile";
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

export default Profile;
