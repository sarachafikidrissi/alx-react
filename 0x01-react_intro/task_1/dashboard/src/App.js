import holberton_logo from './app_logo.jpg'
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
    </div>

    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
    </div>


    </>
  );
}
