
import './App.css';
import Baner from './Components/baner/baner';
import CalendarioCarrinho from './Components/componentes/componentesPrincipal';
import Menu from './Components/menu/menu';
 


function App() {
  return (
    <div className="App">
      
     <Menu/>
     <Baner/>
     <CalendarioCarrinho/> 
    </div>
  );
}

export default App;
