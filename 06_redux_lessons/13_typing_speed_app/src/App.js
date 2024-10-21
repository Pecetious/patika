import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInput,
  startGame,
  stopGame,
  decrementTimer,
  resetGame,
  updateScore,
  markWordStatus,
  checkBatchCompletion,
  incrementCurrentWordIndex,
} from "./redux/wordsSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const {
    words,
    input,
    timer,
    isGameActive,
    correctWords,
    incorrectWords,
    currentWordIndex,
    totalKeystrokes,
    currentBatch,
  } = useSelector((state) => state.words);

  const inputRef = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const WORDS_PER_BATCH = 20;

  useEffect(() => {
    let interval;
    if (isGameActive && timer > 0) {
      interval = setInterval(() => dispatch(decrementTimer()), 1000);
    } else if (timer === 0) {
      dispatch(stopGame());
      setShowResults(true);
    }
    return () => clearInterval(interval);
  }, [isGameActive, timer, dispatch]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setInput(value));

    if (!isGameActive) {
      dispatch(startGame());
    }

    const currentWord =
      words[currentBatch * WORDS_PER_BATCH + currentWordIndex];
    if (currentWord) {
      const currentWordText = currentWord.turkish;

      // Check for partial correctness
      if (value.length > 0) {
        let isPartialCorrect = true;

        for (let i = 0; i < value.length; i++) {
          if (value[i] !== currentWordText[i]) {
            isPartialCorrect = false;
            break;
          }
        }

        // Set the status to partial-correct if applicable
        if (isPartialCorrect) {
          dispatch(
            markWordStatus({
              index: currentBatch * WORDS_PER_BATCH + currentWordIndex,
              status: "partial-correct",
            })
          );
        } else {
          // Do nothing here for incorrect status
          // We'll check for incorrect in handleKeyDown
        }
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();

      if (input.trim().length > 0) {
        const currentWord =
          words[currentBatch * WORDS_PER_BATCH + currentWordIndex];
        if (currentWord) {
          const currentWordText = currentWord.turkish;

          if (input.trim() === currentWordText) {
            dispatch(
              markWordStatus({
                index: currentBatch * WORDS_PER_BATCH + currentWordIndex,
                status: "correct",
              })
            );
            dispatch(updateScore({ correct: 1, incorrect: 0 }));
          } else {
            dispatch(
              markWordStatus({
                index: currentBatch * WORDS_PER_BATCH + currentWordIndex,
                status: "incorrect",
              })
            );
            dispatch(updateScore({ incorrect: 1, correct: 0 }));
          }
        }

        dispatch(checkBatchCompletion());
        dispatch(incrementCurrentWordIndex());
        dispatch(setInput(""));
      }
    }
  };

  const handleRestart = () => {
    dispatch(resetGame());
    inputRef.current.focus();
    setShowResults(false);
  };

  const currentWords = words.slice(
    currentBatch * WORDS_PER_BATCH,
    (currentBatch + 1) * WORDS_PER_BATCH
  );
  const totalWords = correctWords + incorrectWords;
  const accuracy = totalWords > 0 ? (correctWords / totalWords) * 100 : 0;
  return (
    <div className="app">
      <h1 className="title">Typing Speed Test</h1>
      <div className="timer">Time Remaining: {timer}s</div>

      <div className="words">
        {currentWords.map((word, index) => (
          <span
            key={index}
            className={`word ${
              word.status === "correct"
                ? "green"
                : word.status === "partial-correct"
                ? "yellow"
                : word.status === "incorrect"
                ? "red"
                : ""
            }`}
          >
            {word.turkish}
          </span>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        disabled={!isGameActive && timer === 0}
        placeholder="Type the words here..."
        className="input"
      />
      <button onClick={handleRestart} className="restart-button">
        Restart
      </button>

      <div className="words_tracker">
        <p>Correct Words: {correctWords}</p>
        <p>Incorrect Words: {incorrectWords}</p>
      </div>

      {showResults && (
        <div className="results">
          <h2>Results</h2>
          <p>Correct Words: {correctWords}</p>
          <p>Incorrect Words: {incorrectWords}</p>
          <p>Total Keystrokes: {totalKeystrokes}</p>
          <p>Accuracy: {accuracy.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
