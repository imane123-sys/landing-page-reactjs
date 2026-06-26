import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Emmy <span>Shop</span>
        </a>

        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <a href="#home" className="active">
            Accueil
          </a>
          <a href="#about">À propos</a>
          <a href="#competences">Produits</a>
          <a href="#projects">Témoignages</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}
