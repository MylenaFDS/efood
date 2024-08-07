import React from 'react';
import { ListingContainer, Restaurant, RestaurantTitle, RestaurantDescription, Highlight, Tag } from './styles';
import { restaurants } from '../../data/restaurants';
import Button from '../Buttons'; // Importa o novo botão

const RestaurantListing: React.FC = () => (
  <ListingContainer>
    {restaurants.map((restaurant, index) => (
      <Restaurant 
        key={restaurant.id} 
        style={{ 
          top: `${440 + Math.floor(index / 2) * 446}px`, 
          left: `${171 + (index % 2) * 552}px` 
        }}
      >
        {/* Renderizar o destaque apenas se existir */}
        {restaurant.highlight && <Highlight>{restaurant.highlight}</Highlight>}
        <Tag>{restaurant.tag}</Tag>
        <img src={restaurant.image} alt={restaurant.name} style={{ width: '470px', height: '217px' }} />
        <RestaurantTitle>{restaurant.name}</RestaurantTitle>
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        
        <Button 
        type='link' 
        title='Saiba mais'
        to='/restaurant'>
          Saiba mais
        </Button>
      </Restaurant>
    ))}
  </ListingContainer>
);

export default RestaurantListing;
