import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  }
  return (
    <nav>
      <SearchBar onSearch={onSearch} />

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link
        to="/favorites">
        <button>Favoritos</button>
      </Link>
      <button onClick={handleLogOut}>LogOut</button>
    </nav>
  );
};
//En el Button generamos un event que nos seteara nuestro acc en fals y nos redireccionara a /
export default Nav;
