import { useState, useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { db } from "../../services/config"
import { collection, addDoc} from "firebase/firestore"
import { Link } from "react-router-dom"


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

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
            <h2> CHECKOUT </h2>
            <form onSubmit={formHandler}>
                {
                    cart.map(product => (
                        <div key={product.item.id}>
                            <img src={product.item.imagen} alt={product.item.imagen} ></img>
                            <p> {product.item.nombre} x {product.qty} </p>
                            <p> {product.item.precio} </p>
                            <hr />
                            <h4>Total: {total.toFixed(2)} </h4>
                        </div>

                    ))

                }
                <hr />

                <div className="formulario-autenticacion">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" value={nombre} id="nombre" onChange={(e) => setNombre(e.target.value)}/>
                </div>

                <div className="formulario-autenticacion">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" value={apellido} id="apellido" onChange={(e) => setApellido(e.target.value)}/>
                </div>

                <div className="formulario-autenticacion">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" value={telefono} id="telefono" onChange={(e) => setTelefono(e.target.value)}/>
                </div>

                <div className="formulario-autenticacion">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" value={email} id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="formulario-autenticacion">
                    <label htmlFor="emailConfirmacion">E-mail Confirmación</label>
                    <input type="text" value={emailConfirmacion} id="emailConfirmacion" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                </div>
                
                {
                    error && <p> ❌ {error} </p>
                }

                <button className="btn btn-primary" type="submit"> Confirmar y finalizar compra</button>
            </form>

            {
                ordenId && (
                    <div>
                        <h2> ¡Gracias por tu compra!</h2>
                        <h4>Tu numero de orden es {ordenId} </h4>
                        <Link to={"/"} className="btn btn-primary">Volver al inicio</Link>
                    </div>
                )
            }
            
        </div>
    )
}


export default Checkout