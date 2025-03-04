import React from "react";
import logoYechow from "../assets/logo/Sem título.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="tooltip">
        <img className="logo" src={logoYechow} alt="Logo do Yechow" />
        <span className="tooltip__text">Início</span>
      </Link>
      <Link className="header__link" to="/">
        <h1>Yechow</h1>
      </Link>
    </div>
  );
};
export default Header;
