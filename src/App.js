import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Header from "./components/home/Header";
import Login from "./pages/Login";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box position={"relative"}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
