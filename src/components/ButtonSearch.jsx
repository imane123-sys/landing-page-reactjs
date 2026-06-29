import React, { useState } from "react";
import "../css/ButtonSearch.css";
import products from "../../data/data";

export default function ButtonSearch({ onSearchChange }) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const produitsFiltres = products.filter((product) => {
      const productCategorie = product.category
        ? product.category.toLocaleLowerCase()
        : "";
      return productCategorie.includes(value.toLocaleLowerCase());
    });
    if (onSearchChange) {
      onSearchChange(produitsFiltres);
    }
  };
  return (
    <>
      <input
        type="search"
        className="search"
        placeholder="Rechercher catégorie"
        value={search}
        onChange={handleChange}
      />
    </>
  );
}
