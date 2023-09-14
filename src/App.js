import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Barracategorias from './components/barracategorias/Barracategorias';
import ItemListContainer from './components/itemsContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Barracategorias/>
      <Routes>
        <Route path='/' element= {<ItemListContainer/>} />
        <Route path='/categoria/:categoria' element= {<ItemListContainer/>} />
        <Route path='/producto/:id' element= {<ItemDetailContainer/>} />
        {/* <Route path='*' element= {<h1>SITIO EN CONSTRUCCION</h1>} /> */}
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;