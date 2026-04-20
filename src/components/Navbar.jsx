import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaSun, FaMoon, FaCode } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({theme, setTheme}) {

    

    const links = [
        { href: "#home", icon: <FaHome />, label: "Home" },
        { href: "#about", icon: <FaUser />, label: "About" },
        { href: "#projects", icon: <FaBriefcase />, label: "Projects" },
        { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-inner">
                <a href="#home" className="logo"><FaCode /></a>
                <ul>
                    {links.map((l) => (
                        <li key={l.label}><a href={l.href}>{l.icon} {l.label}</a></li>
                    ))}
                </ul>

                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="theme-toggle">
                    {theme === "light" ? <FaMoon /> : <MdSunny />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;