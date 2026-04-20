import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;