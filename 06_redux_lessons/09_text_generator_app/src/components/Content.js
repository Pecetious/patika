import { useEffect, useState } from "react";
import { getText } from "../redux/textSlice";
import { useDispatch, useSelector } from "react-redux";
function Content() {
  const textData = useSelector((state) => state.text.items);
  const [paras, setParas] = useState(4);
  const [includeHTML, setIncludeHTML] = useState("false");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getText(paras));
  }, [dispatch, paras]);
  return (
    <div className="content">
      <div className="input_container">
        <div className="paragraph_input">
          <label>Paragraphs</label>
          <input
            type="number"
            value={paras}
            onChange={(e) => setParas(e.target.value)}
          />
        </div>
        <div className="paragraph_select">
          <label>Include HTML</label>
          <select onChange={(e) => setIncludeHTML(e.target.value === "true")}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
      </div>
      <div className="paragraph_container">
        {textData &&
          textData.map((item, index) =>
            includeHTML === true ? (
              // Render as raw HTML
              <p key={index}>&lt;p&gt;{item}&lt;/p&gt;</p>
            ) : (
              // Render as regular text in a <p> tag
              <p key={index}>{item}</p>
            )
          )}
      </div>
    </div>
  );
}

export default Content;
