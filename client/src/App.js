import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing separate pages for routing
import HomePage from "./pages/HomePage";
import Schedule from "./pages/Schedule";

// Importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";



function App() {
  return (
    <Router>
      <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  )
}

export default App;
