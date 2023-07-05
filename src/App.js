import { useEffect } from "react";
import "./App.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
