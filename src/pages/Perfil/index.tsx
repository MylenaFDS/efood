import React from 'react';
import Header from "../../components/Header";
import { useParams } from 'react-router-dom';
import estrela from '../../assets/images/estrela.jpg';
import HiokiSushi from '../../assets/images/HiokiSushi.svg';
import LaDolceVitaTrattoria from '../../assets/images/LaDolceVitaTrattoria.svg';
import SaboresDaTerra from '../../assets/images/SaboresDaTerra.jpg';
import LosTacosLocos from '../../assets/images/LosTacosLocos.jpg';
import LaBelleEpoque from '../../assets/images/LaBelleEpoque.jpg';
import PalacioDeJade from '../../assets/images/PalacioDeJade.jpg';
import RestaurantModel  from '../../modals/RestaurantModal';


const restaurants:RestaurantModel[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    rate: '5.0',
    star: estrela,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes  irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    highlight: 'Destaque da semana',
    tag: 'Japonesa',
    image: HiokiSushi
  },
  {
    id: 2,
    name: 'La Dolce Vita',
    rate: '5.0',
    star: estrela,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tag: 'Italiana',
    image: LaDolceVitaTrattoria
  },
  {
    id: 3,
    name: 'Sabores da Terra',
    rate: '4.8',
    star: estrela,
    description: 'Sabores da Terra oferece o melhor da culinária brasileira em sua casa! Desfrute de pratos típicos como feijoada e moqueca, com ingredientes frescos e temperos caseiros. Entrega rápida, porções generosas e sabor autêntico. Peça já!',
    tag: 'Brasileira',
    image: SaboresDaTerra
  },
  {
    id: 4,
    name: 'Los Tacos Locos',
    rate: '4.5',
    star: estrela,
    description: 'Los Tacos Locos oferece tacos frescos, burritos suculentos e guacamole irresistível. Sabor autêntico do México entregue rapidamente à sua porta. Peça já e experimente a festa dos sabores!',
    tag: 'Mexicana',
    image: LosTacosLocos
  },
  {
    id: 5,
    name: 'La Belle Époque',
    rate: '4.9',
    star: estrela,
    description: 'La Belle Époque é um refúgio de elegância, onde a autêntica culinária francesa ganha vida. Saboreie pratos clássicos como escargots, coq au vin e crêpes, preparados com maestria e um toque de tradição. Venha experimentar a essência da França em cada garfada!',
    tag: 'Francesa',
    image: LaBelleEpoque
  },
  {
    id: 6,
    name: 'Palácio de Jade',
    rate: '4.4',
    star: estrela,
    description: 'Palácio de Jade traz o autêntico sabor da China com pratos como pato à Pequim e rolinhos primavera. Sabores tradicionais em um ambiente sofisticado. Experimente agora!',
    tag: 'Chinesa',
    image: PalacioDeJade
  }
]

const Perfil = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === Number(id));

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>;
  }

  return (
    <>
      <Header />
      <div>
        <h1>{restaurant.name}</h1>
        <img src={restaurant.image} alt={restaurant.name} />
        <p>{restaurant.description}</p>
        <span>{restaurant.tag}</span>
        <span>{restaurant.rate}</span>
        <img src={restaurant.star} alt="Star" />
        {/* Adicione outros detalhes que deseja exibir */}
      </div>
      
    </>
  );
};


export default Perfil;
