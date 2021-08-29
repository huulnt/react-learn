import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const onTitleChange = ($event) => {
        setTitle($event.target.value);
    }

    const onAmountChange = ($event) => {
        setAmount($event.target.value);
    }

    const onDateChange = ($event) => {
        setDate($event.target.value);
    }

    const onSubmitExpenseData = ($event) => {
        $event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: enteredDate ? new Date(enteredDate) : new Date()
        }
        
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={onSubmitExpenseData}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={onTitleChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"   min='0.01'
                        step='0.01' value={enteredAmount} onChange={onAmountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"   min='2019-01-01'
                        max='2022-12-31' value={enteredDate} onChange={onDateChange}/>
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;