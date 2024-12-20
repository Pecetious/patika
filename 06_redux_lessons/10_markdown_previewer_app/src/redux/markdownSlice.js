import { createSlice } from "@reduxjs/toolkit";

// Markdown help content
const help = `Heading
=======
Sub-heading
-----------
### Another deeper heading

Paragraphs are separated by a blank line.

Leave 2 spaces at the end of a line to do a line break.

Text attributes *italic*, **bold**, \`monospace\`, ~~strikethrough~~.

Shopping list:
  * apples
  * oranges
  * pears

Numbered list:
  1. apples
  2. oranges
  3. pears

The rain---not the reign---in Spain.

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    textCurrent: "this is user input",
    textHelp: help,
    isShowingHelp: false,
  },
  reducers: {
    toggleHelp: (state) => {
      state.isShowingHelp = !state.isShowingHelp;
      if (!state.isShowingHelp) {
        state.textCurrent = "this is user input";
      }
    },
    updateText: (state, action) => {
      state.textCurrent = action.payload;
    },
  },
});

export const { toggleHelp, updateText } = markdownSlice.actions;
export default markdownSlice.reducer;
