import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Barracategorias from './components/barracategorias/Barracategorias';
import ItemListContainer from './components/itemsContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import EnConstruccion from './components/EnConstruccion/EnConstruccion';
import { CartHandler } from './context/cartContext';

function App() {
  return (

    <BrowserRouter>
      <CartHandler>
        <NavBar />
        <Barracategorias/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>} />
          <Route path='/categoria/:categoria' element= {<ItemListContainer/>} />
          <Route path='/producto/:id' element= {<ItemDetailContainer/>} />
          <Route path='*' element= {<EnConstruccion />} />
          <Route />
        </Routes>
      </CartHandler>
    </BrowserRouter>
  );
}

export default App;