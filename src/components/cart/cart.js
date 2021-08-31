import Modal from './../UI/modal/modal';
import classes from './cart.module.css';
const Cart = () => {

    const cartItem = (
        <ul className={classes['cart-items']}>
            {[{id: 'c1', name: 'Shushi', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)}
        </ul>
    )

    return <Modal>
        <div>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>33.33</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </div>
    </Modal>
}

export default Cart;