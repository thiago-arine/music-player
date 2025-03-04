import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="tooltip">
        <FontAwesomeIcon
          className="search-bar__icon"
          icon={faMagnifyingGlass}
        />
        <span className="tooltip__text">Buscar</span>
      </div>
      <div className="search-bar__input">
        <input
          type="search"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="Que tal algo novo hoje?"
        />
      </div>
      <Link to="/songs" className="tooltip">
        <FontAwesomeIcon
          className="search-bar-explore"
          icon={faLocationArrow}
        />
        <span className="tooltip__text">Explorar</span>
      </Link>
    </div>
  );
};
export default SearchBar;
