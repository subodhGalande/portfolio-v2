import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/elements/experinces";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className=" mx-auto px-7">
        <Hero />
        <Projects />
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export default App;
