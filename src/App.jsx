import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import DarkMode from "./components/DarkMode";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div >
      {/* <DarkMode /> */}
      <Navbar />
      <main className="scroll-smooth">
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer/>
      </main>

      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/about" />
          <Route path="/services" />
          <Route path="/contact" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
