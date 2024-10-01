import React from 'react';
import { ListingContainer, Restaurant, RestaurantTitle,Rate,TitleAndRateContainer,Star,RestaurantDescription, Highlight, Tag, RestaurantImage } from './styles';
import RestaurantModel from '../../models/restaurant';
import Button from '../Buttons'; // Importa o novo botão

interface RestaurantListingProps {
  restaurants: RestaurantModel[]; // Define as props esperadas
}

const RestaurantListing: React.FC<RestaurantListingProps> = ({ restaurants }) => (
  <ListingContainer>
    {restaurants.map((restaurant, index) => (
      <Restaurant key={restaurant.id}>
        {restaurant.highlight && <Highlight>{restaurant.highlight}</Highlight>}
        <Tag>{restaurant.tag}</Tag>
        <RestaurantImage src={restaurant.image} alt={restaurant.name} />
        
        {/* Agrupando o título e o rate */}
        <TitleAndRateContainer>
          <RestaurantTitle>{restaurant.name}</RestaurantTitle>
          <Rate>{restaurant.rate}</Rate>
          <Star src={restaurant.star} alt={restaurant.star}/>
        </TitleAndRateContainer>
        
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        <Button type="link" title="Saiba mais" to="/restaurant">
          Saiba mais
        </Button>
      </Restaurant>
    ))}
  </ListingContainer>
);

export default RestaurantListing;