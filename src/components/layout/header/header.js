import React from "react";
import HeaderCartButton from "./header-cart-button";

import classes from './header.module.css'

const mealHeader = "https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg";


const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <div className={classes['header-content']}>
                <h1>HuuLNT Meals</h1>
                <div>
                    <HeaderCartButton/>
                </div>
            </div>
        </header>
        <div className={classes['main-image']}>
            <img src={mealHeader} alt="A table fill of delicious food!" />
        </div>
    </React.Fragment>
};

export default Header;