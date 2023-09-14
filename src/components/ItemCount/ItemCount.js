import React from 'react'
import { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({initial, stock, agregarAlCarrito}) => {
    const [contador, setContador] = useState(initial);


    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }


    return (
        <div className='itemCountContainer'>
                <button className="miBtnAdd" onClick={incrementar}> + </button>
                <p className='pItemCount'> {contador} </p>
                <button className="miBtn-" onClick={decrementar}> - </button>
                <button className="miBtn" onClick={() => agregarAlCarrito(contador) }> Agregar al Carrito </button>

        </div>
    )
}

export default ItemCount