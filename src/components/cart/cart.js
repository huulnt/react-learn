import { useContext } from 'react';
import CartContext from '../../store/card-context';
import CartItem from './cart-item';
import Modal from './../UI/modal/modal';
import classes from './cart.module.css';
const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const isHasCartItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = () => {}
    const cartItemAddHandler = () => {}

    const cartItem = (
        <ul className={classes['cart-items']}>
            {(cartCtx.items || []).map(item => <CartItem
                id={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={cartItemRemoveHandler}
                onAdd={cartItemAddHandler}
            />)}
        </ul>
    )

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    return <Modal onClose={props.onClose}>
        <div>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {isHasCartItem && <button className={classes.button}>Order</button>}
            </div>
        </div>
    </Modal>
}

export default Cart;