import React from "react";
import "./EnConstruccion.css"
import { Link } from "react-router-dom";

const EnConstruccion = () => {
  return (
    <section>
      <div className="containerPaginaDesarrollo">
        <Link to="/">
          <div className="loader"></div>
        </Link>
        <h1 id="sitioEnConstruccion">PÁGINA EN CONSTRUCCIÓN</h1>
        <h4 id="textoInstruccion">
          Haz click en el circulo para volver a la tienda
        </h4>
      </div>
    </section>
  );
};

export default EnConstruccion;
