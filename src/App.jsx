import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import products from "../data/data";
import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ButtonSearch from "./components/ButtonSearch";

function App() {
  const [displayedProducts, setDisplayedProducts] = useState(products);

  return (
    <>
      <Header />
      <Hero />
      <ButtonSearch
        onSearchChange={(listFiltree) => setDisplayedProducts(listFiltree)}
      />

      <div className="products_container">
        {/* 👈 CORRECTION : Boucle sur displayedProducts au lieu de products */}
        {displayedProducts.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>

      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
