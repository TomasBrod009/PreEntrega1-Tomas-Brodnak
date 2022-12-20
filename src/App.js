import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
import './App.css';


function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path='/category/:id' element={<ItemListContainer/>}Route/>
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route ></Route>
</Routes>
</Router>
  );
}

export default App;
