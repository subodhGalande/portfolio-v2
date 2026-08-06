import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experiences";
import Footer from "./components/Footer";
import Techstack from "./components/Tech";
import Animation from "./components/Background";

function App() {
  return (
    <>
      <Animation />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Techstack />
        <Projects />
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export default App;
