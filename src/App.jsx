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

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/acceuil" element={<Affichage />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/produits" element={<ProductDisplay />} />

        <Route path="/apropos" element={<About />} />
        <Route path="/temoignages" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
