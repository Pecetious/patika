// React and Redux Const
const { Component } = React;
const { Provider, connect } = ReactRedux;
const { applyMiddleware, createStore } = Redux;

// Redux Action Types
const ENTER_TEXT = 'enter_text';
const TOGGLE_HELP = 'toggle_help;'

// Actions

const enterText = (rawText) => {
  return {
    type: ENTER_TEXT,
    payload: rawText,
  };
};

const showHelp = () => {
  return {
    type: TOGGLE_HELP,
  };
};

// Reducers
const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

 //Redux initial state 
const INIT_STATE = {
  textCurrent: 'this is user input',
  textUser: 'this is user input',
  textHelp: help,
  isShowingHelp: false,
};
// redux reducer
const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ENTER_TEXT:
      return {
        ...state,
        textCurrent: action.payload,
        textUser: action.payload,
      };
    case TOGGLE_HELP: {
      // if help is already activated, hide it and show user input
      if (state.isShowingHelp) {
        return {
          ...state,
          textCurrent: state.textUser,
          isShowingHelp: false,
        }
      }
      // if help is not activated, hide user input and show help
      return {
        ...state,
        textCurrent: state.textHelp,
        isShowingHelp: true,
      }
    }
    default:
      return state;
  }
};

// Components
//App Component
class App extends Component {

  render() {
    const {
      textCurrent,
      isShowingHelp,
      enterText,
      showHelp,
    } = this.props;
    const parsedText = marked(textCurrent, { sanitize: true});
    const processedText = { __html: parsedText };

    return (
      <div>

        <div className="main-content">

          <header>
            <h1 className="app-title">Markdown Previewer</h1>
            <div
              onClick={showHelp}
              className={`help-button ${isShowingHelp && 'active'}`}>
              <i className="fa fa-question" aria-hidden="true"></i>
            </div>
          </header>

          <div className="text-panels">
            <textarea
              value={textCurrent}
              onChange={(event) => enterText(event.target.value)}
              className="text-panel-left"
              readOnly={isShowingHelp}></textarea>
            <div
              dangerouslySetInnerHTML={processedText}
              className="text-panel-right"></div>
          </div>

        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  textCurrent: state.textCurrent,
  isShowingHelp: state.isShowingHelp,
});

App = connect(mapStateToProps, { enterText, showHelp })(App);

/// Index
// Index.js
const configureStore = () => {
  const middlewares = [];

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
};

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
