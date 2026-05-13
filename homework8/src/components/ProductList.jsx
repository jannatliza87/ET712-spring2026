import React from "react";
import { PRODUCTS } from "../data/products";

function ProductList({ cart, addToCart }) {
  return (
    <div className="container">
      <h2>Products</h2>

      <div className="grid">
        {PRODUCTS.map((product) => {
          const inCart = cart.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="card">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>

              <button
                onClick={() => addToCart(product)}
                disabled={inCart}
              >
                {inCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;