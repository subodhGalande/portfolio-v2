import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Techstack from "./components/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <div className=" mx-auto px-7">
        <Hero />
        <Techstack />
      </div>
    </>
  );
}

export default App;
