import { useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Cart from "./components/cart/cart";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/extra-files/NewExpense";

import Header from './components/layout/header/header';
import Meals from "./components/meals/meals";

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

  const navItem = [
    {
      link: '/home',
      name: 'Home'
    },
    {
      link: '/expense',
      name: 'Expense'
    }
  ]


  return (
    <div className="App">
      <Route path="/home">
        <Cart />
        <Header />
        <main>
          <Meals />
        </main>
      </Route>

      <Route path="/expenses">
        <NewExpense onAddExpense={addExpenseHandle} />
        <Expenses items={expenses} />
      </Route>

    </div>
  );
}

export default App;
