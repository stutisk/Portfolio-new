import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Navbar } from "./components/Home";
import { Homepage } from "./pages/Homepage";
import { NavProvider } from "./Context/navContext";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [displayedText, setDisplayedText] = useState("");
  // const text = "Here is some information about me...";

  // useEffect(() => {
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     setDisplayedText((prev) => prev + text[index]);
  //     index += 1;
  //     if (index >= text.length) clearInterval(interval);
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, [text]);

  return (
    <NavProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </NavProvider>
  );
}

export default App;
