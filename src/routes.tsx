import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import RestaurantDetails from './pages/RestaurantDetails';

const Rotas: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/restaurantes/:id" element={<RestaurantDetails />} />
  </Routes>
);

export default Rotas;
