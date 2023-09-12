import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing separate pages for routing
import HomePage from "./pages/HomePage";
import Schedule from "./pages/Schedule";

// Importing components
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import Navigation from "./components/Navigation/index.js";



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/valor-webpage" element={<HomePage />} />
         <Route path="/schedule" element={<Schedule />} />

      </Routes>
    </Router>
  )
}

export default App;
