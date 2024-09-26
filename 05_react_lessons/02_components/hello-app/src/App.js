import "./App.css";
import Header from "./components/Header.js";
import User from "./components/User.js";
const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Tayfun",
  },
  {
    id: 3,
    name: "Ayşe",
  },
];
function App() {
  return (
    <>
      <Header />
      <User
        name="Radyoaktif"
        surname="Pecete"
        isLoggedIn={true}
        friends={friends}
      />
    </>
  );
}

export default App;
