import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import products from "../../data/data";
import "../css/ProductDetail.css";
import Cart from "./Cart";

export default function ProductDetail({
  cart,
  setCart,
  addToCart,
  displayedProducts,
  setDisplayedProducts,
}) {
  const { id } = useParams();
  const [isAdded, setIsAdded] = useState(false);

  const product = displayedProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <Header />
        <div className="error-content">
          <h2>Product Not Found</h2>
          <Link to="/" className="btn-primary">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="product-page-wrapper">
      <Header />

      <main className="product-page-container animate-slide-up">
        <div className="back-nav">
          <Link to="/" className="back-link">
            <i className="fa-solid fa-arrow-left"></i> Back to Collection
          </Link>
        </div>

        <div className="product-detail-layout">
          <div className="product-gallery">
            <div className="detail-img-container">
              <img
                src={product.img}
                alt={product.nom}
                className="detail-image"
              />
            </div>
          </div>

          <div className="product-info-details">
            {product.category && (
              <span className="detail-category">{product.category}</span>
            )}

            <h1 className="detail-title">{product.nom}</h1>

            <div className="detail-rating">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <span className="rating-text">4.8 (128 reviews)</span>
            </div>

            <div className="detail-price">${product.price}</div>

            <p className="detail-description">
              {product.description ||
                "Crafted with immaculate detail, this premium piece merges outstanding function with a simple, modern look. Designed to look stunning in any setting."}
            </p>

            <div className="divider"></div>

            <button
              className={`add-to-cart-btn ${isAdded ? "success" : ""}`}
              onClick={() => addToCart(product)}
            >
              {isAdded ? (
                <>
                  <i className="fa-solid fa-check"></i> Added to Cart
                </>
              ) : (
                <>
                  <Link to="/cart">
                    <i className="fa-solid fa-bag-shopping"></i> Add to Cart
                  </Link>
                </>
              )}
            </button>

            <div className="divider"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
