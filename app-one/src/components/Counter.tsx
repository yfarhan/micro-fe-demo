import React from "react";
import { connect } from 'react-redux';
import { updateStoreRed } from '../storeRed';

const Counter = ({ counter, updateStoreRed }) => {
  return (
    <div>
      <h3>{ counter }</h3>
      <button onClick={() => {
        updateStoreRed({ counter: ++counter });
      }}>Generate Counter</button>
    </div>
  )
};

const mStoP = state => ({
  counter: state.storeRed.counter
});

const mDtoP = d => ({
  updateStoreRed: o => d(updateStoreRed(o))
});

export default connect(mStoP, mDtoP)(Counter);