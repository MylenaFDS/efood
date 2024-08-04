import React from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantDetailsContainer, RestaurantImage, RestaurantTitle, RestaurantDescription, RestaurantTag } from '../../components/Restaurant/styles';
import { restaurants } from '../../data/restaurants'; // Ajuste o caminho conforme necessário

const Perfil: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Verificar se id está definido e converter para número
  const restaurantId = id ? parseInt(id, 10) : -1; // Use -1 ou qualquer valor que não esteja presente na lista

  // Encontrar o restaurante correspondente
  const restaurant = restaurants.find(rest => rest.id === restaurantId);

  if (!restaurant) {
    return <p>Restaurante não encontrado.</p>;
  }

  return (
    <RestaurantDetailsContainer>
      <RestaurantImage src={restaurant.image} alt={restaurant.name} />
      <RestaurantTitle>{restaurant.name}</RestaurantTitle>
      <RestaurantTag>{restaurant.tag}</RestaurantTag>
      <RestaurantDescription>{restaurant.description}</RestaurantDescription>
    </RestaurantDetailsContainer>
  );
};

export default Perfil;
