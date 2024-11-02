import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPiece } from "../redux/gameSlice";
const Piece = ({ id, color, position }) => {
  const dispatch = useDispatch();
  const { selectedPieceId, turnColor } = useSelector((state) => state.game);
  const handleSelect = () => {
    if (color !== turnColor) {
      return false;
    }
    dispatch(selectPiece(id));
    console.log(id);
  };
  const isSelected = selectedPieceId === id;
  return (
    <div
      className={`piece ${color} ${isSelected ? "selected" : ""}`}
      onClick={handleSelect}
    />
  );
};

export default Piece;
