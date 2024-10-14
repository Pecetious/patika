import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateText } from "../redux/markdownSlice";
import { marked } from "marked";

function Content() {
  const { textCurrent, textHelp, isShowingHelp } = useSelector(
    (state) => state.markdown
  );
  const dispatch = useDispatch();
  const [markdownHTML, setMarkdownHTML] = useState("");

  useEffect(() => {
    const contentToParse = isShowingHelp ? textHelp : textCurrent;
    const parsedMarkdown = marked(contentToParse);
    setMarkdownHTML(parsedMarkdown);
  }, [textCurrent, textHelp, isShowingHelp]);

  const handleTextChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  return (
    <div className="content">
      <div className="text-panel-left">
        <textarea
          value={isShowingHelp ? textHelp : textCurrent}
          onChange={handleTextChange}
          readOnly={isShowingHelp}
        />
      </div>
      <div
        className="text-panel-right"
        dangerouslySetInnerHTML={{ __html: markdownHTML }}
      />
    </div>
  );
}

export default Content;
