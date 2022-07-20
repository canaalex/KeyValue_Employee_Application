import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useState } from 'react';

import {
  decrement,
  increment,
  incrementByAmount,

} from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState('2');


  return (
    <>
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    <div>
    <input
      aria-label="Set increment amount"
      value={incrementAmount}
      onChange={e => setIncrementAmount(e.target.value)}
    />
    <button
      onClick={() =>
        dispatch(incrementByAmount(Number(incrementAmount) || 0))
      }
    >
      Add Amount
    </button>
  </div>
  </>
  )
}