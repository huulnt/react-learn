import CartContext from "./card-context";

const CartProvider = (props) => { 
    const addItemToCartHandle = () => {}
    const removeItemToCartHandle = () => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandle,
        removeItem: removeItemToCartHandle, 
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
 }

export default CartProvider;