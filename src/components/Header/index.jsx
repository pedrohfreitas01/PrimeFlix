import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Home
      </Link>
      <Link className="favorites" to="/favorites">
        Favorites
      </Link>
    </header>
  );
}

export default Header;
