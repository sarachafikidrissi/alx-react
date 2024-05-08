import './App.css';
import holberton_logo from './app3_logo.jpg'
import { getFullYear, getFooterCopy } from './utils'


export default function App() {
  return (
    <>
    <div className="App-header">
      <img src={holberton_logo} alt="Logo"></img>
      <h1>School dashboard</h1>
    </div>

    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input type="text" id="email" name="email"></input>
      &nbsp;&nbsp;&nbsp;
      <label htmlFor="pwd">Password: </label>
      <input type="password" id="pwd" name="pwd"></input>
      &nbsp;&nbsp;&nbsp;
      <button>OK</button>
    </div>

    <div className="App-footer">
      <p>Copyright {getFullYear()} 
      - {getFooterCopy(true)} </p>
    </div>


    </>
  );
}
