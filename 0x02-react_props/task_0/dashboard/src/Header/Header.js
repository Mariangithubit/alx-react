import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holberton_logo from './holberton-logo.jpg';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

export default App;
