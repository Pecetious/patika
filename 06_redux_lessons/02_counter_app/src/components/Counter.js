import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  customIncrease,
} from "../redux/counter/counterSlice";
import Napkinbtn from "napkinbtn";
import "napkinbtn/index.css";
function Counter() {
  const [amount, setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.currentCount);
  const dispatch = useDispatch();
  console.log(countValue);
  return (
    <div>
      <h1>{countValue}</h1>
      <Napkinbtn
        type="primary"
        onClick={() => {
          dispatch(increase());
        }}
      >
        Increase
      </Napkinbtn>
      <Napkinbtn
        type="primary"
        onClick={() => {
          dispatch(decrease());
        }}
      >
        Decrease
      </Napkinbtn>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Napkinbtn
        type="dashed"
        onClick={() => {
          dispatch(customIncrease(amount));
        }}
      >
        Custom Increase
      </Napkinbtn>
    </div>
  );
}

export default Counter;
