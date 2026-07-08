import React, { useEffect, useState } from "react";
import ButtonSearch from "./ButtonSearch";
import products from "../../data/data";
import Product from "./Product";
import FormulaireProduit from "./FormulaireProduit";

export default function ProductDisplay({
  displayedProducts,
  setDisplayedProducts,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSupprimeProduit = (idProduit) =>
    setDisplayedProducts(
      displayedProducts.filter((item) => item.id != idProduit),
    );
  console.log(displayedProducts);

  return (
    <>
      <ButtonSearch
        onSearchChange={(listFiltree) => setDisplayedProducts(listFiltree)}
      />
      <div className="products_container">
        {displayedProducts.map((p) => (
          <Product
            key={p.id}
            product={p}
            handleSupprimeProduit={handleSupprimeProduit}
          />
        ))}
      </div>
    </>
  );
}
