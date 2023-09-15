
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    
    const [producto,setProducto] = useState(null);
    const {id} = useParams();

    useEffect (() => {
        
        getProductByID(id)
        .then(respuesta => setProducto(respuesta))
        .catch(error => console.error(error))
    }, [id])

    return(
        <div className="d-flex justify-content-center">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer