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
           <span className="position-absolute top-15 start-100 translate-middle badge rounded-pill">
            {
              itemsQty > 0 && <span id="carrito-contador" className="carrito-contador badge text-bg-secondary btn-primary bg-danger"> {itemsQty} </span>
            }
           </span> 
          }
        </Link>
      </li>

    )
}

export default CartWidget;