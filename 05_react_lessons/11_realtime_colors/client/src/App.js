import "./App.css";
import { init, subscribe } from "./socketApi";
import { useEffect, useState } from "react";
import Palette from "./components/Palette";
function App() {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    init();
    subscribe((color)=>{
      setActiveColor(color)
    });
  }, []);
  return (
    <div className="App" style={{backgroundColor: activeColor}}>
      <Palette activeColor={activeColor}/>
    </div>
  );
}

export default App;
