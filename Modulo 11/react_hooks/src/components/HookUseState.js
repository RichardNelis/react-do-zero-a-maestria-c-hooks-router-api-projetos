import { useState } from "react";

const HookUseState = () => {
  // 1 useState
  let userName = "Richard";

  const [name, setName] = useState("Beatriz");

  const changeNames = () => {
    userName = "Richard Nelis";

    setName("Beatriz Soares");

    console.log(userName);
  };

  console.log(name);

  // 2 - UseState e Input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    //Não recarregar a página (SPA)
    e.preventDefault();

    // Envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Váriavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes</button>

      {/* 2 - useState e Input */}
      <p>Digite sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
        <p>Você tem {age} anos</p>
      </form>
    </div>
  );
};

export default HookUseState;
