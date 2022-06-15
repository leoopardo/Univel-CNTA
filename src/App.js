import { NavBar } from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { Home } from './pages/Home/home';
import { Especializacao } from './pages/Especializacao/especializacao';
import { ProfCard } from './components/ProfCard/profCard';
import Adriana from "./components/img/ProfAdri.png"
import AnaP from "./components/img/ProfAna.png"

function App() {
  return (
    <div className="App">
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre-nos' element={<Home/>}/>

        {/* Nutrição */}
        <Route path='/Especializacao/nutricao' element={<Especializacao
          especNome="Nutrição"
          descricao="No CNTA os academicos atendem a nossa comunidade, juntamente aos professores responsáveis, e oferecem um acompanhamento personalizado. A elaboração de estratégias nutricionais para a reeducação alimentar e acompanhamento de restrições causadas por alergias ou outras condições, são atuações que fazem parte do trabalho do Nutricionista, que ainda está em expansão."
        >
          <ProfCard/>
        </Especializacao>}/>
        {/* Desportiva */}
        <Route path='/Especializacao/desportiva' element={<Especializacao
          especNome="Fisioterapia Desportiva"
          descricao="A Fisioterapia Desportiva no CNTA, tem o objetivo de reabilitar atletas de lesões e devolvelos a prática esportiva e também de previnir com que essas lesões ocorram em atletas ativos."
        >
        <ProfCard/>
        </Especializacao>}/>

        {/* Neurologia */}
        <Route path='/Especializacao/neurologia' element={<Especializacao
          especNome="Fisioterapia em Neurologia"
          descricao="O setor de Fisioterapia em Neurologia reabilita aqueles que sofreram de complicações neurológicas, devolvendo ao máximo as funções que perderam."
        >
        <ProfCard
          ProfImg={AnaP}
          ProfNome="Ana Paula Janner Zanardi"
          ProfDescricao="Fisioterapeuta especialista Neuro Adulto e idoso"
        />
        </Especializacao>}/>

        {/* Ortopedia */}
        <Route path='/Especializacao/ortopedia' element={<Especializacao
          especNome="Fisioterapia em Ortopedia"
          descricao="A Fisioterapia em Ortopedia tem o foco em reabilitar pessoas que sofrem de desequilibrios e patologias osteomusculares"
        >
          <ProfCard/>
          <ProfCard/>
        </Especializacao>}/>

        {/* Aquatica */}
        <Route path='/Especializacao/aquatica' element={<Especializacao
          especNome="Fisioterapia Aquática"
          descricao="A Fisioterapia Aquática é flexível a quase todos os pacientes, nela, os academicos ministram treinos na piscina da clinica de fisioterapia juntamente aos professores"
        >
          <ProfCard 
          ProfImg={Adriana}
          ProfNome="Adriana Guidugli Dal Pozzo"
          />
        </Especializacao>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
