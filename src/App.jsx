import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import products from "../data/data";
import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="products_container">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
      </div>
      <About/>
      <Contact/>

    </>
  );
}

export default App;
