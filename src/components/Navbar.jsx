import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-seguros-marcio.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow">

      <div className="container">

        {/* LOGO + NOMBRE */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
        >

          <img
            src={logo}
            alt="Seguros Marcio"
            className="logo-navbar"
          />

          <span className="ms-2 fw-bold fs-5">
            Seguros Marcio
          </span>

        </Link>


        {/* BOTÓN RESPONSIVE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >

          <span className="navbar-toggler-icon"></span>

        </button>


        {/* MENÚ */}
        <div
          className="collapse navbar-collapse"
          id="menu"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
              >
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/soat"
              >
                SOAT
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/vida-devolucion"
              >
                Vida Devolución
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/personas"
              >
                Personas
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/empresas"
              >
                Empresas
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/inversion"
              >
                Inversión
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/registro"
              >
                Registro
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/clientes"
              >
                Clientes
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/simulador"
              >
                Simulador
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/sobre-mi"
              >
                Sobre mí
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;