
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProductByID } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";


const ItemDetailContainer = () => {
    
    const [producto,setProducto] = useState(null);
    const {id} = useParams();

    useEffect( () => {
        const nuevoDoc = doc(db, "inventory", id);

        getDoc(nuevoDoc)
        .then(res => {
            const data = res.data();
            const nuevoProducto = {id: res.id, ...data}
            setProducto(nuevoProducto);
        })
        .catch(error => console.log(error))
    },[id])

    // useEffect (() => {
        
    //     getProductByID(id)
    //     .then(respuesta => setProducto(respuesta))
    //     .catch(error => console.error(error))
    // }, [id])

    return(
        <div className="d-flex justify-content-center">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer