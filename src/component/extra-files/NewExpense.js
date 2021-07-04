import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandle = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(data);
    }
    return (<div className="new-expense">
        <ExpenseForm  onSaveExpenseData={saveExpenseDataHandle}/>
    </div>)
}
export default NewExpense;

