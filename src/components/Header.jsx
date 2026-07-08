import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Emmy <span className="shop">Shop</span>
        </a>

        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <Link to="/" className="active">
            Accueil
          </Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/produits">Produits</Link>
          <Link to="/temoignages">Témoignages</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/ajoutProduits">+</Link>
          <Link to="/cart">
            <i
              className="fas fa-shopping-cart"
              style={{ marginRight: "10px" }}
            ></i>
          </Link>
        </nav>
      </header>
    </>
  );
}
