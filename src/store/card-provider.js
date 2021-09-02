import { useReducer } from "react";
import CartContext from "./card-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }

    if (action.type === 'DELETE') {
        
    }
    return defaultCartState;
}

const CartProvider = (props) => { 

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandle = (item) => {
        dispatchCartAction({type: 'ADD', item});
    }
    const removeItemToCartHandle = (id) => {
        dispatchCartAction({type: 'ADD', id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandle,
        removeItem: removeItemToCartHandle, 
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
 }

export default CartProvider;