import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import "../styles/Hero.css";
import profile from "../assets/profile.jpg";

const roles = ["Web Developer", "Information Systems Student", "Full-Stack Learner", "Gebeya Dala Ambassador"];

function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del && text === current) { setTimeout(() => setDel(true), 1500); return; }
      if (del && text === "") { setDel(false); setIdx((i) => (i + 1) % roles.length); return; }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <div className="hero-left animate-fade-in">
          <div className="socials-col">
            <a href="https://t.me/Zionawit_16" aria-label="Telegram"><FaTelegram /></a>
            <a href="https://github.com/tsionawitworkneh" aria-label="GitHub"><FaGithub /></a>
            <a href="https://leetcode.com/u/Tsionawit/" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
          <div>
            <p className="font-script greet">
              Hello There! <span className="wave">👋</span>
            </p>
            <h1 className="hero-title">I'm <span>Tsionawit Workneh</span></h1>
            <p className="font-script role">{text}<span className="caret" /></p>
          </div>
        </div>
        <div className="hero-right animate-fade-in">
          <div className="blob-wrap">
            <div className="blob-glow" />
            <div className="blob">
              <img src={profile} alt="Tsionawit Workneh" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;