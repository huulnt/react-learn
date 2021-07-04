import { useState } from "react";
import "./App.css";
import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/extra-files/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "huulnt",
    date: new Date(),
    amount: 50,
  },
  {
    id: 2,
    title: "huulnt 2",
    date: new Date(),
    amount: 50,
  },
];

function App() {

  const addExpenseHandle = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandle}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
