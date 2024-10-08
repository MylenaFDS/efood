// src/pages/RestaurantDetails/index.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { RestaurantDetailsContainer, RestaurantImage, RestaurantTitle, RestaurantDescription, ProductsContainer, ProductItem } from './styles';
import restaurants from '../../data/restaurants'; // Importe a lista de restaurantes para simular a busca

const RestaurantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((rest) => rest.id === Number(id));

  if (!restaurant) {
    return <p>Restaurante não encontrado.</p>;
  }

  return (
    <>
      <Header />
      <RestaurantDetailsContainer>
        <RestaurantImage src={restaurant.image} alt={restaurant.name} />
        <RestaurantTitle>{restaurant.name}</RestaurantTitle>
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        
        {restaurant.products && restaurant.products.length > 0 && (
          <ProductsContainer>
            {restaurant.products.map((product, index) => (
              <ProductItem key={index}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>{product.price}</span>
              </ProductItem>
            ))}
          </ProductsContainer>
        )}
      </RestaurantDetailsContainer>
    </>
  );
};

export default RestaurantDetails;
