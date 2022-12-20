import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
<div className='App'>
    <NavBar/>
    <Sidebar/>
    <ItemListContainer greeting='Cliente'/>
</div>
  );
}

export default App;
