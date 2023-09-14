import { useState, useEffect } from "react";
import { getProductByID } from "../../asyncmock";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState(null);
    const {id} = useParams();

    useEffect (() => {
        getProductByID(id)
        .then(respuesta => setProducto(respuesta))
    },[id])

    return(
        <div>
            <Item {...producto} />
        </div>
    )
}

export default ItemDetailContainer