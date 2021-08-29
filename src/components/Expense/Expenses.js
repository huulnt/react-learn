import { useState } from "react";
import ExpensesFilter from "../extra-files/ExpensesFilter";
import ExpensesList from "../extra-files/ExpensesList";
import ExpenseChart from "../extra-files/ExpenseChart";
import Card from "../UI/card/Card";
import "./Expenses.css";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2021');

  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpensive = (props.items || []).filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={onFilterChangeHandler}/>
      <ExpenseChart expense={filteredExpensive}/>
      <ExpensesList items={filteredExpensive}/>
    </Card>
  );
}

export default Expenses;
