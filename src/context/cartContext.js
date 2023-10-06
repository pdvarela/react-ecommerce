import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    itemsQty: 0
})

export const CartHandler = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [itemsQty, setItemsQty] = useState(0);

    console.log("cart"); // provisional para evaluar funcionalidad //

    const addToCart = (item, qty) => {
        

        const itemInCart = cart.find( prod => prod.item.id === item.id);

        if(!itemInCart){
            setCart( prev => [...prev, {item, qty}] );
            setItemsQty( prev => prev + qty);
            setTotal(prev => prev + (qty * item.precio));
        } else {
            const updatedCart = cart.map( prod => { 
                
                if (prod.item.id === item.id) {
                    return {...prod, qty: prod.qty + qty};
                } else {
                    return prod;
                }

            });
            setCart(updatedCart);
            setItemsQty(prev => prev + qty);
            setTotal(prev => prev + (qty * item.precio))
        }

    }

    const  removeProduct = (id) => {
        const removedProduct = cart.find( prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== id);

        setCart(updatedCart);
        setItemsQty(prev => prev - removedProduct.qty);
        setTotal(prev => prev - (removedProduct.item.precio * removedProduct.qty));

    }

    const clearCart = () => {
        setCart([]);
        setItemsQty(0);
        setTotal(0);
    }

    return(

        <CartContext.Provider value={{cart, addToCart, removeProduct, clearCart, total, itemsQty}}>
            {children}
        </CartContext.Provider>
    )

    
}