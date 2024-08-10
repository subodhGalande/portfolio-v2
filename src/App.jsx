import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/elements/experinces";
import Footer from "./components/Footer";
import Techstack from "./components/Tech";
import Animation from "./components/Background";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

function App() {
  return (
    <>
      <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <Navbar />
        <Hero />
        <Techstack />
        <Projects />
        <Experience />
        <Footer />
        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
}

export default App;
