import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h3 className="header-title">
        <Link to="/">Game of Thrones DB</Link>
      </h3>

      <ul className="header-list">
        <li>
          <Link to="/characters" exact>
            Characters
          </Link>
        </li>
        <li>
          <Link to="/books" exact>
            Books
          </Link>
        </li>
        <li>
          <Link to="/houses" exact>
            Houses
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
