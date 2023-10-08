import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";


const ItemDetail = ({ nombre, id, categoria, precio, imagen, descripcion, stock }) => {
  
  const [addQty, setAddQty] = useState(0);

  const {addToCart} = useContext(CartContext);

  const qtyHandler = (qty) => {
    setAddQty(qty);
  
    // Aca se estrutura Mi Item
    const item = {id, nombre, precio, imagen};
    addToCart(item, qty)

  }
    

  return (
  <div className="container">
      <div className="row justify-content-center">
        <di className="col-md-4">
          <div className="card cardDetail">
            <img src={imagen} alt={nombre} className="card-img-top" />
            <div className=" cardBodyDetail">
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
                
                {
                  <div>
                    <p className="itamDetailStockDisplay"> {`Disponible: ${stock}`} </p>
                    {
                      addQty > 0 ? (<Link to="/cart" className="btn btn-primary"> Terminar Compra</Link>) : (<ItemCount initial={1} stock={stock} agregarAlCarrito={qtyHandler} />)
                    }
                  </div>
                }

              <Link to= "/" className="btnVolver btn-primary">Cerrar</Link>
            </div>
          </div>
        </di>
      </div>
  </div>
  );
};

export default ItemDetail;