import React from "react";
import ProductCard from "./ProductCard";

// IMAGES
import pinkDress from "./images/pinkdress.jpg";
import shoes from "./images/shoes.jpg";
import handbag from "./images/handbag.jpg";
import watch from "./images/watch.jpg";
import sunglasses from "./images/sunglasses.jpg";
import perfume from "./images/perfume.jpg";
import scarf from "./images/scarf.jpg";
import jacket from "./images/jacket.jpg";
import heels from "./images/heels.jpg";
import lipstick from "./images/lipstick.jpg";

function App() {
  const products = [
    { id: 1, name: "Pink Dress", price: 59, image: pinkDress, inStock: true },
    { id: 2, name: "Shoes", price: 80, image: shoes, inStock: false },
    { id: 3, name: "Handbag", price: 120, image: handbag, inStock: true },
    { id: 4, name: "Watch", price: 200, image: watch, inStock: true },
    { id: 5, name: "Sunglasses", price: 45, image: sunglasses, inStock: false },
    { id: 6, name: "Perfume", price: 95, image: perfume, inStock: true },
    { id: 7, name: "Scarf", price: 25, image: scarf, inStock: true },
    { id: 8, name: "Jacket", price: 150, image: jacket, inStock: false },
    { id: 9, name: "Heels", price: 110, image: heels, inStock: true },
    { id: 10, name: "Lipstick", price: 30, image: lipstick, inStock: true }
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "10px",
      padding: "20px",
      background: "#f5f5f5"
    }}>
      <h1 style={{ gridColumn: "1/-1", textAlign: "center" }}>
        Product Listing
      </h1>

      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          inStock={item.inStock}
        />
      ))}
    </div>
  );
}

export default App;