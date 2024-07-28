import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div className=" mx-auto px-7">
        <Hero />
      </div>
    </>
  );
}

export default App;
