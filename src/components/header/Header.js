import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <ul className="nav-container">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/proyectos">Proyectos</NavLink>
    </li>
    <li>
      <NavLink to="/habilidades">Sobre mí</NavLink>
    </li>
    <li>
      <NavLink to="/contacto">Contacto</NavLink>
    </li>
    {/* <li>
      <NavLink to="/descargarCV">Descargar CV</NavLink>
    </li> */}
  </ul>
);

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <h1 className="nombre">Bryan Castaño San Segundo</h1>
        <Navbar />
        <Redirect to="/" />
      </header>
    </div>
  );
};

export default Header;
