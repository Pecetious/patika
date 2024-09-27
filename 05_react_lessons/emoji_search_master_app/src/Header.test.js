import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

it("renders header component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  
  // Test that the header contains the correct text
  expect(div.textContent).toContain("Emoji Search");

  ReactDOM.unmountComponentAtNode(div);
});
