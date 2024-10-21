import { createSlice } from "@reduxjs/toolkit";
import wordData from "../words.json";
import arrayShuffle from "array-shuffle";

const WORDS_PER_BATCH = 20;

export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    words: arrayShuffle(wordData.words).map((item) => {
      return { ...item, status: "" };
    }),
    timer: 60,
    input: "",
    correctWords: 0,
    incorrectWords: 0,
    totalKeystrokes: 0,
    isGameActive: false,
    currentBatch: 0,
    currentWordIndex: 0,
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
      state.totalKeystrokes += action.payload.length;
    },
    startGame: (state) => {
      state.isGameActive = true;
    },
    stopGame: (state) => {
      state.isGameActive = false;
    },
    decrementTimer: (state) => {
      if (state.timer > 0) state.timer -= 1;
    },
    resetGame: (state) => {
      state.words = arrayShuffle(wordData.words).map((item) => {
        return { ...item, status: "" };
      });
      state.timer = 60;
      state.input = "";
      state.correctWords = 0;
      state.incorrectWords = 0;
      state.totalKeystrokes = 0;
      state.isGameActive = false;
      state.currentBatch = 0;
      state.currentWordIndex = 0;
    },
    updateScore: (state, action) => {
      const { correct, incorrect } = action.payload;
      state.correctWords += correct;
      state.incorrectWords += incorrect;
    },
    markWordStatus: (state, action) => {
      const { index, status } = action.payload;
      if (state.words[index]) {
        state.words[index].status = status;
      }
    },
    incrementCurrentWordIndex: (state) => {
      state.currentWordIndex += 1;
    },
    checkBatchCompletion: (state) => {
      const start = state.currentBatch * WORDS_PER_BATCH;
      const end = start + WORDS_PER_BATCH;
      const allWordsChecked = state.words
        .slice(start, end)
        .every((word) => word.status !== "");

      if (allWordsChecked) {
        state.currentBatch += 1;
        state.currentWordIndex = -1;
      }
    },
  },
});

export const {
  setInput,
  startGame,
  stopGame,
  decrementTimer,
  resetGame,
  updateScore,
  markWordStatus,
  incrementCurrentWordIndex,
  checkBatchCompletion,
} = wordsSlice.actions;

export default wordsSlice.reducer;
