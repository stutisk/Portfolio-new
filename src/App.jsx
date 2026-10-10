import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Navbar } from "./components/Home";
import { Homepage } from "./pages/Homepage";
import { CaseStudy } from "./pages/CaseStudy";
import { NavProvider } from "./Context/NavContext";
import { Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <NavProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>
    </NavProvider>
  );
}

export default App;
