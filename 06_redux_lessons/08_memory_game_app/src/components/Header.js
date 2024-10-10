import React from "react";
import { useSelector } from "react-redux";
function Header() {
  const score = useSelector((state) => state.score.score);

  return (
    <header className="header">
      <h3>TEST YOUR MEMORY</h3>
      <p>Player score: {score} </p>
    </header>
  );
}

export default Header;
