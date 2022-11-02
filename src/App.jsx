import React from 'react';
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartContextProvider} from './context/CartContext';
import CartView from './components/CartView/CartView';
import  Checkout from './components/Checkout/Checkout'

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/curso/:id" element={<ItemDetailContainer/>}></Route>
            <Route path="*" element={<h2>404</h2>}></Route>
            <Route path='/category/:categoryID' element={<ItemListContainer/>}></Route>
            <Route path='/cart' element={<CartView/>}></Route>
            <Route path='/chekout' element={<Checkout/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}



export default App;