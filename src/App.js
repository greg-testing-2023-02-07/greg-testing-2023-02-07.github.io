import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Tx from './Tx';
import preval from 'preval.macro';

const buildTime = preval`module.exports = new Date().toLocaleString();`

function App() {
  return (
    <div className="App">
      <p>Built at {buildTime}</p>
      <Register></Register>
      <Tx></Tx>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
