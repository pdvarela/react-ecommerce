import './App.css';
import NavBar from './components/navBar/navBar';
import Barracategorias from './components/barracategorias/Barracategorias';
import ItemListContainer from './components/itemsContainer/ItemsListContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Barracategorias/>
      <ItemListContainer items={'ItemListContainer'}/>
    </div>
  );
}

export default App;
