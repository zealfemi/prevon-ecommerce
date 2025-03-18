import React from "react";
import Header from "./assets/Header";
import Slider from "./assets/Slider";
import Services from "./assets/Services";
import Products from "./assets/Products";
import Footer from "./assets/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header mode="false" />
      <Slider />
      <div className="container mx-auto p-4">
        <Services />
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
