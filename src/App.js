import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import Items from "./pages/Items";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Profile from "./pages/Profile";
import Success from "./pages/Success";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box position={"relative"}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:tab" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/Shop/:id" element={<Item />} />
            <Route path="/Shop/:category" element={<Items />} />
            <Route path="/Shop" element={<Items />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/wish-list" element={<WishList />} />
            <Route path="/Success" element={<Success />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Box>
  );
}

export default App;
