import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  if (location.pathname === "/admin") {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
