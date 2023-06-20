import React from "react";
import Sidebar from "../components/profile/Sidebar";
import Cart from "./Cart";
import WishList from "./WishList";
import Order from "./Order";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Settinges from "./Settinges";

function Profile() {
  const { tab } = useParams();
  console.log(tab);
  //   tab is undefined here because the route path="/profile/:tab" element={<Profile />} is not defined in src/App.js
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
        return <Cart />;
    }
  };
  return (
    <Flex
      gap={5}
      direction={{ base: "column", lg: "row" }}
      w={"full"}
      overflow={"auto"}
    >
      <Sidebar />

      {renderTab()}
    </Flex>
  );
}

export default Profile;
