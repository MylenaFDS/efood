import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

const Rotas: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurants/:id" element={<Perfil />} />
  </Routes>
);

export default Rotas;
