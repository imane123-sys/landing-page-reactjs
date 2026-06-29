import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_container">
        <div className="footer_brand">
          <a href="#home" className="footer_logo">
            <span>Fashion</span>Store
          </a>
          <p className="footer_text">
            Une collection d’accessoires et de pièces élégantes pensée pour un
            style simple, raffiné et moderne.
          </p>
        </div>

        <div className="footer_links">
          <h3 className="footer_title">Navigation</h3>
          <a href="#home">Accueil</a>
          <a href="#collection">Produits</a>
          <a href="#about">À propos</a>
          <a href="#testimonials">Témoignages</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer_links">
          <h3 className="footer_title">Contact</h3>
          <a href="mailto:hello@fashionstore.com">hello@fashionstore.com</a>
          <a href="tel:+33123456789">+33 1 23 45 67 89</a>
          <div className="footer_socials">
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© 2026 FashionStore. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
