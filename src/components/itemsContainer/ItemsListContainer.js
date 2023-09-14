import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import { getProductos, getProductByCategory } from "../../asyncmock";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({items}) => {
    const [productos, setProductos] = useState([])
    const {categoria} = useParams();

    useEffect ( () => {
        const funcion = categoria ? getProductByCategory : getProductos;

        funcion(categoria)
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))

    },[categoria])

    return (

        
        <div className="itemListContainer">
            <h1 className="tituloListContainer"> {items} </h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer;