import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaWindows, FaLinux, FaGithub, FaJava } from "react-icons/fa";
import { SiMysql, SiCplusplus, SiIntellijidea, SiCisco, SiFigma } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import "../styles/Sections.css"


const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
];

const tools = [
    { name: "Windows", icon: <FaWindows /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Visual Studio", icon: <DiVisualstudio /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Cisco", icon: <SiCisco /> },
    { name: "Figma", icon: <SiFigma /> },
];

function Skills() {
  return (
    <section id="skills" className="container skills">
      <h2>Professional <span>Skillset</span></h2>

      <div className="skill-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <div className="skill-icon">{s.icon}</div>
            <div className="skill-label">{s.name}</div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "5rem" }}>
        <span>Tools</span> I use
      </h2>

      <div className="skill-grid">
        {tools.map((t) => (
          <div key={t.name} className="skill-card">
            <div className="skill-icon">{t.icon}</div>
            <div className="skill-label">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;