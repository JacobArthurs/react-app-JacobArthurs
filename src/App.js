import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Skills from "./components/SkillsSection/Skills";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Skills />
    </Router>
  );
}

export default App;
