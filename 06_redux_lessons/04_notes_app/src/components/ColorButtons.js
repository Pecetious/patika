import React from "react";
import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedValue } from "../redux/radioSlice"; 

function ColorButtons() {
  const options = [
    { value: "#f56c8e", className: "radio_red", label: "Red" },
    { value: "#b37feb", className: "radio_purple", label: "Purple" },
    { value: "#ffe58f", className: "radio_yellow", label: "Yellow" },
    { value: "#69c0ff", className: "radio_blue", label: "Blue" },
    { value: "#95de64", className: "radio_green", label: "Green" },
  ];

  const dispatch = useDispatch();
  const selectedValue = useSelector((state) => state.radio.selectedValue);

  const onChange = (e) => {
    dispatch(setSelectedValue(e.target.value)); 
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
