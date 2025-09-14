import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consultancy from "./pages/Consultancy";
import Medicines from "./pages/Medicines";   // <-- keep this for main medicines page
import MedicinesPage from "./pages/MedicinesPage"; // <-- NEW dynamic category page
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultancy" element={<Consultancy />} />
        
        {/* Main Medicines landing page */}
        <Route path="/medicines" element={<Medicines />} />
        
        {/* Dynamic category-based medicines page */}
        <Route path="/medicines/:category" element={<MedicinesPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;