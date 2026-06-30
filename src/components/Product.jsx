import { Link } from "react-router-dom";
import "../css/Product.css";

export default function Product({ product }) {
  let { id, nom, img, price, category } = product;
  return (
    <Link to={`/product/${id}`}className="product-card">
      <div className="product-image-container">
        <img src={img} alt={nom} className="product-image" loading="lazy" />
        <div className="product-card-overlay">
          <span className="view-details-btn">
            View Product <i className="fa-solid fa-arrow-right-long"></i>
          </span>
        </div>
      </div>
      <div className="product-card-details">
        {category && <span className="product-card-category">{category}</span>}
        <h3 className="product-card-name">{nom}</h3>
        <span className="product-card-price">${price}</span>
      </div>
    </Link>
  );
}
