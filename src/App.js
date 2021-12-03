import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { ThingsProvider } from '../src/context/Context';

const codeWorker = [
  {name:'Elvito', skills: 'back-end, front-end, español, chespañol'},
  {name:'Jona', skills: 'front-end, DarkMetal extremo'},
  {name:'Juani', skills: 'The best frontender, bolucompras, la navaja' }
]

function App() {
  return (
    <ThingsProvider>
    <div className="App">
      <header className="App-header">
      <h1>Veamos Context</h1>
      <Home data={codeWorker}/>
      </header>
    </div>
    </ThingsProvider>
  );
}

export default App;
