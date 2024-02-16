//import { useContext } from "react";
//import { CounterContext } from "../../context/CounterContext";
import ChangeCounter from "../../components/ChangeCounter/ChangeCounter";

// 4 - Refatorando com hook
import { useCounterContext } from "../../hooks/useCounterContext";

// 5 - Context complexo
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

const Home = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - Context complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - Alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do Contador: {counter}</p>
      {/* 3 - Alterando o valor do contexto */}
      <ChangeCounter />
      {/* 6 - Alterando state complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("")}>Padrão</button>
      </div>
    </>
  );
};

export default Home;
