import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const frameworkAdapter = createEntityAdapter();
const initialState = frameworkAdapter.getInitialState({
  flippedCards: [],
  score: 0,
});
export const frameworksSlice = createSlice({
  name: "frameworks",
  initialState,
  reducers: {
    addFrameworks: frameworkAdapter.addMany,
    flipCard: (state, action) => {
      const cardId = action.payload;
      const card = state.entities[cardId];
      if (card && state.flippedCards.length < 2 && !card.flipped) {
        card.flipped = true;
        state.flippedCards.push(cardId);
      }
    },
    resetFlippedCards: (state) => {
      state.flippedCards.forEach((cardId) => {
        const card = state.entities[cardId];
        if (card && !card.matched) {
          card.flipped = false;
        }
      });
      state.flippedCards = [];
    },
    reshuffleFrameworks: (state) => {
      // Get all the current cards
      const allCards = frameworkAdapter.getSelectors().selectAll(state);

      // Shuffle the cards
      const shuffledCards = allCards.sort(() => Math.random() - 0.5);

      // Clear the current entities and re-add the shuffled cards
      frameworkAdapter.setAll(state, shuffledCards);
    },
    markMatched: (state, action) => {
      const [firstCardId, secondCardId] = action.payload;
      const firstCard = state.entities[firstCardId];
      const secondCard = state.entities[secondCardId];

      if (firstCard && secondCard) {
        firstCard.matched = true;
        secondCard.matched = true;
      }
    },
  },
});
export const frameworkSelectors = frameworkAdapter.getSelectors(
  (state) => state.frameworks
);
export const {
  addFrameworks,
  flipCard,
  resetFlippedCards,
  reshuffleFrameworks,
  markMatched,
} = frameworksSlice.actions;
export default frameworksSlice.reducer;
