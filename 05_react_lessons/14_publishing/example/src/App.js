import { ExampleComponent, Button } from "pecheteui";
import "pecheteui/dist/index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ExampleComponent text="Merhaba" />
      <Button text="click" onClick={()=> alert("asdafad")}/>
    </div>
  );
}

export default App;
