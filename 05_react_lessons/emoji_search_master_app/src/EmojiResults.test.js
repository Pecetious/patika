import React from "react";
import ReactDOM from "react-dom";
import EmojiResults from "./EmojiResults";
import emojiList from "./emojiList.json";
import filterEmoji from "./filterEmoji";
import Clipboard from "clipboard";

jest.mock("clipboard", () => {
  return jest.fn().mockImplementation(() => {
    return {
      on: jest.fn(),
      destroy: jest.fn(),
      clipboardAction: {
        text: "",
        action: "",
        trigger: null,
        clearSelection: jest.fn(),
      },
    };
  });
});

describe("emoji list tests", () => {
  let div;
  let emojiCount;

  beforeEach(() => {
    div = document.createElement("div");
    ReactDOM.render(<EmojiResults emojiData={emojiList} />, div);
    emojiCount = emojiList.length;
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  });
  test("renders emoji list on initial load", () => {
    const renderedEmojiRows = div.querySelectorAll(
      ".component-emoji-result-row"
    );
    expect(renderedEmojiRows.length).toBe(emojiCount);
  });

  test("filters and renders emojis based on search input", () => {
    const input = document.createElement("input");
    input.value = "smile";
    div.appendChild(input);
    const filteredEmojiList = filterEmoji(input.value, 20);
    ReactDOM.render(<EmojiResults emojiData={filteredEmojiList} />, div);
    const renderedEmojiRows = div.querySelectorAll(
      ".component-emoji-result-row"
    );
    expect(renderedEmojiRows.length).toBe(filteredEmojiList.length);
    filteredEmojiList.forEach((emoji, index) => {
      expect(renderedEmojiRows[index].textContent).toContain(emoji.title);
    });
  });
  test("copies emoji to clipboard when clicked", () => {
    const emojiToCopy = emojiList[0]; // get the first emoji
    const emojiElement = div.querySelector(
      `.component-emoji-result-row[data-clipboard-text="${emojiToCopy.symbol}"]`
    );

    expect(emojiElement).not.toBeNull(); // first emoji should exist
    if (!emojiElement) {
      throw new Error("Emoji element not found in the DOM");
    }

    //simulate copy event
    const clipboardInstance = new Clipboard(".copy-to-clipboard");
    clipboardInstance.clipboardAction.text = emojiToCopy.symbol;
    clipboardInstance.clipboardAction.action = "copy";
    clipboardInstance.clipboardAction.trigger = emojiElement;

    //click on emoji
    emojiElement.click();

    //emoji should be copied to clipboard
    expect(clipboardInstance.clipboardAction.text).toBe(emojiToCopy.symbol);
    expect(clipboardInstance.clipboardAction.action).toBe("copy");

    // cleanup
    clipboardInstance.clipboardAction.clearSelection();
    clipboardInstance.destroy();
  });
});
