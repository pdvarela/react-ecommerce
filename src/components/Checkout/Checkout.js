import { useState, useContext, useEffect } from "react"
import { CartContext } from "../../context/cartContext"
import { db } from "../../services/config"
import { collection, addDoc} from "firebase/firestore"
import { Link } from "react-router-dom"
import "../Checkout/Checkout.css"


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [mostrarTexto, setMostrarTexto] = useState(false);

  useEffect(() => {
    if (mostrarTexto) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [mostrarTexto]);

  const scrollDown = () => {
    setMostrarTexto(true);
  };

    const {cart, clearCart, total, itemsQty} = useContext(CartContext);

    const formHandler = (event) => {
        event.preventDefault();
    
        if( !nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completa todos los campos del formulario")
            return;
        }

        if (email !== emailConfirmacion){
            setError('La información de E-mail ingresada no coincide');
            return;
        }

        const purchaseOrder = {
            items: cart.map(product => ({
                id: product.item.id,
                nombre: product.item.nombre,
                qty: product.qty
            })),
            total: total,
            date: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

         addDoc(collection(db, 'ordenes'), purchaseOrder)
         .then(docRef => {setOrdenId(docRef.id); clearCart(); setNombre(""); setApellido(""); setTelefono(""); setEmail(""); setEmailConfirmacion(""); setError("");})
         .catch(error => {console.log('Error al crear la orden', error); setError("¡Error al crear la orden!");})
    }

    return  (
        <div>
            <form className="formContainer" onSubmit={formHandler}>
            <h2 className="checkoutTitle"> CHECKOUT </h2>
                {
                    cart.map(product => (
                        <div className="gridItemCheckout" key={product.item.id}>
                            <img className="imgcheckout" src={product.item.imagen} alt={product.item.imagen} ></img>
                            <h5 className="nombrecheckout"> {product.item.nombre} </h5>
                            <p className="unidadescheckout"> {product.qty} Unidades </p>
                            <p className="preciocheckout">Precio {product.item.precio}$ </p>
                            <p className="subtotalcheckout">Sub-total <br/>{(product.item.precio * product.qty).toFixed(2) }$ </p>
                        </div>

                    ))
                    
                }
                <p className="totalcheckout">🪙 Total: {total.toFixed(2)}$  </p>
                <hr />
                <h4 className="formtitle">INGRESA TUS DATOS</h4>
                <div className="inputLabelscontainer">

                    <div className="formulario-autenticacion">
                        <label className="seccionformulario label" htmlFor="nombre">Nombre</label>
                        <input className="seccionformulario" type="text" value={nombre} id="nombre" onChange={(e) => setNombre(e.target.value)}/>
                    </div>

                    <div className="formulario-autenticacion">
                        <label className="seccionformulario label" htmlFor="apellido">Apellido</label>
                        <input className="seccionformulario" type="text" value={apellido} id="apellido" onChange={(e) => setApellido(e.target.value)}/>
                    </div>

                    <div className="formulario-autenticacion">
                        <label className="seccionformulario label" htmlFor="telefono">Teléfono</label>
                        <input className="seccionformulario" type="text" value={telefono} id="telefono" onChange={(e) => setTelefono(e.target.value)}/>
                    </div>

                    <div className="formulario-autenticacion">
                        <label className="seccionformulario label" htmlFor="email">E-mail</label>
                        <input className="seccionformulario" type="text" value={email} id="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="formulario-autenticacion">
                        <label className="seccionformulario label" htmlFor="emailConfirmacion">E-mail <span className="emailconfirmacion">(confirmación)</span></label>
                        <input className="seccionformulario" type="text" value={emailConfirmacion} id="emailConfirmacion" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                    </div>
                </div>
                
                {
                    error && <p className="errorformulario"> ❌ {error} </p>
                }

                <button className="btn btn-primary" onClick={scrollDown} type="submit"> ✅ Confirmar y finalizar compra</button>
            </form>

            {
                ordenId && (
                  <div className="agradecimientocompra">
                        <h2>✅</h2>
                        <h3 className="graciasportucompra"> ¡GRACIAS POR TU COMPRA!</h3>
                        <h4 className="nrodeorden">Tu número de orden es:  <strong>{ordenId}</strong> </h4>
                        <Link to={"/"} className="btn btn-primary">Volver al inicio</Link>
                    </div>
                )

            }
            
        </div>
    )
}


export default Checkout