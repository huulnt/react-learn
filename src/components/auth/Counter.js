import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from './../../store/counter'

const Counter = () => {
  console.log('counter')
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counters.counter);
  const showCounter = useSelector(state => state.counters.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increment5Handler = () => {
    dispatch(counterActions.increase({amount: 5}))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increment5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default React.memo(Counter);
