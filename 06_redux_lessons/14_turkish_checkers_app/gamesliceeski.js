import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const piecesEntityAdapter = createEntityAdapter();

const initialState = () =>
  piecesEntityAdapter.getInitialState({
    forcedPieces: [],
    turnColor: "white",
    capturePieces: {
      black: 0,
      white: 0,
    },
    winner: "white",
    selectedPieceId: null,
  });

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addPieces: piecesEntityAdapter.addMany,
    removePiece: piecesEntityAdapter.removeOne,
    updatePiece: piecesEntityAdapter.updateOne,
    updatePieces: piecesEntityAdapter.updateMany,
    getPiece: piecesEntityAdapter.selectId,
    setForcedPieces(state, { payload }) {
      state.forcedPieces = payload;
    },
    toggleTurnColor(state) {
      state.turnColor = state.turnColor === "white" ? "black" : "white";
    },
    capturePiece(state, { payload }) {
      const opponent = payload === "black" ? "white" : "black";
      state.capturePieces[opponent] += 1;

      if (state.capturePieces[opponent] === 16) {
        state.winner = payload;
      }
    },
    movePiece(state, { payload }) {
      const { targetPos } = payload;
      const selectedPiece = state.entities[state.selectedPieceId];

      // Validate the move first
      if (!selectedPiece || !validateMove(selectedPiece, targetPos, state)) {
        return; // Exit if the move is invalid
      }

      const previousPosition = selectedPiece.position; // { row, col }

      // Move the piece using updateOne from the entity adapter
      piecesEntityAdapter.updateOne(state, {
        id: state.selectedPieceId,
        changes: { position: targetPos },
      });

      // Check if the move is a jump (two squares away)
      const isJumpMove =
        Math.abs(targetPos.row - previousPosition.row) === 2 ||
        Math.abs(targetPos.col - previousPosition.col) === 2;

      if (isJumpMove) {
        const jumpedRow = (previousPosition.row + targetPos.row) / 2;
        const jumpedCol = (previousPosition.col + targetPos.col) / 2;

        const jumpedPieceId = Object.values(state.entities).find(
          (piece) =>
            piece.position.row === jumpedRow && piece.position.col === jumpedCol
        )?.id;

        if (jumpedPieceId) {
          const jumpedPiece = state.entities[jumpedPieceId];
          const updatedForcedPieces = [...state.forcedPieces, jumpedPiece.id]; // Store the ID of the jumped piece

          // Update forced pieces in the state
          gameSlice.caseReducers.setForcedPieces(state, {
            payload: updatedForcedPieces,
          });
        }
      }

      // Continue with checking for captures or toggling turn as necessary
      const captureOccurred = checkForCapture(
        state,
        selectedPiece,
        previousPosition,
        targetPos
      );

      if (captureOccurred) {
        const moreCapturesAvailable = hasCaptureMoves(state, selectedPiece);

        if (!moreCapturesAvailable) {
          gameSlice.caseReducers.toggleTurnColor(state); // Change turn if no more captures
          state.selectedPieceId = null; // Deselect the piece
        }
      } else {
        gameSlice.caseReducers.toggleTurnColor(state);
        state.selectedPieceId = null;
      }
    },
    resetGameState() {
      return initialState();
    },
  },
});

function isOccupied(state, row, col) {
  return Object.values(state.entities).some(
    (piece) => piece.position.row === row && piece.position.col === col
  );
}

