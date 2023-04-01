import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Inicio from './components/contenidos/inicio';
import Caracteristica from './components/contenidos/caracteristicas';
import Contacto from './components/contenidos/contacto';

import './App.css';
import BarNav from './components/navbar/BarNav';
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>             
          <Routes> 
            <Route path='/' element={ <BarNav /> }>
                <Route path='inicio' element={ <Inicio/> }/>
                <Route path='caracteristicas' element={ <Caracteristica/> }/>
                <Route path='contacto' element={ <Contacto/> }/>
            </Route>
          </Routes>             
      </BrowserRouter>      
    </div>
  );
}

export default App;
