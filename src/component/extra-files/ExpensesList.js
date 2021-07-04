import React from 'react';
import ExpenseItem from '../Expense/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback"> Found no item.</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map((item) => {
                    return (
                      <ExpenseItem
                        title={item.title}
                        date={item.date}
                        amount={item.amount}
                        key={item.id}
                      />
                    );
                })
            }
        </ul>
    )
}

export default ExpensesList;