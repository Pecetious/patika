import { useState } from "react";
import { send } from "../socketApi";
function Palette({activeColor}) {
  const [color, setColor] = useState("#000");
  return (
    <div className="palette">
      <h1>{activeColor}</h1>
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Click</button>
    </div>
  );
}

export default Palette;
