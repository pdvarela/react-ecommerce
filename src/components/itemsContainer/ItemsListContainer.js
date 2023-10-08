import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
// import { getProductos, getProductByCategory } from "../../asyncmock";
import ItemList from "../itemList/ItemList";
import "../EnConstruccion/EnConstruccion.css";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = ({ items }) => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const [cargando, setCargando] = useState(true);


  useEffect( () => {
    setCargando(true);
      const misProductos = categoria ? query(collection(db, "inventory"), where("categoria", "==", categoria)) : collection(db, "inventory");
      getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map( doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
          
        })
        setCargando(false);
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [categoria])






return (
    <div className="itemListContainer">
      {cargando ? (
        <div className="loader Cargando"></div>
      ) : productos.length === 0 ? (
        <div className="alertaSinProductosPorCategoria">
          <h1>🚩</h1>
          <h3>No hay productos disponibles en esta categoría</h3>
          <h5>Vuelve Pronto</h5>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};
export default ItemListContainer;
