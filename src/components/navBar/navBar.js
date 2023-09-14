import logo from "./assets/mainBlack.svg"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-light navbar-expand-lg">
      <div className="container-fluid px-5 py-4">
        <Link to="/" className="navbar-brand">
          <img
            className="logo"
            src={logo}
            alt="Krecenti Logo"
            width="150px"
          />
        </Link>
        {/* <!-- Boton Menu Hamburguesa --> */}
        <button
          className="navbar-toggler rounded-0 border-0 me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon border-0"></span>
        </button>
        {/* Menu con el menu hamburguesa colapsado */}
        <div
          className="collapse navbar-collapse justify-content-end nav_text"
          id="navbarTogglerDemo02"
        >
          <div className="mx-auto"> </div>
          <ul className="navbar-nav ms-auto pe-4 mb-2 mb-lg-0">
            <li className="nav-item ps-3">
              <Link to="./"                className="nav-link active menu_uline"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item ps-3">
              <a className="nav-link" href="./secciones/enDesarrollo.html">
                Servicios
              </a>
            </li>
            <li className="nav-item ps-3">
              <a className="nav-link" href="./secciones/enDesarrollo.html">
                Contacto
              </a>
            </li>
            <li className="nav-item ps-3">
              <a className="nav-link" href="./secciones/enDesarrollo.html">
                Blog
              </a>
            </li>
            <li className="nav-item ps-3">
              <Link to="./" className="nav-link">
                Tienda
              </Link>
            </li>
               <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
