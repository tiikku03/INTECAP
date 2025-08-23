import logo from './logo.svg';
import './App.css';
import PrimerComponente from './components/PrimerComponente';
import SegundoComponente from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Uso de componentes en React
        </p>
        <PrimerComponente></PrimerComponente>
        <SegundoComponente></SegundoComponente>
      </header>
    </div>
  );
}
export default App;
