import { NavBar } from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { Home } from './pages/Home/home';

function App() {
  return (
    <div className="App">
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
