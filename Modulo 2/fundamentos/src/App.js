// components
import FirstComponent from './components/FirstComponent';

// styles / css
import './App.css';
import TemplateExpression from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
