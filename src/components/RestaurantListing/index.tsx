import React from 'react';
import {ListingContainer, Restaurant, RestaurantTitle, RestaurantDescription, Highlight, Tag, SaibaMaisButton} from './styles';
import HiokiSushi from '../../assets/images/HiokiSushi.svg';
import LaDolceVitaTrattoria from '../../assets/images/LaDolceVitaTrattoria.svg';
import SaboresDaTerra from '../../assets/images/SaboresDaTerra.jpg';
import LosTacosLocos from '../../assets/images/LosTacosLocos.jpg';
import LaBelleEpoque from '../../assets/images/LaBelleEpoque.jpg';
import PalacioDeJade from '../../assets/images/PalacioDeJade.jpg';
const restaurants = [
  {
    id: 1,
    name: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    highlight: 'Destaque da semana',
    tag: 'Japonesa',
    image: HiokiSushi  // Usando a variável importada
  },
  { 
    id: 2, 
    name: 'La Dolce Vita', 
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tag: 'Italiana',
    image: LaDolceVitaTrattoria  // Substitua pelo caminho da imagem
  },
  { 
    id: 3, 
    name: 'Sabores da Terra', 
    description: 'Sabores da Terra oferece o melhor da culinária brasileira em sua casa! Desfrute de pratos típicos como feijoada e moqueca, com ingredientes frescos e temperos caseiros. Entrega rápida, porções generosas e sabor autêntico. Peça já!', 
    tag: 'Brasileira',
    image: SaboresDaTerra // Substitua pelo caminho da imagem
  },
  { 
    id: 4, 
    name: 'Los Tacos Locos', 
    description: 'Los Tacos Locos oferece tacos frescos, burritos suculentos e guacamole irresistível. Sabor autêntico do México entregue rapidamente à sua porta. Peça já e experimente a festa dos sabores!', 
    tag: 'Mexicana',
    image: LosTacosLocos  // Substitua pelo caminho da imagem
  },
  { 
    id: 5, 
    name: 'La Belle Époque', 
    description: 'La Belle Époque é um refúgio de elegância, onde a autêntica culinária francesa ganha vida. Saboreie pratos clássicos como escargots, coq au vin e crêpes, preparados com maestria e um toque de tradição. Venha experimentar a essência da França em cada garfada!', 
    tag: 'Francesa',
    image: LaBelleEpoque  // Substitua pelo caminho da imagem
  },
  { 
    id: 6, 
    name: 'Palácio de Jade', 
    description: 'Palácio de Jade traz o autêntico sabor da China com pratos como pato à Pequim e rolinhos primavera. Sabores tradicionais em um ambiente sofisticado. Experimente agora!', 
    tag: 'Chinesa',
    image: PalacioDeJade  // Substitua pelo caminho da imagem
  },
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
        <img src={restaurant.image} alt={restaurant.name} style={{ width: '470px', height: '217px' }} />
        <RestaurantTitle>{restaurant.name}</RestaurantTitle>
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        <SaibaMaisButton>Saiba mais</SaibaMaisButton>
      </Restaurant>
    ))}
  </ListingContainer>
);

export default RestaurantListing;
