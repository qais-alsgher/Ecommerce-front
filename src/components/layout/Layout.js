import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const adminPath = location.pathname.split("/")[1];
  const arrHeader = ["admin", "profile"];
  const arrHeaderAndFooter = [
    "/",
    "Home",
    "login",
    "sign-up",
    "About",
    "Contact",
    "cart",
    "wish-list",
    "Success",
    "Shop",
  ];
  if (arrHeader.includes(adminPath)) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  } else if (arrHeaderAndFooter.includes(adminPath) || adminPath === "") {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  } else {
    return <>{children}</>;
  }
}

export default Layout;
