import React, { useState } from 'react';
import {
  ListingContainer,
  Restaurant,
  RestaurantTitle,
  Rate,
  TitleAndRateContainer,
  RateAndStarContainer,
  Star,
  RestaurantDescription,
  Highlight,
  Tag,
  RestaurantImage
} from './styles';
import RestaurantModal from '../../modals/RestaurantModal';
import Button from '../Buttons';
import Modal from '../../modals/modal';

interface RestaurantListingProps {
  restaurants: RestaurantModal[];
}

const RestaurantListing: React.FC<RestaurantListingProps> = ({ restaurants }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantModal | null>(null);

  const handleOpenModal = (restaurant: RestaurantModal) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRestaurant(null);
  };

  return (
    <ListingContainer>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id}>
          {restaurant.highlight && <Highlight>{restaurant.highlight}</Highlight>}
          <Tag>{restaurant.tag}</Tag>
          <RestaurantImage src={restaurant.image} alt={restaurant.name} />

          <TitleAndRateContainer>
            <RestaurantTitle>{restaurant.name}</RestaurantTitle>
            <RateAndStarContainer>
              <Rate>{restaurant.rate}</Rate>
              <Star src={restaurant.star} alt="Star" />
            </RateAndStarContainer>
          </TitleAndRateContainer>

        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        <Button type="link" title="Saiba mais" to={`/restaurantes/${restaurant.id}`}>
          Saiba mais
        </Button>
      </Restaurant>
    ))}
  </ListingContainer>
);



export default RestaurantListing;
