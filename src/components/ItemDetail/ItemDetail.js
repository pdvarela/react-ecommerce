import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, id, categoria, precio, imagen, descripcion }) => {
  
  return (
    <div className="card ">
      <img src={imagen} alt={nombre} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title fw-bold list-group-item">{nombre}</h5>
        <br />
          <p><span className="fw-bold" >Categoria: </span> {categoria}
          <br />
          <span className="fw-bold" >ID:</span> {id}
          <br />
          <span className="fw-bold" >Descripcion:</span> {descripcion}
          <br />
          <br />
          <span className="fw-bold" >Precio:</span> {precio}</p>
          <div>
            <ItemCount initial={1} stock={50} agregarAlCarrito={ (contador) => alert(`Cantidad agregada ${contador}`)} />
          </div>
        
        <Link to= "/" className="btn btn-primary">Volver</Link>
      </div>
    </div>
  );
};

export default ItemDetail;