import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";

function App() {
  return (
    <div className="App">
     <Counter/>
     <IncreaseCounter/>
     <DecreaseCounter/>
     <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
