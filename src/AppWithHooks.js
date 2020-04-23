import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from './redux';

function App(props) {
  const count = useSelector(globalState => globalState);
  const dispatch = useDispatch();
  return (
    <div>
      <header>{count}</header>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>

    </div>
  );
}

export default App;
