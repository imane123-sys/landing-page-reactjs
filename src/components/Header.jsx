import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <>
      <header class="header">
        <a href="#home" class="logo">
          Emmy <span>Shop</span>
        </a>

        <i class="bx bx-menu" id="menu-icon"></i>

        <nav class="navbar">
          <a href="#home" class="active">
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
