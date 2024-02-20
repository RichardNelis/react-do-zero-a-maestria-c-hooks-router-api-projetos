//useContext
import { HookUseContext } from "../components/HookUseContext";
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from "../components/HookCustom";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      Home
      <HookUseState />
      <hr />
      <HookUseReducer />
      <hr />
      <HookUseEffect />
      <hr />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef />
      <hr />
      <HookUseCallback />
      <hr />
      <HookUseMemo />
      <hr />
      <HookUseLayoutEffect />
      <hr />
      <HookUseImperativeHandle />
      <hr />
      <HookCustom />
    </div>
  );
};

export default Home;
