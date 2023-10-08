import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import "../CartItem/cartItem.css"


const CartItiem = ({item, qty}) => {

    const {removeProduct} = useContext(CartContext);
    
  return (
    <article className='containercartitem'>
        
            <img src={`${item.imagen}`} alt={`Miniatura de ${item.nombre}`} className="img"/>
            <h6 className='id'>ID: {item.id} </h6>
            <h4 className='nombre'> {item.nombre} </h4>
            <p className='qty' > Cantidad: {qty} </p>
            <p className='precio'> Precio: {item.precio}$ </p>
            <button className='btn-eliminar' onClick={ () => removeProduct(item.id)}> 🗑️ Eliminar </button>
        
    </article>
  )
}

export default CartItiem