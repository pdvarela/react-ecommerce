import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItiem from '../CartItem/CartItiem'
import { Link } from 'react-router-dom'

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
        <div>
            {cart.map(product => <CartItiem key={product.id} {...product} />)}
            
            <h2>Total: $ {total} </h2>
            <h2>Cantidad Total: {itemsQty} </h2>
            <button onClick={() => clearCart()}> Vaciar mi carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
  )
}

export default Cart