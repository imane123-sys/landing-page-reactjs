import React from 'react'

export default function Hero() {
  return (
      <section className="container">
        <div className="bg"></div>
        <div className="hero-content text-home">
          <span className="hero-tag">Élégance, Style</span>
          <h1 className="hero-title">Accessoires pour Toutes les Occasions </h1>
          <p className="hero-subtitle">
            A refined collection of daily essentials crafted with premium
            materials and conscious design. Made to elevate the ritual of your
            everyday life.
          </p>
          <div className="hero-actions">
            <a href="#collection" className="btn-primary">
              Shoppez maintenant <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section> 
       )
}
