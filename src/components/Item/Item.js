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
          <p><spam className="fw-bold" >Categoria: </spam> {categoria}
          <br />
          <spam className="fw-bold" >ID:</spam> {id}
          <br />
          <spam className="fw-bold" >Descripcion:</spam> {descripcion}
          {descripcion.slice(0, 50)} ...
          <br />
          <br />
          <spam className="fw-bold" >Precio:</spam> {precio}</p>
        
        <Link to={`/item/${id}`} className="btn btn-primary">Ver detalles</Link>
      </div>
    </div>
  );
};

export default Item;
