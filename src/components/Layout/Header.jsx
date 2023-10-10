import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="text-lg text-center font-serif bg-teal-200 py-2">
      <Link to="/" className="mx-2">
        Home
      </Link>
      <Link to="/review" className="mx-2">
        Order Review
      </Link>
      <Link to="/about" className="mx-2">
        About
      </Link>
      <Link to="/contact" className="mx-2">
        Contact
      </Link>
    </nav>
  );
};

export default Header;
