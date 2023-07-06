import { useEffect, useState } from "react";
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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "black" ? "black" : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
    document.querySelector("html").setAttribute("data-theme", localTheme);

    AOS.init();
  }, [theme]);

  const handleMode = (e) => {
    if (e.target.checked) {
      setTheme("black");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <NavBar theme={theme} handleMode={handleMode} />
      <Home theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

export default App;
