

import React, { useState } from "react";
import "../css/FormulaireProduit.css";

export default function FormulaireProduit({
  displayedProducts,
  setDisplayedProducts,
}) {
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

    console.log(displayedProducts);
    
    // On crée directement l'objet final avec le bon ID
    const nouveauProduit = {
      ...formData,
      id: displayedProducts.length + 1,
    };

    // On l'ajoute directement à la liste
    setDisplayedProducts([...displayedProducts, nouveauProduit]);

    // Optionnel : Réinitialiser le formulaire après l'envoi
    setFormData({
      id: "",
      img: "",
      nom: "",
      price: "",
      category: "",
      description: "",
    });
    e.target.reset(); // Vide visuellement les champs du formulaire (dont l'input file)
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        // Crée un lien temporaire vers l'image chargée
        setFormData({ ...formData, [name]: URL.createObjectURL(file) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
              <input
                type="file"
                name="img"
                accept="image/*" // Restreint le choix aux fichiers image uniquement
                onChange={handleChange}
              />
            </div>

            {/* Optionnel : Afficher un aperçu si une image est sélectionnée */}
            {formData.img && (
              <div className="image_preview">
                <img
                  src={formData.img}
                  alt="Aperçu"
                  style={{ width: "100px", height: "auto", marginTop: "10px" }}
                />
              </div>
            )}

            <button className="btn-submit">Ajouter</button>
          </form>
        </div>
      </section>
    </>
  );
}
