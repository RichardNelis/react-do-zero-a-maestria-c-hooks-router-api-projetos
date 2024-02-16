// 2 - Links com React Router

import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        //className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink to={"/about"}>Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
