import logo from './logo.svg';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
<div className='App'>
    <NavBar/>
    <ItemListContainer greeting='Cliente'/>
</div>
  );
}

export default App;
