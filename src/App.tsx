import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos items={["learn typescript","learn react","do dsa"]} />
    </div>
  );
}

export default App;
