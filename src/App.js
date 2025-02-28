import './style.css'
import Home from './Home';
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    <div className="app">
    <h1>To_Do App</h1>
    <Home />
    </div>
    </>
  );
}

export default App;

