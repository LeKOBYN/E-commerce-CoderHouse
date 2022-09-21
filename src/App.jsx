import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer  from './components/ItemListContainer';
function App() {
  return (
    <>
    <Navbar/>
    <div>
    <ItemListContainer greeting ="Bienvenido!"/>
    
    </div>
    </>
  );
}

export default App;
