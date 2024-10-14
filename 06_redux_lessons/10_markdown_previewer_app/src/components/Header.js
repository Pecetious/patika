import React from "react";
import { useDispatch } from "react-redux";
import { toggleHelp } from "../redux/markdownSlice";
function Header() {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>Markdown Previewer</h1>
      <button
        className="btn_help"
        onClick={() => {
          dispatch(toggleHelp());
        }}
      >
        ?
      </button>
    </div>
  );
}

export default Header;
