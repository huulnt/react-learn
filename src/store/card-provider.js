import {
    useReducer
} from "react";
import CartContext from "./card-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updateItem;
        let updateItems;

        if (existingCartItem) {
            updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updateItems = [...state.items];
            updateItems[existingCartItemIndex] = updateItem;
        } else {
            updateItems = state.items.concat(action.item)
        }
        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updateItems;

        if (existingCartItem.amount === 1) {
            updateItems = state.items.filter(item => item.id !== action.id)
        } else {
            debugger;
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updateItems = [...state.items];
            updateItems[existingCartItemIndex] = updateItem
        }
        return {
            items: updateItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandle = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item
        });
    }
    const removeItemToCartHandle = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id
        });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandle,
        removeItem: removeItemToCartHandle,
    }
    return <CartContext.Provider value = {
            cartContext
        } > {
            props.children
        } <
        /CartContext.Provider>
}

export default CartProvider;