function validateMove(selectedPiece, targetPosition, state) {
  const { position, color } = selectedPiece;
  const currentRow = position.row;
  const currentCol = position.col;
  const targetRow = targetPosition.row;
  const targetCol = targetPosition.col;

  // Calculate directional movement
  const rowDiff = targetRow - currentRow;
  const colDiff = targetCol - currentCol;

  // Check if the target is an adjacent square
  const isAdjacent = Math.abs(rowDiff) <= 1 && Math.abs(colDiff) <= 1;

  // Check if the piece is trying to move "behind"
  const isMovingBackwards =
    (color === "white" && rowDiff < 0) || // White can't move up
    (color === "black" && rowDiff > 0); // Black can't move down

  // Validate simple move (adjacent and not blocked)
  if (
    isAdjacent &&
    !isOccupied(state, targetRow, targetCol) &&
    !isMovingBackwards
  ) {
    return true;
  }

  // Validate jump move (two steps away, with an opponent's piece in between)
  const isJump =
    (Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 0) ||
    (Math.abs(rowDiff) === 0 && Math.abs(colDiff) === 2);

  if (isJump) {
    // Calculate the row and column of the jumped piece
    const jumpedRow = (currentRow + targetRow) / 2;
    const jumpedCol = (currentCol + targetCol) / 2;

    // Check if there is an opponent's piece at the jumped position
    const jumpedPiece = Object.values(state.entities).find(
      (piece) =>
        piece.position.row === jumpedRow && piece.position.col === jumpedCol
    );

    const isBehindEmpty = !isOccupied(state, targetRow, targetCol); // Check if the target behind the jumped piece is empty

    if (jumpedPiece && jumpedPiece.color !== color && isBehindEmpty) {
      return true; // Valid jump over opponent's piece
    }
  }

  return false; // Move is invalid
}

function checkForCapture(state, movedPiece, previousPosition, targetPosition) {
  const { row: currentRow, col: currentCol } = previousPosition;
  const { row: targetRow, col: targetCol } = targetPosition;

  if (
    (Math.abs(targetRow - currentRow) === 2 &&
      Math.abs(targetCol - currentCol) === 0) ||
    (Math.abs(targetRow - currentRow) === 0 &&
      Math.abs(targetCol - currentCol) === 2)
  ) {
    const jumpedRow = (currentRow + targetRow) / 2;
    const jumpedCol = (currentCol + targetCol) / 2;

    const jumpedPiece = Object.values(state.entities).find(
      (piece) =>
        piece.position.row === jumpedRow && piece.position.col === jumpedCol
    );

    if (jumpedPiece && jumpedPiece.color !== movedPiece.color) {
      // Store jumped piece ID in forcedPieces
      state.forcedPieces.push(jumpedPiece.id);

      const newTargetPositions = [
        { row: targetRow + 2, col: targetCol + 2 }, // bottom-right
        { row: targetRow + 2, col: targetCol - 2 }, // bottom-left
        { row: targetRow - 2, col: targetCol + 2 }, // top-right
        { row: targetRow - 2, col: targetCol - 2 }, // top-left
      ];

      let additionalCapture = false;

      for (const newPosition of newTargetPositions) {
        const canCapture = checkForCapture(
          state,
          movedPiece,
          targetPosition,
          newPosition
        );
        if (canCapture) {
          additionalCapture = true; // Additional capture can occur
          break;
        }
      }

      return additionalCapture ? "additional" : true;
    }
  }
  return false; // No capture
}

function hasCaptureMoves(state, piece) {
  const { row: prow, col: pcol } = piece.position;
  const color = piece.color;

  // Define directions to check: top-left, top-right, bottom-left, bottom-right
  const directions = [
    { row: prow - 1, col: pcol - 1 }, // Top-left
    { row: prow - 1, col: pcol + 1 }, // Top-right
    { row: prow + 1, col: pcol - 1 }, // Bottom-left
    { row: prow + 1, col: pcol + 1 }, // Bottom-right
  ];

  // Iterate through each direction to find capture moves
  for (const { row: dRow, col: dCol } of directions) {
    // Find the adjacent piece
    const adjacentPiece = Object.values(state.entities).find(
      (p) => p.position.row === dRow && p.position.col === dCol
    );

    // Define the target square to check if it's empty
    const targetRow = dRow + (dRow - prow); // Square behind the adjacent piece
    const targetCol = dCol + (dCol - pcol);
    const targetSquareIsEmpty = !isOccupied(state, targetRow, targetCol);

    // Check if the adjacent piece is forced (opponent's piece) and the target square is empty
    if (adjacentPiece && adjacentPiece.color !== color && targetSquareIsEmpty) {
      return true; // Found a capture move
    }
  }
  return false; // No capture moves available
}

export const {
  addPieces,
  removePiece,
  updatePiece,
  updatePieces,
  setForcedPieces,
  toggleTurnColor,
  capturePiece,
  movePiece,
  resetGameState,
} = gameSlice.actions;
export const gameAdapterSelectors = piecesEntityAdapter.getSelectors(
  (state) => state.game
);
export const gameStateSelector = piecesEntityAdapter.getSelectors(
  (state) => state.game
);
export default gameSlice.reducer;
