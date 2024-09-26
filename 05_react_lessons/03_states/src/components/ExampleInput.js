import { useState } from "react";
function ExampleInput() {
  const [input, setInput] = useState({name: "",surname: ""});
  const handleInputs = (e) =>{
    console.log(e.target.name)
    setInput({...input,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <p>Please enter a name</p>
      <input
        value={input.name}
        name="name"
        onChange={handleInputs}
      />
      <br />
      <input
        value={input.surname}
        name="surname"
        onChange={handleInputs}
      />
      <br />
      {input.name} {input.surname}
    </div>
  );
}

export default ExampleInput;
