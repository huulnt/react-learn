import MealsSummary from "./meals-summary";
import AvailableMeals from "./available-meals";
import { Fragment } from "react";

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
}

export default Meals;
