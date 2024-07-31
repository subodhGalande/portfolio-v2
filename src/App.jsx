import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className=" mx-auto px-7">
        <Hero />
        <Projects />
      </div>
    </>
  );
}

export default App;
