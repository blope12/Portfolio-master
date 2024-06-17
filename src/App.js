import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Navbar2 from "./components2/Navbar2"; // وارد کردن Navbar2

import Home from "./components/Home/Home";
import Home1 from "./components2/Home/Home1";
import About from "./components/About/About";
import About2 from "./components2/About/About2";

import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Res2 from "./components2/Resume/resume2";

import Main from "./components/main/main";  
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AppContent() {
  const location = useLocation();
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      {/* از Navbar2 برای صفحات دوم استفاده کنید */}
      {location.pathname !== "/" && location.pathname !== "/home" && <Navbar2 />}
      {location.pathname === "/home" && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Res2" element={<Res2 />} />

        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
