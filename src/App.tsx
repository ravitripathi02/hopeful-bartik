import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Leftnav from "./components/Leftnav/Leftnav"; 
import Rightbar from "./components/RightNav/RightNav";
import TopBar from "./components/TopBar/TopBar";
import OrderTable from "./pages/OrderTable/OrderTable";
import './App.css'
import { useNav } from "./context/NavContext";
import { useDeviceType } from "./hooks/useDevice";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
    const { isLeftOpen, isRightOpen} = useNav();
    const device = useDeviceType();
  const navStyle: React.CSSProperties =
  device === "desktop"
    ? { position: "relative", overflow: "visible" }
    : device === "tablet"
    ? { position: "absolute", zIndex: 999, width: "30%", minHeight: "94.5vh" }
    : { position: "absolute", zIndex: 999, width: "100%", minHeight: "94.5vh" };

  return (
    <main className="app-container" style={device!=="desktop"?{height:"100vh",overflowY:"scroll"}:{}}>
  {isLeftOpen && (
   
      <div
  className={`left-container ${isLeftOpen ? "leftOpen" : "leftClosed"}`}
  style={isLeftOpen ? navStyle :undefined}
>
  <Leftnav />
</div>
  )}
  
  <div className="middle-container">
    <TopBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<OrderTable />} />
    </Routes>
  </div>
{isRightOpen && 
  <div className={`right-container ${isRightOpen ? "rightOpen" : "rightClosed"}`} style={isRightOpen ? { right: 0, ...navStyle } : undefined}>
    <Rightbar />
  </div>}
</main>

  );
}

export default App;
