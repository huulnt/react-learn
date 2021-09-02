import  {useContext, useEffect, useState} from 'react';
import CartContext from '../../../store/card-context';

import CartIcon from "../../cart/cart-icon";

import classes from './header-cart-button.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnIsHightLight, setBtnIsHightLight] = useState(false);

    const numberOfCartItems = cartCtx.items.reduce((currnumber, item) => {
        return currnumber + item.amount;
    }, 0);


    const btnClasses = `${classes.button} ${btnIsHightLight ? classes.bump : ''}`;

    const {items} = cartCtx;
    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnIsHightLight(true);

        const timer = setTimeout(() => {
            setBtnIsHightLight(false);
        }, 300)
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;