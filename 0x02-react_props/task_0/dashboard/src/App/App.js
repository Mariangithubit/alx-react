import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holberton_logo from './holberton-logo.jpg';

function App() {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
    </>
  );
}

export default App;
