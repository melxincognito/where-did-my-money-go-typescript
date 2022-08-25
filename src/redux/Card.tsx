import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "./hooks";

import {
  increase,
  decrease,
  increaseByAmount,
  selectCount,
} from "./inputValueSlice";

export const Card = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrease())}> -</button>
      <button onClick={() => dispatch(increase())}>+</button>
      <input
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(increaseByAmount(incrementValue))}>
        Add Amount
      </button>
    </div>
  );
};
