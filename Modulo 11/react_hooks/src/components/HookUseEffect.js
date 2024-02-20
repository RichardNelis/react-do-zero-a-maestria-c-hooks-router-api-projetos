import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem dependencia
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - Array de dependencia vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez!");
  }, []);

  // 3 - item no array de dependencia
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda");
    }
  }, [anotherNumber]);

  // 4 - CleanUp do useEffect
  useEffect(() => {
    //const timer = setTimeout(() => {
    //  console.log("Hello world");
    //}, 2000);

    //return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number {number}</p>
      <button onClick={changeSomething}>Executar!</button>

      <p>Anothernumber {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber!
      </button>
    </div>
  );
};

export default HookUseEffect;
