import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Transport from "./pages/Transport";
import { scroller } from 'react-scroll';
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          smooth: true,
          duration: 800,
          offset: -100,
        });
      }, 100);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="/Transport" element={<Transport />} />
    </Routes>
  );
}

export default function Root() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
