import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/Homepage";
import Navbar from "./componentss/Navbar";
import HeroSection from "./componentss/HeroSection";

function App() {

  return (
    <>
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>

        <Navbar />
        
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/create" element = {<CreatePage />} />
        </Routes>

    </Box>
    </>
    
  );
}

export default App;
