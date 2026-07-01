import React, { useEffect, useState } from "react";
import "../css/CartDisplay.css";
import { Link } from "react-router-dom";

export default function CartDisplay({ cart, handleSupprimerArticle }) {
  const [total, setTotal] = useState(0);
  const [totalArticle, setTotalArticle] = useState(0);

  const handleSomme = () => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  };
  const handleTotalArticle = () => {
    setTotalArticle(cart.length);
  };

  useEffect(() => {
    handleSomme();
    handleTotalArticle();
  }, []);

  return (
    <div class="cart-container">
      <div className="cart_display">
        {cart.map((crt) => (
          <ul key={crt.id}>
            <li>
              <img className="cart_img" src={crt.img} />
            </li>
            <li>{crt.id}</li>
            <li>{crt.nom}</li>
            <li>{crt.price}</li>
            <div className="quantity_ddelet_container">
            <li className="quantity_li">{crt.quantity}</li>
              <button onClick={() => handleSupprimerArticle(crt.id)}>
                <Link to="/cart"></Link>Supprimer
              </button>
            </div>
          </ul>
        ))}

        <div style={{ display: "block" }}>
          <div className="total">montant:{total}</div>
          <div className="total-article">
            Le nombre total d'articles:{totalArticle}
          </div>
        </div>
      </div>
    </div>
  );
}
