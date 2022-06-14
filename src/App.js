import { NavBar } from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { Home } from './pages/Home/home';
import { Especializacao } from './pages/Especializacao/especializacao';

function App() {
  return (
    <div className="App">
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre-nos' element={<Home/>}/>
        <Route path='/Especializacao/nutricao' element={<Especializacao
          especNome="Nutrição"
        />}/>
        <Route path='/Especializacao/desportiva' element={<Especializacao
          especNome="Fisioterapia Desportiva"
        />}/>
        <Route path='/Especializacao/neurologia' element={<Especializacao
          especNome="Fisioterapia em Neurologia"
        />}/>
        <Route path='/Especializacao/ortopedia' element={<Especializacao
          especNome="Fisioterapia em Ortopedia"
        />}/>
        <Route path='/Especializacao/aquatica' element={<Especializacao
          especNome="Fisioterapia Aquática"
        />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
