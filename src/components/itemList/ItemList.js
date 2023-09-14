import React from "react";
import './itemList.css';
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    
      <div className="row contenedor">
        {productos.map((prod) => (
          <div className="col-sm-6 col-md-4" key={prod.id}>
            <Item  {...prod} />
          </div>
        ))}
      </div>
  
  );
};

export default ItemList;
