import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import { useEffect, useState } from "react";
import About from "./components/About"
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;