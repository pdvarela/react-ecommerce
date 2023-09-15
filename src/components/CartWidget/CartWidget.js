import { Link } from "react-router-dom";
import cart from "../navBar/assets/cart.png"
const CartWidget = () => {

    return (
        <li className="nav-item ps-3">
        <Link className="nav-link" to="*" id="carrito-icono">
          <img src={cart} className="cartIncon" alt="carrito" />
          <span id="carrito-contador" className="carrito-contador">
            0
          </span>
        </Link>
      </li>

    )
}

export default CartWidget;