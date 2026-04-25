import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import { useEffect, useState } from "react";
import About from "./components/About"
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";

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
    </div>
  );
}

export default App;