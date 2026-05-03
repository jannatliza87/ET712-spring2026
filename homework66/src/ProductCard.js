import React from "react";

function ProductCard(props) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      margin: "10px",
      textAlign: "center",
      background: "white"
    }}>
      <img src={props.image} alt={props.name} width="150" />
      <h2>{props.name}</h2>
      <p><b>${props.price}</b></p>
      <p style={{ color: props.inStock ? "green" : "red" }}>
        {props.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;