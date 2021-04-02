import React, { useState } from "react";
import state from '../store';

const Counter = () => {
  const [count, updateCount] = useState(0);

  return (
    <div>
      <h3>{ count }</h3>
      <button onClick={() => {
        updateCount(Date.now())
      }}>Generate Counter</button>
    </div>
  )
};

export default Counter;