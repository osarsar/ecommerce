import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Remplace HashRouter par BrowserRouter
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Transport from "./pages/Transport";
import Product_Details from "./pages/Product_Details";
import { scroller } from 'react-scroll';
import "./App.css";
import Contacts from './pages/Contacts';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProtectedRoute from './ProtectedRoute';

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
      <Route path="/Contact" element={<Contacts />} />
      <Route path="/Product_Details/:id" element={<Product_Details />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
    </Routes>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
