import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">


      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rekik. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;