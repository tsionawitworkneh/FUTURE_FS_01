import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaMoon, FaCode, FaTimes, FaBars } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar({ theme, setTheme }) {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { href: "#home", icon: <FaHome />, label: "Home" },
        { href: "#about", icon: <FaUser />, label: "About" },
        { href: "#projects", icon: <FaBriefcase />, label: "Projects" },
        { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
    ];

    return (
<header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="container nav-inner">
        <a href="#home" className="logo font-mono"><FaCode /></a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.icon} {l.label}</a></li>
          ))}
        </ul>
        <div className="nav-actions">
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="icon-btn" aria-label="Toggle theme">
            {theme === "light" ? <FaMoon /> : <MdSunny />}
          </button>
          <button className="icon-btn mobile-only" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu">
          <ul>
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.icon} {l.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
    );
}

export default Navbar;