import React from 'react';
import { 
  ListingContainer, 
  Restaurant, 
  RestaurantTitle, 
  RestaurantDescription, 
  Highlight, 
  Tag 
} from './styles';

const restaurants = [
  {
    id: 1,
    name: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    highlight: 'Destaque da semana',
    tag: 'Japonesa',
  },
  { 
    id: 2, 
    name: 'La Dolce Vita', 
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tag: 'Italiana'
  },
  { id: 3, name: 'Restaurante 3', description: 'Descrição do Restaurante 3', tag: 'Brasileira' },
  { id: 4, name: 'Restaurante 4', description: 'Descrição do Restaurante 4', tag: 'Mexicana' },
  { id: 5, name: 'Restaurante 5', description: 'Descrição do Restaurante 5', tag: 'Francesa' },
  { id: 6, name: 'Restaurante 6', description: 'Descrição do Restaurante 6', tag: 'Chinesa' },
];

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
        <RestaurantTitle>{restaurant.name}</RestaurantTitle>
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
      </Restaurant>
    ))}
  </ListingContainer>
);

export default RestaurantListing;

