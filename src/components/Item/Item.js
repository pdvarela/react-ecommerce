import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ nombre, id, categoria, precio, imagen, descripcion }) => {
  
  return (
    <div className="card card-sm card-fixed-height card-fixed-width">
      <img src={imagen} alt={nombre} className="card-img-top" />
      <div className="card-body " style={{ maxHeight: "350px" }}>
        <h5 className="card-title fw-bold list-group-item">{nombre}</h5>
        <br />
          <p><span className="fw-bold" >Categoria: </span> {categoria}
          <br />
          <span className="fw-bold" >ID:</span> {id}
          <br />
          <span className="fw-bold" >Descripcion:</span> {descripcion}
          {descripcion && descripcion.slice(0, 50)} ...
          <br />
          <br />
          <span className="fw-bold" >Precio:</span> {precio}</p>
          <div>
            <Link to={`/producto/${id}`} className="btn btn-primary">Ver detalles</Link>
          </div>
      </div>
    </div>
  );
};

export default Item;
