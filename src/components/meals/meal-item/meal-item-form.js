import { useRef, useState } from 'react';
import Input from '../../UI/input/input';
import classes from './meal-item-form.module.css';

const MealItemForm = props => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(false);
    const submitHandle = (event) => {
        event.preventDefault();

        const enterAmount = amountInputRef.current.value;
        const enterAmountNumber = +enterAmount;

        if(enterAmount.trim().lenght === 0 || enterAmountNumber < 1 || enterAmountNumber > 5) {
            setAmountIsValid(false);
        }
        props.onAddToCart(enterAmountNumber);
    }

    return <form className={classes.form} onSubmit={submitHandle}>
        <Input label="Amount"
            ref={amountInputRef}
            input={{
                id: 'amount',
                type: 'number',
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1
            }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
}

export default MealItemForm;