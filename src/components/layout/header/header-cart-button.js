import  {useContext} from 'react';
import CartContext from '../../../store/card-context';

import CartIcon from "../../cart/cart-icon";

import classes from './header-cart-button.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currnumber, item) => {
        return currnumber + item.amount;
    }, 0)
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;