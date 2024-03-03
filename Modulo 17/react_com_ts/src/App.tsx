import { createContext } from "react";

// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";
import State from "./components/State";

// 9 - Context API
import Context from "./components/Context";

// 8 - Type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo"

// 9 - Context API
interface IAppContext {
  language: string,
  framework:string,
  projects:number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // 1 - váriaveis
  const name: string = "Richard";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string) : string => {
    return `Olá, ${name}`;
  }

  // 8 - type
  const myText:textOrNull = "Tem algum texto aqui";
  let mySecondText:textOrNull = null;

  mySecondText = "opa";

  const testandoFixed :fixed = "Isso";

  // 9 - Context API
  const contextValue:IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  };
  
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>React com Typescript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p> }
      <h3>{userGreeting(name)}</h3>
      <p>
      <FirstComponent/>
      <SecondComponent name="Segundo"/>
      <Destructuring title="Primeiro post" content="Algum comentários" commentQty={10} tags={["ts", "js"]} category={Category.TS}/>
      <Destructuring title="Segundo post" content="Algum comentários" commentQty={20} tags={["ts", "js"]} category={Category.TS}/>
      <State/>
      {myText && <p>Tem tempo na váriavel</p>}
      {mySecondText && <p>Tem tempo na váriavel</p>}
      </p>
      <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
