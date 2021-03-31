import React from "react";
import { useSnapshot } from 'valtio'
import state from '../store';

const Counter = () => {
  const { count } = useSnapshot(state);

  return (
    <div>
      <h3>{ count }</h3>
      <button onClick={() => {
        state.count = Date.now();
      }}>Generate Counter</button>
    </div>
  )
};

export default Counter;