import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <section className="about_section">
      <div className="container">
        {/* The organic masked blob image container */}
        <div className="bg about_bg"></div>

        {/* The text content layout matching your hero structure */}
        <div className="hero-content text-home">
          <span className="hero-tag">À Propos</span>
          <h2 className="hero-title">Passionnée par le design et le code</h2>
          <p className="hero-subtitle">
            En tant que Concepteuse Agile et Développeuse Full Stack, je crée des applications web fluides et modernes. Mon objectif est d'allier performance technique et expérience utilisateur soignée pour donner vie à vos idées.
          </p>
          <a href="#contact" className="btn-primary">
            Me Contacter <i className="ri-arrow-right-line"></i> {/* Scaled icon alignment */}
          </a>
        </div>
      </div>
    </section>
  );
}