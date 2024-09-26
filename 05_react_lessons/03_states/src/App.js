import { useState } from "react";
function App() {
  const [name, setName] = useState("Peçete");
  const [age, setAge] = useState(23);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34852 });
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Radyoaktif Boi")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>
      <hr />
      <h2>Friends</h2>
      {friends.map((friend, key) => (
        <div key={key}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Add Freind
      </button>
      <br />
      <h2>Address</h2>

      <div>
        {address.title} {address.zip}
      </div>
      <button onClick={() => setAddress({ ...address, title: "Ankara" })}>
        Change Address
      </button>
    </div>
  );
}

export default App;
