import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeAmount } from "../redux/itemsSlice";
function Content() {
  const [moneyLeft, setMoneyLeft] = useState(100000000000);
  const items = useSelector((state) => state.items.itemDetails);
  const dispatch = useDispatch();
  const handleChangeAmount = (id, newAmount) => {
    const amount = parseInt(newAmount, 10) || 0;
    const index = items.find((item) => item.id === id);

    // Calculate the total cost
    const totalCost = amount * index.price;
    if (totalCost > moneyLeft) {
      return; // Prevent changing the amount if the total cost exceeds moneyLeft
    }
    // Update moneyLeft based on the new amount
    if (amount > index.amount) {
      setMoneyLeft(moneyLeft - (totalCost - index.amount * index.price));
    } else {
      setMoneyLeft(moneyLeft + (index.amount * index.price - totalCost));
    }

    dispatch(changeAmount({ id, amount }));
  };
  const handleBuy = (id) => {
    const index = items.find((item) => item.id === id);
    const newAmount = index.amount + 1;
    const totalCost = index.price;
    dispatch(changeAmount({ id, amount: newAmount }));
    setMoneyLeft(moneyLeft - totalCost);
  };
  const handleSell = (id) => {
    const index = items.find((item) => item.id === id);
    const newAmount = index.amount - 1;
    const totalCost = index.price;
    dispatch(changeAmount({ id, amount: newAmount }));
    setMoneyLeft(moneyLeft + totalCost);
  };
  return (
    <main className="contents">
      <h1 className="content_money_left">${moneyLeft.toLocaleString()}</h1>
      <div className="content_list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div className="content_img_container">
                <img src={item.img} alt={item.name} />
              </div>
              <p>{item.name}</p>
              <p>${item.price.toLocaleString()}</p>
              <div className="content_inputs">
                <button
                  disabled={item.amount === 0}
                  onClick={() => handleSell(item.id)}
                  className="sell_button"
                >
                  Sell
                </button>
                <input
                  type="number"
                  placeholder="0"
                  value={item.amount}
                  min="0"
                  className="number_input"
                  onChange={(e) => handleChangeAmount(item.id, e.target.value)}
                />
                <button
                  onClick={() => handleBuy(item.id)}
                  disabled={moneyLeft < item.price * item.amount}
                  className="buy_button"
                >
                  Buy
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default Content;
