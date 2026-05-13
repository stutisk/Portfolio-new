import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Navbar } from "./components/Home";
import { Homepage } from "./pages/Homepage";
import { NavProvider } from "./Context/NavContext";
import { Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <NavProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </NavProvider>
  );
}

export default App;
