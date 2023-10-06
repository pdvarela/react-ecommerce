import { Link } from "react-router-dom";
import cart from "../navBar/assets/cart.png"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";


const CartWidget = () => {
    const {itemsQty} = useContext(CartContext);
    return (
        <li className="nav-item ps-3">
        <Link className="nav-link" to="/cart" id="carrito-icono">
          <img src={cart} className="cartIncon" alt="carrito" />
          {
            itemsQty > 0 && <span id="carrito-contador" className="carrito-contador"> {itemsQty} </span>
          }
        </Link>
      </li>

    )
}

export default CartWidget;