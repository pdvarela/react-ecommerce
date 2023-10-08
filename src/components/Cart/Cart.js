import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItiem from '../CartItem/CartItiem'
import { Link } from 'react-router-dom'
import "../Cart/Cart.css"

const Cart = () => {
    const {cart, clearCart, total, itemsQty} = useContext(CartContext);
    
    if (itemsQty === 0) {
        return (
            <>
                <h3>No hay productos en el carrito</h3>
                <Link to="/"> Volver a los productos</Link>
            </>
        )
    }

  return (

      <div className='containercheckout'>
            {cart.map(product => <CartItiem key={product.id} {...product} />)}
            <div className='containercontrolescheckout'>
                <p className='qtytotal'>CANTIDAD DE PRODUCTOS: <span className='qtycart'>{itemsQty}</span> </p>
                <p className='total'>Total a pagar: {total.toFixed(2)}$ </p>
                <button className='btn btn-secondary vaciarcarrito btnvaciar' onClick={() => clearCart()}> Vaciar mi carrito </button>
                <Link to="/checkout" className='btn btn-primary btnfinalizarcompra'> Finalizar Compra </Link>
            </div>
        </div>
  )
}

export default Cart