import React from 'react';
import { ListingContainer, Restaurant, RestaurantTitle, RestaurantDescription, Highlight, Tag } from './styles';
import RestaurantModel from '../../models/restaurant';
import Button from '../Buttons'; // Importa o novo botão

interface RestaurantListingProps {
  restaurants: RestaurantModel[]; // Define as props esperadas
}

const RestaurantListing: React.FC<RestaurantListingProps> = ({ restaurants }) => (
  <ListingContainer>
    {restaurants.map((restaurants, index) => (
      <Restaurant 
        key={restaurants.id} 
        style={{ 
          top: `${440 + Math.floor(index / 2) * 446}px`, 
          left: `${171 + (index % 2) * 552}px` 
        }}
      >
        {/* Renderizar o destaque apenas se existir */}
        {restaurants.highlight && <Highlight>{restaurants.highlight}</Highlight>}
        <Tag>{restaurants.tag}</Tag>
        <img src={restaurants.image} alt={restaurants.name} style={{ width: '470px', height: '217px' }} />
        <RestaurantTitle>{restaurants.name}</RestaurantTitle>
        <RestaurantDescription>{restaurants.description}</RestaurantDescription>
        
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
