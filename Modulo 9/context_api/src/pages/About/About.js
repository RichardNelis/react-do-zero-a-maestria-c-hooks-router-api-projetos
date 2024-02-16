//import { useContext } from "react";
//import { CounterContext } from "../../context/CounterContext";

// 4 - Refatorando com hook
import { useCounterContext } from "../../hooks/useCounterContext";

// 5 - Context complexo
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

const About = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor do Contador: {counter}</p>
    </div>
  );
};

export default About;
