import { useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Cart from "./components/cart/cart";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/extra-files/NewExpense";

import Header from './components/layout/header/header';
import Meals from "./components/meals/meals";
import CartProvider from "./store/card-provider";

import Counter from './components/auth/Counter';

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

  const [cartIsShown, setCartIsShow] = useState(false);

  const showCartHandle = () => {
    setCartIsShow(true);
  }

  const hideCartHandle = () => {
    setCartIsShow(false);
  }

  return (
    <div className="App">
      <Route path="/react-learn">
        <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandle} />}
          <Header onShowCart={showCartHandle} />
          <main>
            <Meals />
          </main>
        </CartProvider>
      </Route>

      <Route path="/expenses">
        <NewExpense onAddExpense={addExpenseHandle} />
        <Expenses items={expenses} />
      </Route>

      <Route path="/counter">
        <Counter />
      </Route>
    </div>
  );
}

export default App;
