import cart from "../navBar/assets/cart.png"
const CartWidget = () => {

    return (
        <li className="nav-item ps-3">
        <a className="nav-link" href="#" id="carrito-icono">
          <img src={cart} className="cartIncon" alt="carrito" />
          <span id="carrito-contador" className="carrito-contador">
            0
          </span>
        </a>
      </li>

    )
}

export default CartWidget;