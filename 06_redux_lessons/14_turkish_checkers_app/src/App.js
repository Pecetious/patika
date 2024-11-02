import React from "react";
import Board from "./components/Board";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Türk Daması</h1>
      <Board />
    </div>
  );
};

export default App;
