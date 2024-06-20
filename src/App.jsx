import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigasi from "./components/Navigasi";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <Router>
            <Navigasi />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
