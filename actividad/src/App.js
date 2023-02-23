import { Routes,Route } from 'react-router-dom';
import {Header} from '../src/components/Layouts/Header/Header'
import { Home } from './components/Pages/Home/Home';
import { UseCustom } from './components/Pages/Home/UseCustom/UseCustom';
import { UseEffect } from './components/Pages/Home/UseEffect/UseEffect';
import { UseState } from './components/Pages/UseState/UseState';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/UseState" element={<UseState />}/>
        <Route path="/UseCustom" element={<UseCustom />}/>
        <Route path="/UseEffect" element={<UseEffect />}/>
      </Routes>
    </div>
  );
}

export default App;
