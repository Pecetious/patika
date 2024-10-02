import React from "react";
import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedValue } from "../redux/radioSlice"; // Import the action

function ColorButtons() {
  // Define the options array with className, value, and label for each button
  const options = [
    { value: "#f56c8e", className: "radio_red", label: "Red" },
    { value: "#b37feb", className: "radio_purple", label: "Purple" },
    { value: "#ffe58f", className: "radio_yellow", label: "Yellow" },
    { value: "#69c0ff", className: "radio_blue", label: "Blue" },
    { value: "#95de64", className: "radio_green", label: "Green" },
  ];

  // Use Redux dispatch and selector
  const dispatch = useDispatch();
  const selectedValue = useSelector((state) => state.radio.selectedValue);

  // Function to handle radio button change and dispatch selected value to Redux store
  const onChange = (e) => {
    dispatch(setSelectedValue(e.target.value)); // Dispatch the selected value to Redux
  };

  return (
    <Radio.Group
      onChange={onChange}
      value={selectedValue}
      style={{ display: "flex", gap: "10px" }}
    >
      {options.map((option) => (
        <Radio.Button
          key={option.value}
          className={`circle_radio ${option.className}`}
          value={option.value}
        ></Radio.Button>
      ))}
    </Radio.Group>
  );
}

export default ColorButtons;
