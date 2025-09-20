import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Leftnav from "./components/Leftnav/Leftnav";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      {/* Navbar is always visible */}

      <Navbar />
      <Leftnav />
      {/* Route content changes here */}
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Rightbar />
    </div>
  );
}

export default App;
