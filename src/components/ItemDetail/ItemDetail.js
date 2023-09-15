import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, id, categoria, precio, imagen, descripcion, stock }) => {
  
  return (
    <div className="card cardDetail">
      <img src={imagen} alt={nombre} className="card-img-top" />
      <div className="card-body cardBodyDetail">
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
            <p className="itamDetailStockDisplay"> {`Disponible: ${stock}`} </p>
            <ItemCount initial={1} stock={stock} agregarAlCarrito={ (contador) => alert(`Cantidad agregada ${contador}`)} />
          </div>
        
        <Link to= "/" className="btnVolver btn-primary">Cerrar</Link>
      </div>
    </div>
  );
};

export default ItemDetail;