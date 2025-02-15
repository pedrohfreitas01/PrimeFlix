import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Error() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/" className="link">Back to Home</Link>
    </div>
  );
}

export default Error;
