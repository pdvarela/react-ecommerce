import './App.css';
import NavBar from './components/navBar/navBar';
import Barracategorias from './components/barracategorias/Barracategorias';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Barracategorias/>
    </div>
  );
}

export default App;
