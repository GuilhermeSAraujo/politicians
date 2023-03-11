import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Deputado } from './Pages/Deputado';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/deputado' element={<Deputado />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
