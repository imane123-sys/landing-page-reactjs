import { Link } from "react-router-dom";
import "../css/Product.css";

export default function Product({ product, handleSupprimeProduit }) {
  let { id, nom, img, price, category } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={img} alt={nom} className="product-image" loading="lazy" />
        <Link to={`/product/${id}`} className="product-card-overlay">
          <span className="view-details-btn">
            View Product <i className="fa-solid fa-arrow-right-long"></i>
          </span>
        </Link>
      </div>
      <div className="product-card-details">
        {category && <span className="product-card-category">{category}</span>}
        <h3 className="product-card-name">{nom}</h3>
        <span className="product-card-price">${price}</span>
      </div>
      <div>
        <button onClick={() => handleSupprimeProduit(id)}>
          <Link to="/produits">Supprimer</Link>
        </button>
      </div>
    </div>
  );
}
