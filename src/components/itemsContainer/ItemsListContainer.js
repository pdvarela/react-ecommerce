import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import { getProductos, getProductByCategory } from "../../asyncmock";
import ItemList from "../itemList/ItemList";
import "../EnConstruccion/EnConstruccion.css";

const ItemListContainer = ({ items }) => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const funcion = categoria ? getProductByCategory : getProductos;

    funcion(categoria)
    .then((respuesta) => {
      setCargando(false);
      setProductos(respuesta);
    })
    .catch((error) => console.error(error));
}, [categoria]);

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
