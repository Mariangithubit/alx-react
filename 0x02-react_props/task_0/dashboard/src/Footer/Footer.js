import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holberton_logo from './holberton-logo.jpg';

function App() {
  return (
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
  );
}

export default App;
