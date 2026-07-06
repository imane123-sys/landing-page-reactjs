import React, { useState } from "react";
import "../css/FormulaireProduit.css";

export default function ({ displayedProducts, setDisplayedProducts }) {
  const [formData, setFormData] = useState({
    id: "",
    img: "",
    nom: "",
    price: "",
    category: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, id: displayedProducts.length + 1 });
    setDisplayedProducts([...displayedProducts, formData]);
    console.log(displayedProducts);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <section className="product_section">
        <div className="product_container">
          <h1 className="product_title">Ajouter un produit</h1>
          <p className="product_subtitle">
            Remplissez les informations du produit.
          </p>

          <form className="product_form" onSubmit={handleSubmit}>
            <div className="form_group">
              <label>Nom</label>
              <input
                name="nom"
                type="text"
                placeholder="Nom du produit"
                onChange={handleChange}
              />
            </div>

            <div className="form_group">
              <label>Prix</label>
              <input
                name="price"
                type="number"
                placeholder="Prix du produit"
                onChange={handleChange}
              />
            </div>

            <div className="form_group">
              <label>Catégorie</label>
              <input
                name="category"
                type="text"
                placeholder="Catégorie"
                onChange={handleChange}
              />
            </div>

            <div className="form_group">
              <label>Image</label>
              <input type="file" name="img" onChange={handleChange} />
            </div>

            <button className="btn-submit">Ajouter</button>
          </form>
        </div>
      </section>
    </>
  );
}
