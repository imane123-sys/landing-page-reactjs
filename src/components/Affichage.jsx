import React from "react";
import Header from "./Header";
import About from "./About";
import Product from "./Product";
import Footer from "./Footer";
import Hero from "./Hero";
import ProductDisplay from "./ProductDisplay";

export default function Affichage({ displayedProducts, setDisplayedProducts }) {
  return (
    <>
      <Hero />
      <About />
      <ProductDisplay
        displayedProducts={displayedProducts}
        setDisplayedProducts={setDisplayedProducts}
      />
      <Footer />
    </>
  );
}
