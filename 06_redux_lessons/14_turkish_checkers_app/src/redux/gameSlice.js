import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
export const gameAdapter = createEntityAdapter();
const isOccupied = (targetPos, state) => {
  if (!state || !state.entities) return false;
  const { row, col } = targetPos;

  return Object.values(state.entities).some(
    (piece) => piece.position.row === row && piece.position.col === col
  );
};

const validateMove = (piece, targetPos, state) => {
  const currentCol = piece.position.col;
  const currentRow = piece.position.row;
  const targetRow = targetPos.row;
  const targetCol = targetPos.col;

  // Calculate directional movement
  const rowDiff = targetRow - currentRow;
  const colDiff = targetCol - currentCol;

  // Check if the target is an adjacent square
  const isAdjacent = Math.abs(rowDiff) <= 1 && Math.abs(colDiff) <= 1;
  const isJump =
    (Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 0) ||
    (Math.abs(rowDiff) === 0 && Math.abs(colDiff) === 2);

  // Check if the piece is trying to move "behind"
  const isMovingBackwards =
    (piece.color === "white" && rowDiff < 0) || // White can't move up
    (piece.color === "black" && rowDiff > 0); // Black can't move down
  console.log("is adjacent: ", isAdjacent);
  console.log("is moving back: ", isMovingBackwards);
  if (!isAdjacent && isJump) {
    const jumpedRow = (currentRow + targetRow) / 2;
    const jumpedCol = (currentCol + targetCol) / 2;
    const jumpedPiece = Object.values(state.entities).find(
      (piece) =>
        piece.position.row === jumpedRow && piece.position.col === jumpedCol
    );
    const isBehindEmpty = !isOccupied(targetPos, state);

    if (jumpedPiece && jumpedPiece.color !== piece.color && isBehindEmpty) {
      return {
        id: jumpedPiece.id,
        updates: { taken: true, position: { row: 20, col: 20 } },
        color: jumpedPiece.color,
      };
    }
  }
  return true;
};
const hasMoreCapture = (state, piece) => {
  console.log("Checking for more capture moves for piece:", piece); // Log the piece being checked

  const { row: prow, col: pcol } = piece.position;
  const color = piece.color;

  const directions = [
    { row: prow - 1, col: pcol },
    { row: prow + 1, col: pcol },
    { row: prow, col: pcol - 1 },
    { row: prow, col: pcol + 1 },
  ];

  for (const { row: dRow, col: dCol } of directions) {
    console.log(`Checking direction: (${dRow}, ${dCol})`); // Log current direction

    // Find the adjacent piece
    const adjacentPiece = Object.values(state.entities).find(
      (p) =>
        p.position.row === dRow && p.position.col === dCol && p.taken === false
    );
    // Log the adjacent piece (if any)
    console.log(`Adjacent piece found:`, adjacentPiece);

    // Calculate target position for the capture move
    const targetPos = {
      row: dRow + (dRow - prow),
      col: dCol + (dCol - pcol),
    };

    console.log(`Calculated target position:`, targetPos); // Log the target position

    // Check if targetPos is within bounds (0 to 7)
    const targetPosInBounds =
      targetPos.row >= 0 &&
      targetPos.row <= 7 &&
      targetPos.col >= 0 &&
      targetPos.col <= 7;

    console.log(`Is target position in bounds:`, targetPosInBounds); // Log if targetPos is in bounds

    const targetSquareIsEmpty =
      targetPosInBounds && !isOccupied(state, targetPos);

    console.log(`Is target square empty:`, targetSquareIsEmpty); // Log if the target square is empty

    // Check if the adjacent piece is forced (opponent's piece) and the target square is empty
    if (adjacentPiece && adjacentPiece.color !== color && targetSquareIsEmpty) {
      console.log(`Capture move found for piece at: (${dRow}, ${dCol})`); // Log capture found
      return true; // Found a capture move
    }
  }

  console.log(`No capture moves available for piece:`, piece); // Log no captures found
  return false; // No capture moves available
};
const initialState = () =>
  gameAdapter.getInitialState({
    turnColor: "white",
    selectedPieceId: null,
    takenPieces: {
      white: 0,
      black: 0,
    },
    winner: null,
  });
//init slice
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addPieces: gameAdapter.addMany,
    selectPiece: (state, action) => {
      state.selectedPieceId = state.entities[action.payload].id || null;
    },
    movePiece: (state, action) => {
      const { targetPos } = action.payload;
      const selectedPiece = state.entities[state.selectedPieceId];
      if (!selectedPiece) return;

      const validationResult = validateMove(selectedPiece, targetPos, state);
      console.log(validationResult);
      if (!validationResult) {
        return;
      }

      // Update the position of the selected piece first
      gameAdapter.updateOne(state, {
        id: selectedPiece.id,
        changes: {
          position: targetPos,
          taken: false,
        },
      });

      // Log the validation after the move
      console.log("Validation after move: ", validationResult);

      // If there is a captured piece
      if (validationResult.id) {
        gameAdapter.updateOne(state, {
          id: validationResult.id,
          changes: validationResult.updates,
        });
        validationResult.color === "black"
          ? (state.takenPieces.black += 1)
          : (state.takenPieces.white += 1);
        // Now update the selected piece's position to the target position
        // since you updated the taken piece, check for captures again
        const updatedSelectedPiece = { ...selectedPiece, position: targetPos };

        // Check for more capture options after the move
        if (hasMoreCapture(state, updatedSelectedPiece)) {
          console.log(
            "More captures available for piece:",
            updatedSelectedPiece
          );
          // Keep the same player's turn as they can capture again
          return;
        } else {
          console.log("No more captures available, switching turn.");
          state.turnColor = state.turnColor === "white" ? "black" : "white";
          state.selectedPieceId = null;
        }
      } else {
        // No captured piece, just switch turn
        state.turnColor = state.turnColor === "white" ? "black" : "white";
        state.selectedPieceId = null;
      }
      gameSlice.caseReducers.endGame(state);
    },
    endGame: (state) => {
      if (state.takenPieces.black === 16) {
        state.winner = "white";
      } else if (state.takenPieces.white === 16) {
        state.winner = "black";
      } else {
        return state.winner;
      }
    },
    resetGame: (state) => {
      return initialState();
    },
  },
});

export const gameAdapterSelectors = gameAdapter.getSelectors(
  (state) => state.game
);
export const { addPieces, selectPiece, movePiece, endGame, resetGame } =
  gameSlice.actions;
export default gameSlice.reducer;
