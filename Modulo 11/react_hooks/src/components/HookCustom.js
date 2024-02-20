import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousNumber = usePrevious(number);

  return (
    <div>
      <h2>HookCustom</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousNumber}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar</button>
    </div>
  );
};

export default HookCustom;
