import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holberton_logo from './holberton-logo.jpg';

function App() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>  
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" />
        <button>OK</button>
      </form>
    </>
  );
}

export default App;
