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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay";
import Affichage from "./components/Affichage";
import ProductDetail from "./components/ProductDetail";
import CartDisplay from "./components/CartDisplay";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
      console.log(cart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleSupprimerArticle = (idArticleSupprime) => {
    setCart(cart.filter((item) => item.id != idArticleSupprime));
  };

  return (
    <>
      <Header  cart={cart}/>

      <Routes>
        <Route path="/" element={<Affichage />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
            />
          }
        />

        <Route path="/produits" element={<ProductDisplay />} />

        <Route path="/apropos" element={<About />} />
        <Route path="/temoignages" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route
          path="/cart"
          element={
            <CartDisplay
              cart={cart}
              handleSupprimerArticle={handleSupprimerArticle}
            />
          }
        />
       
      </Routes>
    </>
  );
}

export default App;
