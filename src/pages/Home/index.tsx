import React, { useEffect, useState } from 'react';
import Hero from "../../components/Hero";
import RestaurantListing from "../../components/RestaurantListing";
import RestaurantModel from '../../modals/RestaurantModal';

const Home = () => {
  const [restaurantes, setRestaurants] = useState<RestaurantModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
        const data = await response.json();
        setRestaurants(data); // Ajuste para o formato correto de dados
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Hero />
      <RestaurantListing restaurants={restaurantes} />
    </>
  );
};

export default Home;

