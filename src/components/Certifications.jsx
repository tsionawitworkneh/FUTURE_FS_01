import { useState } from "react";
import "../styles/Sections.css";

const certificates = [
    { title: "HTML & CSS", issuer: "O'Reilly", image: "/certs/html-css.jpg" },
    { title: "JavaScript ESNext", issuer: "O'Reilly", image: "/certs/js.jpg" },
    { title: "AI Essentials", issuer: "Gebeya", image: "/certs/ai.jpg" },
    { title: "Data Analytics", issuer: "INFNOVA", image: "/certs/data-analysis.jpg" },
    { title: "SQL Intermediate", issuer: "SoloLearn", image: "/certs/sql.jpg" },
    { title: "Networking Basics", issuer: "Cisco Networking Academy", image: "/certs/networking.jpg" },
];

function Certifications() {

    


    return (
        <section id="certifications" className="container section">
            <h2>
                My Top <span className="gradient-text">Certifications</span>
            </h2>

            <div className="cert-grid">
                {certificates.map((cert, i) => (
                    <div
                        key={i}
                        className="cert-card"
                        style={{
                            backgroundImage: `url(${cert.image})`,
                            animationDelay: `${i * 0.1}s`,
                        }}
                    >
                        <div className="cert-overlay">
                            <h3>{cert.title}</h3>
                            <p>{cert.issuer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;
