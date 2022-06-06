import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

// use react-router Link or NavLink

const Navbar = () => {
  const {cart} = useCart();
  // const {loggedIn} = useAuth();
  return (
    <div data-cy="navbar">
      <a data-cy="navbar-home-link"></a>
      <span data-cy="navbar-cart-items-count">{cart}</span>
      <button data-cy="navbar-login-logout-button">{ "Logout" || "Login"}</button>
    </div>
  );
};

export default Navbar;
