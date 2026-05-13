import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <nav className="navbar">
      <Link to="/">Products</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}

export default Navbar;