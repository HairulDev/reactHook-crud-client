import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <nav className="navbar navbar-light bg-light">
        <NavLink className="btn btn-outline-success" exact to="/"> View Product </NavLink>
      </nav>
      <nav className="navbar navbar-light bg-light">
        <Link className="btn btn-outline-success" to="/products/add">Add Product</Link>
      </nav>
    </nav>
  );
};

export default Navbar;
