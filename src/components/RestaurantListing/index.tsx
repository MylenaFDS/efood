import React from 'react';
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


interface RestaurantListingProps {
  restaurantes: RestaurantModal[];
}

const RestaurantListing: React.FC<RestaurantListingProps> = ({ restaurantes }) => {

  return (
    <ListingContainer>
      {restaurantes.map((restaurant) => (
        <Restaurant key={restaurant.id}>
          {restaurant.highlight && <Highlight>{restaurant.highlight}</Highlight>}
          <Tag>{restaurant.tipo}</Tag>
          <RestaurantImage src={restaurant.capa} alt={restaurant.titulo} />

          <TitleAndRateContainer>
            <RestaurantTitle>{restaurant.titulo}</RestaurantTitle>
            <RateAndStarContainer>
              <Rate>{restaurant.rate}</Rate>
              <Star src={restaurant.star} alt="Star" />
            </RateAndStarContainer>
          </TitleAndRateContainer>

          <RestaurantDescription>{restaurant.descricao}</RestaurantDescription>
          <Button type="link" title="Saiba mais" to={`/restaurantes/${restaurant.id}`}>
            Saiba mais
          </Button>
        </Restaurant>
      ))}
    </ListingContainer>
  );
};

export default RestaurantListing;
