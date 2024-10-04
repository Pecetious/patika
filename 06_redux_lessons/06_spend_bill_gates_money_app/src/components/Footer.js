import React from "react";
import { useSelector } from "react-redux";

function Footer() {
  const items = useSelector((state) => state.items.itemDetails);

  // Filter out the items that have been bought (amount > 0)
  const boughtItems = items.filter((item) => item.amount > 0);

  // Calculate the total cost
  const totalCost = boughtItems.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0);

  // Only render the footer if there are bought items
  if (boughtItems.length === 0) {
    return null;
  }

  return (
    <div className="footer">
      <h2 className="footer_title">Your Receipt</h2>
      <ul>
        {boughtItems.map((item) => (
          <li key={item.id} className="footer_item">
            <p>{item.name}</p>
            <p>x {item.amount}</p>
            <p>${item.price.toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <div className="footer_total">
        <p>Total</p>
        <p></p>
        <p>${totalCost.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Footer;
