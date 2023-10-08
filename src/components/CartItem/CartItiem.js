import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'



const CartItiem = ({item, qty}) => {

    const {removeProduct} = useContext(CartContext);
    
  return (
    <section>
        <article>
            <img src={`${item.imagen}`} alt={`Miniatura de ${item.nombre}`} className="card-img-top"/>
        </article>
        <article>
            <h6>ID: {item.id} </h6>
            <h4> {item.nombre} </h4>
            <p> Cantidad: {qty} </p>
            <p> Precio: {item.precio} </p>
            <button className='btn btn-danger' onClick={ () => removeProduct(item.id)}> Eliminar </button>
            <hr />
        </article>
    </section>
  )
}

export default CartItiem