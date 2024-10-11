import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import {
  RestaurantDetailsContainer,
  RestaurantTitle,
  RestaurantTag,
  ProductsContainer,
  ProductItem,
} from './styles';
import restaurants from '../../data/restaurants';


const RestaurantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((rest) => rest.id === Number(id));

  if (!restaurant) {
    return <p>Restaurante não encontrado.</p>;
  }

  return (
    <>
      <Header />
      <RestaurantDetailsContainer backgroundImage={restaurant.image}>
        <RestaurantTag>{restaurant.tag}</RestaurantTag>
        <RestaurantTitle>{restaurant.name}</RestaurantTitle>
      </RestaurantDetailsContainer>

      {/* ProductsContainer agora está separado de RestaurantDetailsContainer */}
      {restaurant.products && restaurant.products.length > 0 && (
        <ProductsContainer>
          {restaurant.products.map((product, index) => (
            <ProductItem key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </ProductItem>
          ))}
        </ProductsContainer>
      )}
    </>
  );
};

export default RestaurantDetails;


