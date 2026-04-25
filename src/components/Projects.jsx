import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../styles/Sections.css";

const projects = [
  {
    title: "Competitive Programming",
    description: "This repository highlights my journey in solving coding challenges and improving my skills in algorithms, data structures, and system design. It demonstrates my ability to build efficient solutions and continuously grow as a problem solver.",
    tags: ["Python", "C++", "DSA"],
    category: "Computing",
    image: "/projects/competitive.jpg",
    github: "https://github.com/yourusername/campus-connect",
    demo: "#",
  },
  {
    title: "Computer Networking Project",
    description: "An academic project for the Introduction to Systems and Computer Networks course, featuring the design and implementation of a secure, scalable hierarchical campus network.",
    tags: ["Cisco Packet Tracer", "IP Addressing"],
    category: "Computing",
    image: "/projects/campus-network.jpg",
    github: "https://github.com/yourusername/library-system",
    demo: "#",
  },
  {
    title: "Elegant Wedding Landing Page",
    description: "This project is a modern and responsive wedding landing page designed to showcase event details in an elegant and visually appealing way.",
    tags: ["HTML%", "CSS", "JavaScript"],
    category: "Web",
    image: "/projects/elegant.jpg",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Risk of AI adoption in Jobs",
    description: "This project is an AI-powered job analysis system designed to evaluate job roles and extract meaningful insights from job-related data.",
    tags: ["Python", "Data Visualization"],
    category: "Computing",
    image: "/projects/visualization.jpg",
    github: "https://github.com/yourusername/expense-tracker",
    demo: "#",
  },
  {
    title: "Mini-DARMAS",
    description: "Mini-DARMAS is a desktop based application designed to store, and manage meeting sessions and automatically generate transcripts. It provides features for meeting organization, real-time transcription.",
    tags: ["C#", "SQL Server", ".NET"],
    category: "Desktop",
    image: "/projects/MiniDARMAS.jpg",
    github: "https://github.com/yourusername/quiz-app",
    demo: "#",
  },
  {
    title: "Samunaber Engineering",
    description: "A dynamic portfolio and project detail system built for Samunaber Engineering, showcasing mechanical, electrical, and structural engineering projects across East Africa. Mobile-first weather app with forecasts and beautiful visualizations.",
    tags: ["HTML5", "CSS", "JavaScript"],
    category: "Web",
    image: "/projects/samunaber.jpg",
    github: "https://github.com/yourusername/weather-app",
    demo: "https://samunaber.netlify.app/",
  },
];

const categories = ["All", "Web", "Computing", "Desktop"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="projects-section">
      <h2>
        My Recent <span className="highlight">Works</span>
      </h2>
      <p className="section-subtitle">
        Here are a few projects I've worked on recently.
      </p>

      <div className="filter-bar">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`filter-btn ${filter === c ? "active" : ""}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
          <article
            key={p.title}
            className="project-card"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="project-image">
              <img
                src={p.image}
                alt={p.title}
                onError={(e) => {
                  e.target.src = "/projects/fallback.jpg";
                }}
              />
            </div>

            <div className="project-body">
              <div className="project-header">
                <h3>{p.title}</h3>

                <div className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>

                  {p.demo !== "#" && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{p.description}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;