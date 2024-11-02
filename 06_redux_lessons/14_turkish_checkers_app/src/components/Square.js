import React from "react";
import Piece from "./Piece";
import { movePiece } from "../redux/gameSlice";
import { useSelector, useDispatch } from "react-redux";

const Square = ({ color, piece, position }) => {
  const dispatch = useDispatch();
  const selectedPieceId = useSelector((state) => state.game.selectedPieceId);
  const selectedPiece = useSelector(
    (state) => state.game.entities[selectedPieceId]
  );

  const handleMove = () => {
    if (selectedPiece && !piece) {
      console.log(selectedPiece)
      dispatch(movePiece({ targetPos: position }));
    }
  };

  return (
    <div className={`square ${color}`} onClick={handleMove}>
      {piece ? (
        <Piece id={piece.id} color={piece.color} position={piece.position} />
      ) : null}
    </div>
  );
};

export default Square;
