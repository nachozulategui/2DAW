import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js';



function App() {

  
  
  const Description = () => {
    return <p> es la hora de que react me de una respuesta</p>
  
  }

  return (
    <div className="App">
      Hola mundo
      <Mensaje color='green' message='estamos trabayando'/>
      <Mensaje color='red' message='ahora en un curso'/>
      <Mensaje color='blue' message='De react'/>
      <Description/>
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
