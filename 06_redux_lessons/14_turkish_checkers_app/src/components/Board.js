import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameAdapterSelectors, addPieces, resetGame } from "../redux/gameSlice"; // Ensure this imports correctly
import Square from "./Square";

const Board = () => {
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.game.winner);
  const handleReset = () => {
    dispatch(resetGame());
    const initialPieces = [];

    // Adding white pieces
    for (let i = 0; i < 8; i++) {
      initialPieces.push({
        id: i + 1,
        color: "white",
        position: { row: 1, col: i },
        taken: false,
      });
      initialPieces.push({
        id: i + 9,
        color: "white",
        position: { row: 2, col: i },
        taken: false,
      });
    }

    // Adding black pieces
    for (let i = 0; i < 8; i++) {
      initialPieces.push({
        id: i + 17,
        color: "black",
        position: { row: 5, col: i },
        taken: false,
      });
      initialPieces.push({
        id: i + 25,
        color: "black",
        position: { row: 6, col: i },
        taken: false,
      });
    }
    dispatch(addPieces(initialPieces));
  };
  useEffect(() => {
    const initialPieces = [];

    // Adding white pieces
    for (let i = 0; i < 8; i++) {
      initialPieces.push({
        id: i + 1,
        color: "white",
        position: { row: 1, col: i },
        taken: false,
      });
      initialPieces.push({
        id: i + 9,
        color: "white",
        position: { row: 2, col: i },
        taken: false,
      });
    }

    // Adding black pieces
    for (let i = 0; i < 8; i++) {
      initialPieces.push({
        id: i + 17,
        color: "black",
        position: { row: 5, col: i },
        taken: false,
      });
      initialPieces.push({
        id: i + 25,
        color: "black",
        position: { row: 6, col: i },
        taken: false,
      });
    }

    dispatch(addPieces(initialPieces));
  }, [dispatch]);
  const pieces = useSelector(gameAdapterSelectors.selectAll);
  const filteredPieces = pieces.filter((p) => !p.taken);

  const renderSquare = (row, col) => {
    const isLightSquare = (row + col) % 2 === 0;
    const squareColor = isLightSquare ? "light-square" : "dark-square";

    const piece = filteredPieces.find(
      (p) => p.position.row === row && p.position.col === col
    );

    return (
      <Square
        key={`${row}-${col}`}
        color={squareColor}
        piece={piece || null}
        position={{ row, col }}
      />
    );
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        board.push(renderSquare(row, col));
      }
    }
    return board;
  };

  return (
    <>
      <div className="board">{renderBoard()}</div>
      <button onClick={() => handleReset()}>Reset Game</button>
      {winner && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1>Congratulations!</h1>
            <p>{winner} wins</p>
            <button onClick={() => handleReset()}>Reset Game</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
